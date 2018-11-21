let nameList = ['张三', '李四', '王五', '1', '2', '3', '4', '5', '6', '7'];

let lottery = document.querySelector('#lotteryBtn');
let stop = document.querySelector('#stopBtn');
let information = document.querySelector('#lotteryInformation');
let time;

lottery.onclick = () => {
    information.classList.remove('hidden');
    stop.classList.remove('hidden');
    lottery.classList.add('hidden');

    time = setInterval(() => {
        let digits = parseInt(Math.random() * 10);
        let tenDigits = parseInt(Math.random() * 5);
        let num = parseInt(tenDigits + "" + digits);

        information.value = nameList[digits];
    }, 100);
}

stop.onclick = () => {
    clearInterval(time);
    stop.classList.add('hidden');
}