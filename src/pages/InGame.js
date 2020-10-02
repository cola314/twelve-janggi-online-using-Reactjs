import React from "react";
import malPath from "../components/Game";
import socketService from "../components/socket";

const InGame = ({info}) => {
    const onClickSurrender = () => {
        socketService.surrenderGame(info.userName);
    }
    const onClickExit = () => {
        socketService.exitGame(info.userName);
    }
    const onClickButton = (btn) => {
        console.log("clicked " + btn);
        socketService.clickButton(info.userName, btn);
    }
    const getImagePath = (idx) => {
        try {
            if(idx < 12) {
                return './images/' + malPath(info.game.board[idx / 3 >> 0][idx % 3]) + '.png';
            }
            else if(idx < 18) {
                return './images/' + malPath(info.game.myBoard[idx - 12]) + '.png';
            }
            else {
                return './images/' + malPath(info.game.opBoard[idx - 18]) + '.png';
            }
        }
        catch (err) {
            return './images/빈칸.png';
        }
    }
    return (
        <>
        {info.msg}
        <div>
            <h1>{info.game.opName}</h1>
            <h1>{info.game.opTime}</h1>
            <button onClick={onClickSurrender}>줴줴</button>
            <button onClick={onClickExit}>나가기</button>
        </div>
        <div className="opArea">
                <button><img src={getImagePath(18)} alt="./images/빈칸.png"/></button>
                <button><img src={getImagePath(19)} alt="./images/빈칸.png"/></button>
                <button><img src={getImagePath(20)} alt="./images/빈칸.png"/></button>
                <button><img src={getImagePath(21)} alt="./images/빈칸.png"/></button>
                <button><img src={getImagePath(22)} alt="./images/빈칸.png"/></button>
                <button><img src={getImagePath(23)} alt="./images/빈칸.png"/></button>
        </div>
        <div>
            <center>
                <button onClick={()=>onClickButton(0)}><img src={getImagePath(0)} alt="./images/빈칸.png"/></button>  
                <button onClick={()=>onClickButton(1)}><img src={getImagePath(1)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(2)}><img src={getImagePath(2)} alt="./images/빈칸.png"/></button>
            </center>
            <center>
                <button onClick={()=>onClickButton(3)}><img src={getImagePath(3)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(4)}><img src={getImagePath(4)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(5)}><img src={getImagePath(5)} alt="./images/빈칸.png"/></button>
            </center>
            <center>
                <button onClick={()=>onClickButton(6)}><img src={getImagePath(6)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(7)}><img src={getImagePath(7)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(8)}><img src={getImagePath(8)} alt="./images/빈칸.png"/></button>
            </center>
            <center>
                <button onClick={()=>onClickButton(9)}><img src={getImagePath(9)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(10)}><img src={getImagePath(10)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(11)}><img src={getImagePath(11)} alt="./images/빈칸.png"/></button> 
            </center>
        </div>
        <div className="myArea">
                <button onClick={()=>onClickButton(12)}><img src={getImagePath(12)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(13)}><img src={getImagePath(13)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(14)}><img src={getImagePath(14)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(15)}><img src={getImagePath(15)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(16)}><img src={getImagePath(16)} alt="./images/빈칸.png"/></button>
                <button onClick={()=>onClickButton(17)}><img src={getImagePath(17)} alt="./images/빈칸.png"/></button>
        </div>
        <div>
            <h1>{info.userName}</h1>
            <h1>{info.game.myTime}</h1>
        </div>
        </>
    );
};

export default InGame;