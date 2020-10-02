import React, { useState } from "react";
import socketService from "../components/socket";

const Login = ({info}) => {
    const [name, setName] = useState('');
    const onChange = (event) => {
        const { target: {value}} = event;
        setName(value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        socketService.loginWithName(name);
    };
    return (
        <>
            <h1>십이장기</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="닉네임" value={name} onChange={onChange}/>
                <br/>
                <input type="submit" />
                {info.msg == 'invalid' && '사용할 수 없는 닉네임입니다'}
            </form>
        </>
    );
};

export default Login;