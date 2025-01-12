import React, { useState, useRef } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname:''
    });
    // useRef는 ref 값으로 컨트롤(Dom 선택)
    // 변수 관리에서도 사용
    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        const {name, value} = e.target;
        // 객체 상태를 업데이트 할 때는 스프레드 문법(불변성을 지켜야 함)
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name} 
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b> 
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;