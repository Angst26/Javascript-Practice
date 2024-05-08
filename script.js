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
// start();

 
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    info: function() {
        console.log(' "Наша программа включает в себя данные: "');
        for (const key in this) {
            console.log(key + this[key])
        }
    },



    chooseExpenses: function() {
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

    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(5);


    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    console.log(appData.expenses);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }

    },
    checkSavings: function(){
        if(appData.savings){
            let save = +prompt('какова сумма накоплений?'),
            percent = +prompt('под какой процент?');
    
            appData.monthIncome = save/100/12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    
    
        } 
    },
    chooseOptExpenses: function(){
        for(let i = 0; i < 3; i++){
            appData.optionalExpenses[i] = +prompt('Статья необязательных расходов?', "");
            
        }
    },
    chooseIncome: function() {
        while(true){
        let items = prompt('что принесет доп.доход?(перечислите через запятую)', 'работа, подработка, стипендия');
        if(typeof(items)!='string' || items == '') {
            continue;
        } else {
            appData.income = items.split(', ')
       // appData.income.push(prompt('что-то еще?', ''))
            break;
        }
    }
        appData.income.sort()
        console.log('способы доп заработка:')
        appData.income.forEach(function(item, i){ console.log((i + 1) + ': ' + item)})

    },
    

};


   
// appData.chooseIncome();

// appData.detectDayBudget();


//appData.detectLevel();



function chooseOptExpenses(){
    for(let i = 0; i < 3; i++){
        appData.optionalExpenses[i] = +prompt('Статья необязательных расходов?', "");
        
    }
}




function getToday() {
    let today = new Date();
    let dateFormatted = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1}-${today.getDate()}`;
    return dateFormatted;
}




// appData.checkSavings();