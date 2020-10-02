const NOTHING = 0;
const PLAYER1 = 1;
const PLAYER2 = 2;

const BOARD = 0;
const HAVING = 1;

const Wang = 0;
const Sang = 1;
const Jang = 2;
const Ja = 3;
const Hu = 4;
const Mu = 5;

const SELECTED = 1;
const MOVED = 2;

const malPath = (mal) => {
    let ret = "";
    if (mal === null) return "빈칸";
    if (mal.player === NOTHING) {
        if (mal.pos.y === 0) ret = "빨빈";
        else if (mal.pos.y === 3) ret = "초빈";
        else {
            if(mal.highlighted) return "빈칸선";
            return "빈칸";
        }
    }
    else {
        if (mal.player === PLAYER1) ret = "초";
        else if (mal.player === PLAYER2) ret = "빨";

        if (mal.type === Ja) ret += "자";
        else if (mal.type === Jang) ret += "장";
        else if (mal.type === Sang) ret += "상";
        else if (mal.type === Wang) ret += "왕";
        else if (mal.type === Hu) ret += "후";
    }
    if (mal.highlighted) ret += "선";
    else ret += "무";
    return ret;
};

export default malPath;