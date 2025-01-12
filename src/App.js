
import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreatUser';
//import InputSample from './InputSample';
//import Counter from './Counter';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중..');
  return users.filter(user => user.active).length;
};

function App() {

  const [ inputs, setInputs ] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'eunyoung',
      email: 'eun@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'test',
      email: 'test@test.com',
      active: false,
    },
    {
      id: 3,
      username: 'ddd',
      email: 'ddd@example.com',
      active: false,
    }
  ]);

  // 특정 돔에 사용하거나, 어떤 값을 기억하고 싶을 때
  const nextId = useRef(4);
  
  // 배열 함수 사용할 떄는 복사하고 사용할 것.(불변성 지키기)
  const onCreate = () => {
    // 1. 스프레드 연산자 사용하기
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // 기존 배열 복사해서 넣으면서 새 항목 추가
    // 1) setUsers([...users, user]);
    // 2. concat 사용
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  // 제거 -> filter
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };
  // 특정값만 업데이트 -> map
  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
  };
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    // <Counter />
    //<InputSample />
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
        />
      <UserList 
        users={users} 
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>활성 사용자 수: {count}</div>
    </>
  );
};

export default App;
