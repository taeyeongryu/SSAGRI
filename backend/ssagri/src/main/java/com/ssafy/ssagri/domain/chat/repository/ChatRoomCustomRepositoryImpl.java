package com.ssafy.ssagri.domain.chat.repository;

public class ChatRoomCustomRepositoryImpl
//        implements ChatRoomCustomRepository
{
//    private final JPAQueryFactory jpaQueryFactory;
//
//    QChatRoom chatRoom = QChatRoom.chatRoom;
//
//    public ChatRoomCustomImpl(EntityManager entityManager) {
//        this.jpaQueryFactory = new JPAQueryFactory(entityManager);
//    }
//
//    //userA,userB가 참여하는 채팅방 있는지 조회
//    //Optional 반환
//    @Override
//    public Optional<ChatRoom> selectByUserAUserB(Long userANo, Long userBNo)
//    {
//        ChatRoom findChatRoom = jpaQueryFactory.selectFrom(chatRoom)
//                .where(
//                        chatRoom.userA.no.eq(userANo).and(chatRoom.userB.no.eq(userBNo))
//                                .or(chatRoom.userA.no.eq(userBNo).and(chatRoom.userB.no.eq(userANo))))
//                .fetchOne();
//        return Optional.ofNullable(findChatRoom);
//    }
//
//    //유저 A가 참여하고 있는 모든 채팅방 select
//    @Override
//    public List<ChatRoom> selectByUserNo(Long no){
//        List<ChatRoom> chatRoomList = jpaQueryFactory
//                .selectFrom(chatRoom)
//                .where(chatRoom.userA.no.eq(no)
//                        .or(chatRoom.userB.no.eq(no))).fetch();
//        return chatRoomList;
//    }


}
