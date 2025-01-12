import React, { useEffect } from "react";

// 마운트 : 컴포넌트가 나타남을 의미
function User({ user, onRemove, onToggle }) {
  // user을 반복해서 사용하고 싶지 않을 때 
  const { username, email, id, active } = user;
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   // props -> state
  //   // REST API
  //   // 라이브러리 사용
  //   // setInternal, setTimeout
  //   return () => {
  //     // clearInterval, clearTimeout
  //     // 라이브러리 인스턴스 제거
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   };
  // }, []);

  useEffect(()=> {
    console.log('user 값이 설정됨');
    //console.log(user);
    return () => {
      console.log('user 값이 바뀌기 전');
      //console.log(user);
    }
  }, []);
  return (
    <div>
      <b 
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username} 
      </b>
      &nbsp;
      <span>({email})</span>
      {/* 파라미터를 넣어주고 싶어서 온클릭에 새로운 함수 추가 
        클릭했을 때 파라미터로 받아온 onRemove를 id 값으로 삭제하겠다.
        화살표 함수로 구현해야 하고, onRemove(id)로 구현하면 렌더링 시 삭제됨
      */}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      { 
        users.map(
          user => (
              <User 
                user={user} 
                key={user.id} 
                onRemove={onRemove}
                onToggle={onToggle}
              />
          )
          //(user, index) => (<User user={user} key={index} />)
        )
      }
    </div>
  );
};

export default UserList;

