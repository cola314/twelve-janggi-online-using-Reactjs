import socketio from 'socket.io-client';

//const url = 'http://localhost:3000';
const url = 'https://twelvejanggi.run.goorm.io';

let started = false;
let socket;
let setInfo;

let socketService = {}

socketService.init = (fn) => {
    if(started) return;
    started = true;

    setInfo = fn;
    socket = socketio.connect(url);

    socket.on('response', (socket) => {
        //console.log(socket.page);
        setInfo(socket);
        console.log(socket);
    });
};

socketService.loginWithName = (name) => {
    socket.emit('loginWithName', {name : name});
};

socketService.createRoom = (name, roomNum, password) => {
    socket.emit('createRoom', {name : name, roomNum : roomNum, password : password});
};

socketService.enterRoom = (name, roomNum, password) => {
    socket.emit('enterRoom', {name : name, roomNum : roomNum, password : password});
};

socketService.exitRoom = (name, roomNum) => {
    socket.emit('exitRoom', {name : name, roomNum : roomNum});
};

socketService.clickButton = (name, btn) => {
    socket.emit('clickButton', {name : name, btn : btn});
};

socketService.exitGame = (name) => {
    socket.emit('exitGame', {name : name});
};

socketService.surrenderGame = (name) => {
    socket.emit('surrenderGame', {name : name});
};

export default socketService;