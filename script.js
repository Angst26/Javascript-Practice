'use strict';
let money, time;


function start(){
    let dateFormatted = getToday();
    money = +prompt ("Ваш бюджет на месяц?", "30000");
    time = prompt ("Введите дату в формате YYYY-MM-DD", dateFormatted);
    while(isNaN(money) || money =="" || money == null){
        money = +prompt ("Ваш бюджет на месяц?", "30000");
    }

}
start();

 
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses(){

    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    
    };

}

chooseExpenses();
   


detectDayBudget();


detectLevel();



function chooseOptExpenses(){
    for(let i = 0; i < 3; i++){
        appData.optionalExpenses[i] = +prompt('Статья необязательных расходов?', "");
        
    }
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(5);


    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    console.log(appData.expenses);
}

function getToday() {
    let today = new Date();
    let dateFormatted = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1}-${today.getDate()}`;
    return dateFormatted;
}

function checkSavings(){
    if(appData.savings){
        let save = +prompt('какова сумма накоплений?'),
        percent = +prompt('под какой процент?');

        appData.monthIncome = save/100/12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);


    } 
}


checkSavings();