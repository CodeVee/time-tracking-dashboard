const url = 'data.json';
const click = 'click';

const daily = 'daily';
const weekly = 'weekly';
const monthly = 'monthly';

const dailyBtn = document.getElementById('btn-daily');
const weeklyBtn = document.getElementById('btn-weekly');
const monthlyBtn = document.getElementById('btn-monthly');
const activeBtn = 'profile__btn--active';

const workCurrent = document.getElementById('work-current');
const playCurrent = document.getElementById('play-current');
const studyCurrent = document.getElementById('study-current');
const exerciseCurrent = document.getElementById('exercise-current');
const socialCurrent = document.getElementById('social-current');
const selfCareCurrent = document.getElementById('self-care-current');

const workPrevious = document.getElementById('work-previous');
const playPrevious = document.getElementById('play-previous');
const studyPrevious = document.getElementById('study-previous');
const exercisePrevious = document.getElementById('exercise-previous');
const socialPrevious = document.getElementById('social-previous');
const selfCarePrevious = document.getElementById('self-care-previous');


const resetBtns = () => {
    const btns = [dailyBtn, weeklyBtn, monthlyBtn];
    btns.forEach(btn => btn.classList.remove(activeBtn));
}

const loadHours = async () => {
    const response = fetch(url)
    .then(res => res.json());

    const jsondata = await response;    
    return jsondata;
}

const processPeriod = async (period) => {

    const hours = await loadHours();
    
    workCurrent.innerText = hours[0].timeframes[period].current;
    workPrevious.innerText = hours[0].timeframes[period].previous;
    
    playCurrent.innerText = hours[1].timeframes[period].current;
    playPrevious.innerText = hours[1].timeframes[period].previous;

    studyCurrent.innerText = hours[2].timeframes[period].current;
    studyPrevious.innerText = hours[2].timeframes[period].previous;

    exerciseCurrent.innerText = hours[3].timeframes[period].current;
    exercisePrevious.innerText = hours[3].timeframes[period].previous;

    socialCurrent.innerText = hours[4].timeframes[period].current;
    socialPrevious.innerText = hours[4].timeframes[period].previous;

    selfCareCurrent.innerText = hours[5].timeframes[period].current;
    selfCarePrevious.innerText = hours[5].timeframes[period].previous;

}

const handler = async (e) => {
    processPeriod(weekly)
};

const btnDailyHandler = (e) => {
    resetBtns();
    dailyBtn.classList.add(activeBtn);
    processPeriod(daily);
}

const btnWeeklyHandler = (e) => {
    resetBtns();
    weeklyBtn.classList.add(activeBtn);
    processPeriod(weekly);
}

const btnMonthlyHandler = (e) => {
    resetBtns();
    monthlyBtn.classList.add(activeBtn);
    processPeriod(monthly);
}

dailyBtn.addEventListener(click, btnDailyHandler);
weeklyBtn.addEventListener(click, btnWeeklyHandler);
monthlyBtn.addEventListener(click, btnMonthlyHandler);

document.addEventListener('DOMContentLoaded', handler);
