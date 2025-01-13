
import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreatUser';
//import InputSample from './InputSample';
//import Counter from './Counter';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중..');
  return users.filter(user => user.active).length;
};

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: 
    [
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
    ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    default:
      throw new Error('Ungandled action');
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  const { username, email} = state.inputs;

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, [])

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} />
      <UserList  users={users} />
      <div>활성 사용자 수: 0</div>
    </>
  );
};

export default App;
