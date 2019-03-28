let nameList = [
    '王茜宁', '王晓勇', '张大洲', '康瑞杰', '杨焱焱', '田志军',
    '王雨欣', '孙涛', '贾静', '苏森', '陈漫', '马家文',
    '张宇敬', '魏聪', '毕新赛', '张尧', '闫巧燕', '张凯茜',
    '王佳', '郭少揆', '冯臻钰', '张磊', '魏嘉程', '郝运',
    '郝航臣', '任皓', '崔淼', '田祚', '王星', '赵龙',
    '刘琦', '马孝于', '蒋雨诗', '马婧婷'
];

let lottery = document.querySelector('#lotteryBtn');
let stop = document.querySelector('#stopBtn');
let information = document.querySelector('#lotteryInformation');
let time;

lottery.onclick = () => {
    // information.classList.remove('hidden');
    stop.classList.remove('hidden');
    lottery.classList.add('hidden');

    time = setInterval(() => {
        // 生成1~36之间的随机数
        let digits = parseInt(Math.random() * 34);

        console.log(digits + "  " + nameList[digits]);

        information.value = nameList[digits];
    }, 100);
}

stop.onclick = () => {
    clearInterval(time);
    stop.classList.add('hidden');
    lottery.classList.remove('hidden');
}