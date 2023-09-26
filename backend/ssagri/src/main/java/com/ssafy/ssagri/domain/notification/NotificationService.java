package com.ssafy.ssagri.domain.notification;

import com.ssafy.ssagri.domain.auctionbid.repository.AuctionBidRepository;
import com.ssafy.ssagri.entity.auction.AuctionBid;
import com.ssafy.ssagri.util.exception.CustomException;
import com.ssafy.ssagri.util.exception.CustomExceptionStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import springfox.documentation.spring.web.json.Json;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;



@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class NotificationService {
    // userNo, SseEmitter 이렇게 두개가 들어간다.
    // send할 때는 경매에 참여하고 있는 사람 select해서 보낸다.
    private final Map<Long, SseEmitter> sseEmitterMap = new ConcurrentHashMap<>();
    private final AuctionBidRepository auctionBidRepository;

    public SseEmitter addSseEmitter(Long userNo) {
        log.info("userNo = {}", userNo);
        //60분 짜리 SseEmitter 생성
        SseEmitter sseEmitter = new SseEmitter(60 * 60 * 1000L);

        log.info("sseEmitter = {}", sseEmitter);

        //더미 메시지 보냄
        try {
            sseEmitter.send(SseEmitter.event().name("sse-emitter-created"));
        } catch (IOException e) {
            new CustomException(CustomExceptionStatus.SSEEMITTER_CAN_NOT_CREATE);
        }
        //완료,에러,타임아웃 발생시 map에서 제거하도록 이벤트 작성
        sseEmitter.onError((e) -> sseEmitterMap.remove(userNo));
        sseEmitter.onTimeout(() -> sseEmitterMap.remove(userNo));
        sseEmitter.onCompletion(() -> sseEmitterMap.remove(userNo));

        sseEmitterMap.put(userNo, sseEmitter);

        return sseEmitter;
    }

    public void sendMessageToBidder(Long AuctionNo, String bidderNickname, int price) {
        //메시지 Json으로 만들어 준다.
        //"bidderNickname을 가진 사용자가, price을 입찰했다"는 의미
        String sendingMessage = new JSONObject()
                .put("bidderNickname", bidderNickname)
                .put("price", price)
                .toString();

        //AuctionNo에 해당하는 경매에 참여하는 사람을 전부 가져온다.
        List<AuctionBid> auctionBids = auctionBidRepository.selectAuctionBidByAuctionProduct(AuctionNo);

        //Set 만들어준다.
        Set<Long> bidderNoSet = new HashSet<>();

        //경매 입찰을 돌면서 Set에 추가해준다.
        for (AuctionBid auctionBid : auctionBids) {
            Long bidderNo = auctionBid.getUser().getNo();
            bidderNoSet.add(bidderNo);
        }

        //SseEmitter Map을 돌면서 Bid한 사람이 있는지 찾음
        for (Long userNo : sseEmitterMap.keySet()) {
            try {
                //비드한 사람의 Emitter를 찾으면 메시지 전송한다.
                if(bidderNoSet.contains(userNo)){
                    sseEmitterMap.get(userNo).send(SseEmitter.event().name("new bid").data(sendingMessage));
                }
            } catch (IOException e) {
                //유효하지 않은 Emitter 제거한다.
                sseEmitterMap.remove(userNo);
                throw new CustomException(CustomExceptionStatus.SSEEMITTER_DOES_NOT_EXIST);
            }
        }
    }

    public void sendMessageTest(){
        for (Long userNo : sseEmitterMap.keySet()) {
            try {
                sseEmitterMap.get(userNo).send(SseEmitter.event().name("new bid").data("test"));
            } catch (IOException e) {
                sseEmitterMap.remove(userNo);
                throw new CustomException(CustomExceptionStatus.SSEEMITTER_DOES_NOT_EXIST);
            }
        }
    }
}
