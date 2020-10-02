import React from "react";
import socketService from "../components/socket";

const WaitingRoom = ({info}) => {
    const onClickEnter = (roomNum) => {
        let password = prompt('enter password');
        if(password === null) return;
        socketService.enterRoom(info.userName, roomNum, password);
        console.log(password);
    }
    const onClickMakeRoom = () => {
        let roomNum = prompt("방 번호를 입력하세요");
        if(roomNum == null) return;
        let password = prompt("비밀번호를 입력하세요");
        if(password == null) return;
        socketService.createRoom(info.userName, roomNum, password);
    }
    return (
        <>
            <h1>WaitingRoom</h1>
            <h3>{ info.userName }</h3>
            <button onClick={onClickMakeRoom}>방 만들기</button>
            {Object.keys(info.roomList).map((key) => (
                <div key={key} onClick={() => {onClickEnter(info.roomList[key].roomNum)}}>
                    {'방 이름 : ' + info.roomList[key].roomName } <br/>
                    {'상태 : ' + info.roomList[key].status}
                </div>
            ))}
        </>
    );
};

export default WaitingRoom;