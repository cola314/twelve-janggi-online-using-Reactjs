(this["webpackJsonpreact-janggi"]=this["webpackJsonpreact-janggi"]||[]).push([[0],{29:function(e,t,n){e.exports=n(66)},61:function(e,t){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a,r,l=n(0),m=n.n(l),c=n(27),i=n.n(c),o=n(6),u=n(28),g=n.n(u),s=!1,E={init:function(e){s||(s=!0,r=e,(a=g.a.connect("https://twelvejanggi.run.goorm.io")).on("response",(function(e){r(e),console.log(e)})))},loginWithName:function(e){a.emit("loginWithName",{name:e})},createRoom:function(e,t,n){a.emit("createRoom",{name:e,roomNum:t,password:n})},enterRoom:function(e,t,n){a.emit("enterRoom",{name:e,roomNum:t,password:n})},exitRoom:function(e,t){a.emit("exitRoom",{name:e,roomNum:t})},clickButton:function(e,t){a.emit("clickButton",{name:e,btn:t})},exitGame:function(e){a.emit("exitGame",{name:e})},surrenderGame:function(e){a.emit("surrenderGame",{name:e})}},f=E,p=function(e){var t=e.info,n=Object(l.useState)(""),a=Object(o.a)(n,2),r=a[0],c=a[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null,"\uc2ed\uc774\uc7a5\uae30"),m.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f.loginWithName(r)}},m.a.createElement("input",{type:"text",placeholder:"\ub2c9\ub124\uc784",value:r,onChange:function(e){var t=e.target.value;c(t)}}),m.a.createElement("br",null),m.a.createElement("input",{type:"submit"}),"invalid"==t.msg&&"\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \ub2c9\ub124\uc784\uc785\ub2c8\ub2e4"))},b=function(e){var t=e.info;return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null,"WaitingRoom"),m.a.createElement("h3",null,t.userName),m.a.createElement("button",{onClick:function(){var e=prompt("\ubc29 \ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694");if(null!=e){var n=prompt("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694");null!=n&&f.createRoom(t.userName,e,n)}}},"\ubc29 \ub9cc\ub4e4\uae30"),Object.keys(t.roomList).map((function(e){return m.a.createElement("div",{key:e,onClick:function(){!function(e){var n=prompt("enter password");null!==n&&(f.enterRoom(t.userName,e,n),console.log(n))}(t.roomList[e].roomNum)}},"\ubc29 \uc774\ub984 : "+t.roomList[e].roomName," ",m.a.createElement("br",null),"\uc0c1\ud0dc : "+t.roomList[e].status)})))},k=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null,"MakeRoom"))},d=function(e){var t="";if(null===e)return"\ube48\uce78";if(0===e.player)if(0===e.pos.y)t="\ube68\ube48";else{if(3!==e.pos.y)return e.highlighted?"\ube48\uce78\uc120":"\ube48\uce78";t="\ucd08\ube48"}else 1===e.player?t="\ucd08":2===e.player&&(t="\ube68"),3===e.type?t+="\uc790":2===e.type?t+="\uc7a5":1===e.type?t+="\uc0c1":0===e.type?t+="\uc655":4===e.type&&(t+="\ud6c4");return e.highlighted?t+="\uc120":t+="\ubb34",t},h=function(e){var t=e.info,n=function(e){console.log("clicked "+e),f.clickButton(t.userName,e)},a=function(e){try{return e<12?"./images/"+d(t.game.board[e/3>>0][e%3])+".png":e<18?"./images/"+d(t.game.myBoard[e-12])+".png":"./images/"+d(t.game.opBoard[e-18])+".png"}catch(n){return"./images/\ube48\uce78.png"}};return m.a.createElement(m.a.Fragment,null,t.msg,m.a.createElement("div",null,m.a.createElement("h1",null,t.game.opName),m.a.createElement("h1",null,t.game.opTime),m.a.createElement("button",{onClick:function(){f.surrenderGame(t.userName)}},"\uc934\uc934"),m.a.createElement("button",{onClick:function(){f.exitGame(t.userName)}},"\ub098\uac00\uae30")),m.a.createElement("div",{className:"opArea"},m.a.createElement("button",null,m.a.createElement("img",{src:a(18),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",null,m.a.createElement("img",{src:a(19),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",null,m.a.createElement("img",{src:a(20),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",null,m.a.createElement("img",{src:a(21),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",null,m.a.createElement("img",{src:a(22),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",null,m.a.createElement("img",{src:a(23),alt:"./images/\ube48\uce78.png"}))),m.a.createElement("div",null,m.a.createElement("center",null,m.a.createElement("button",{onClick:function(){return n(0)}},m.a.createElement("img",{src:a(0),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(1)}},m.a.createElement("img",{src:a(1),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(2)}},m.a.createElement("img",{src:a(2),alt:"./images/\ube48\uce78.png"}))),m.a.createElement("center",null,m.a.createElement("button",{onClick:function(){return n(3)}},m.a.createElement("img",{src:a(3),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(4)}},m.a.createElement("img",{src:a(4),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(5)}},m.a.createElement("img",{src:a(5),alt:"./images/\ube48\uce78.png"}))),m.a.createElement("center",null,m.a.createElement("button",{onClick:function(){return n(6)}},m.a.createElement("img",{src:a(6),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(7)}},m.a.createElement("img",{src:a(7),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(8)}},m.a.createElement("img",{src:a(8),alt:"./images/\ube48\uce78.png"}))),m.a.createElement("center",null,m.a.createElement("button",{onClick:function(){return n(9)}},m.a.createElement("img",{src:a(9),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(10)}},m.a.createElement("img",{src:a(10),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(11)}},m.a.createElement("img",{src:a(11),alt:"./images/\ube48\uce78.png"})))),m.a.createElement("div",{className:"myArea"},m.a.createElement("button",{onClick:function(){return n(12)}},m.a.createElement("img",{src:a(12),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(13)}},m.a.createElement("img",{src:a(13),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(14)}},m.a.createElement("img",{src:a(14),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(15)}},m.a.createElement("img",{src:a(15),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(16)}},m.a.createElement("img",{src:a(16),alt:"./images/\ube48\uce78.png"})),m.a.createElement("button",{onClick:function(){return n(17)}},m.a.createElement("img",{src:a(17),alt:"./images/\ube48\uce78.png"}))),m.a.createElement("div",null,m.a.createElement("h1",null,t.userName),m.a.createElement("h1",null,t.game.myTime)))},C=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null,"EndGame"))},v=function(e){var t=e.info;return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null,"\uc0c1\ub300\ub97c \uae30\ub2e4\ub9ac\ub294 \uc911..."),m.a.createElement("button",{onClick:function(){f.exitRoom(t.userName)}},"\ub098\uac00\uae30"))};var N=function(){var e=Object(l.useState)({page:"login",userName:"Bill",roomList:{},game:{color:"red",turn:"red",myTime:30,opTime:30,opName:"\uae40\uc815\ud638",board:{}},msg:""}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(l.useEffect)((function(){f.init(a)})),m.a.createElement(m.a.Fragment,null,function(e){switch(e){case"login":return m.a.createElement(p,{info:n});case"waitingRoom":return m.a.createElement(b,{info:n});case"makeRoom":return m.a.createElement(k,{info:n});case"inGame":return m.a.createElement(h,{info:n});case"endGame":return m.a.createElement(C,{info:n});case"waitingGame":return m.a.createElement(v,{info:n});default:return m.a.createElement(m.a.Fragment,null,"w"+e+"w")}}(n.page))};n(65);i.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(N,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0fee1a5b.chunk.js.map