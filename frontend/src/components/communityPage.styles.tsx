import { styled } from 'styled-components';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Matter, {
  World,
  Engine,
  Render,
  Bodies,
  Mouse,
  MouseConstraint,
  Runner
} from 'matter-js';

const CommunityDiv = styled.div`
  width: 100%;
  /* height: 100%; */

  background-color: #f4f7f9;
`;

const Div = styled.div``;

const LeftDiv = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  width: 945px;
  height: 540px;
  border-bottom: 10px solid #d0e7d2;
`;
const RightDiv = styled.div`
  margin-top: 70px;

  width: 20vw;
  height: 50vh;
  background-color: #f2ead3;
  border: 1.3px solid rgb(0, 0, 0, 0.1);
  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.4);
  border-radius: 10px;
  animation: fadein 1s ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const FlexDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
`;

const FontDiv = styled.div`
  font-size: 20px;
`;
const CommuList = styled(FontDiv)`
  font-size: 25px;
  margin: 30px 0 45px 50px;
`;
const CommuTag = styled(FontDiv)`
  font-size: 25px;
  margin-left: 50px;
`;
const MidTag = styled.div`
  font-size: 42px;
  margin: 160px 0 0 200px;
  font-weight: 600;
  color: #4786fa;
  /* opacity: 0; */
  transition: opacity 1s ease;

  &.visible {
    opacity: 1;
  }
`;
const MidTag2 = styled.div`
  font-size: 42px;
  margin: 40px 0 0 220px;
  font-weight: 600;
  color: #4786fa;
`;

const ListDiv = styled.div`
  display: flex;
  margin: 20px auto;
  width: 250px;
  height: 50px;
  /* border: 2px solid red; */
`;

const BrTag = styled.div`
  margin-top: 220px;
  width: 100%;
  height: 1px;
  /* border: 1px solid rgb(0, 0, 0, 0.2); */
`;

const MidDiv = styled.div`
  width: 100%;
  height: 600px;
  /* background-color: #DED1D1; */
`;
const BottomDiv = styled.div`
  width: 100%;
  height: 800px;
  background-color: #ebe1e1;
  /* border: 2px solid black; */
`;
const CommuPage = styled.div`
  margin-top: 200px;
  width: 300px;
  height: 300px;
  border: 10px;
  border-radius: 15px;
  background-color: white;
`;

const ImgDiv = styled.img`
  width: 600px;
  height: 500px;
  opacity: 0.3;
  border-radius: 50px;
`;

const LifeTag = styled.div`
  font-size: 25px;
  margin: 250px 0 0 150px;
  /* margin-top: 100px; */
  width: 100px;
  height: 100px;
  border: 2px solid black;
`;

const CommunityMain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalScore = useRef<number>(0);
  const [ref, inView] = useInView({
    triggerOnce: true, // 한 번만 트리거
    threshold: 0.5 // 50% 이상 화면에 보일 때 트리거
  });

  useEffect(() => {
    if (inView) {
      // inView 값이 true이면 화면에 보임
      // 서서히 나타나도록 클래스 추가
    }
  }, [inView, ref]);

  useEffect(() => {
    // 마우스 클릭 이벤트 처리
    // Events.on(mouse, 'mousedown', (event) => {
    //   const mousePosition = event.mouse.position;

    //   // 월드에 추가된 모든 요소를 순회하면서 클릭된 요소를 찾습니다.
    //   for (const body of engine.world.bodies) {
    //     if (body.isClickable && pointInBody(mousePosition, body)) {
    //       // 클릭된 요소를 저장합니다.
    //       setClickedElement(body);
    //     }
    //   }
    // });

    const textToImage = (text, width, height, fontsize, color) => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        // 컨텍스트가 유효하지 않으면 처리할 내용 추가
        console.error('2D 컨텍스트를 가져올 수 없습니다.');
        return null;
      }

      // 원 그리기
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
      ctx.fillStyle = `${color}`; // 배경 색상
      ctx.fill();

      // 텍스트 추가
      ctx.fillStyle = 'white'; // 텍스트 색상
      // ctx.font = '24px Arial';
      ctx.font = `${fontsize} Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, width / 2, height / 2);

      // Canvas를 이미지로 변환
      const img = new Image();
      img.src = canvas.toDataURL(); // Canvas를 이미지로 변환

      return img;
    };

    // 이미지 생성
    // const textImage1 = textToImage('자유 게시판', 320, 320, '30px', '#8ECDDD');
    // const textImage2 = textToImage('수명 게시판', 85, 85, '14px', '#E4F1FF');
    const textImage1 = new Image();
    textImage1.src =
      textToImage('자유 게시판', 320, 320, '30px', '#8ECDDD')?.src || '';

    const textImage2 = new Image();
    textImage2.src =
      textToImage('수명 게시판', 85, 85, '14px', '#E4F1FF')?.src || '';

    // 2d 엔진 모델
    const engine = Engine.create(); // 물리엔진
    engine.world.gravity.y = -0.05;
    // engine.world.gravity.x = -0.1;
    const render = Render.create({
      // 시각화
      engine,
      canvas: canvasRef.current!,
      options: {
        width: 950,
        height: 530,
        background: '#f4f7f9',
        wireframes: false
      }
    });

    const topWall = Bodies.rectangle(0, 0, 1890, 10, {
      // x,y좌표, 바닥 너비, 바닥 높이
      isStatic: true, // 다른 사물이 통과하지 못함
      collisionFilter: {
        group: -1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#D0E7D2'
      }
    });

    const leftWall = Bodies.rectangle(5, 0, 10, 990, {
      isStatic: true, // 다른 사물이 통과하지 못함
      collisionFilter: {
        group: -1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#D0E7D2'
      }
    });
    const rightWall = Bodies.rectangle(940, 0, 10, 990, {
      isStatic: true, // 다른 사물이 통과하지 못함
      collisionFilter: {
        group: -1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#D0E7D2'
      }
    });

    const group1 = Bodies.circle(250, 480, 160, {
      label: 'user',
      isClickable: true,
      collisionFilter: {
        group: 1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#8ECDDD',
        sprite: {
          texture: textImage1.src
        }
        // visible: false
      }
    });
    const group2 = Bodies.circle(410, 650, 85, {
      label: 'user',
      collisionFilter: {
        group: 1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#E4F1FF',
        sprite: {
          texture: textImage2.src
        }
      }
    });
    const group3 = Bodies.circle(470, 600, 60, {
      label: 'user',
      collisionFilter: {
        group: 1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#B0D9B1'
      }
    });
    const group4 = Bodies.circle(400, 650, 50, {
      label: 'user',
      collisionFilter: {
        group: 1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#AED2FF'
      }
    });
    const group5 = Bodies.circle(500, 650, 130, {
      label: 'user',
      collisionFilter: {
        group: 1 // 특정 그룹에 대해서만 다른 효과를 내기 위해 그룹 묶기
      },
      render: {
        fillStyle: '#75C2F6'
      }
    });
    const group6 = Bodies.circle(520, 600, 80, {
      label: 'user',

      render: {
        fillStyle: '#78D6C6'
      }
    });
    const group7 = Bodies.circle(400, 550, 100, {
      label: 'user',

      render: {
        fillStyle: '#5CD2E6'
      }
    });

    const infiniteArr = Array.from({ length: 10 }).map((_) => {
      // 떨어지는 물체 로직
      return Bodies.circle(Math.random() * 800, 500, 10, {
        // x좌표, y좌표, 원반지름
        label: 'ball',
        restitution: 0.3, // 물체의 탄성
        collisionFilter: {
          group: -1
        },
        render: {
          sprite: {
            texture: '/assets/img/bubles.png',
            xScale: 0.12,
            yScale: 0.12
          },
          fillStyle: 'rgba(255, 255, 0, 0.5)'
        }
      });
    });

    World.add(engine.world, [
      rightWall,
      leftWall,
      topWall,
      group1,
      group2,
      group3,
      group4,
      group5,
      group6,
      group7
    ]);

    const runner = Runner.run(engine);

    const mouse = Mouse.create(render.canvas); // 마우스객체 생성
    const mouseConstraint = MouseConstraint.create(engine, {
      //mouseConstraint 객체는 물리 엔진과 연결되어, 마우스 입력에 따라 물체를 조작
      mouse
    });

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          resolve();
        }, ms);
      });

    const compositeArr: Matter.Body[] = [];

    const spreadBall = async (ball: Matter.Body) => {
      //
      compositeArr.push(ball);
      World.add(engine.world, compositeArr);
      await wait(2200);
      compositeArr.pop();
      World.remove(engine.world, compositeArr);
    };

    const event = async () => {
      World.add(engine.world, mouseConstraint);
      Render.run(render);

      for (const ball of infiniteArr) {
        await spreadBall(ball);
        totalScore.current = totalScore.current + 1;
      }
    };

    event();

    return () => {
      Runner.stop(runner);
      Render.stop(render);
    };
  }, []);

  return (
    <CommunityDiv>
      <FlexDiv>
        <LeftDiv>
          <div className='space-y-[1rem]'>
            <div
              className='relative'
              style={{
                width: 300,
                height: 400
              }}
            >
              <canvas ref={canvasRef} />
            </div>
          </div>
        </LeftDiv>
        <RightDiv>
          <CommuList>금주의 게시판 순위</CommuList>
          <ListDiv>
            1. <CommuTag>국내야구</CommuTag>
          </ListDiv>
          <ListDiv>
            2. <CommuTag>해외축구</CommuTag>
          </ListDiv>
          <ListDiv>
            3. <CommuTag>만화</CommuTag>
          </ListDiv>
          <ListDiv>
            4. <CommuTag>LG 트윈스</CommuTag>
          </ListDiv>
          <ListDiv>
            5. <CommuTag>대출</CommuTag>
          </ListDiv>
        </RightDiv>
      </FlexDiv>
      <BrTag></BrTag>
      <MidDiv>
        <FlexDiv>
          <ImgDiv src='/assets/img/commuMid.png'></ImgDiv>
          <Div>
            <MidTag>원하는 게시판에서 활동을 하고</MidTag>
            <MidTag2>게시판의 수명을 늘려주세요!</MidTag2>
          </Div>
        </FlexDiv>
      </MidDiv>
      <BottomDiv>
        <Div>
          <LifeTag>남은 게시판 생명</LifeTag>
          <FlexDiv>
            <CommuPage></CommuPage>
            <CommuPage></CommuPage>
            <CommuPage></CommuPage>
          </FlexDiv>
        </Div>
      </BottomDiv>
    </CommunityDiv>
  );
};

export default CommunityMain;
