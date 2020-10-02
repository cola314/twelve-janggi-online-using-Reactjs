import React from "react";
import socketService from "../components/socket";

const WaitingGame = ({info}) => {
    const onClick = () => {
        socketService.exitRoom(info.userName);
    }
    return (
        <>
            <h1>상대를 기다리는 중...</h1>
            <button onClick={onClick}>나가기</button>
        </>
    );
};

export default WaitingGame;