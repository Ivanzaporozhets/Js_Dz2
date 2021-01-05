//1
let x = prompt('Введите любое число');
alert(Math.sign(x));

//2
let myMoney = prompt('Сколько моих денег');
let friendsMoney = prompt('Сколько денег у моего друга');
if (+myMoney + +friendsMoney >= 1000) {
    alert("Мы летим на Майорку!")
}
else {
    alert("Пойдем выпьем пива")
};


//3
let age = prompt('Укажите свой возраст');
if (age >= 20 && age < 27) {
    alert("Вы получили повестку")
};

//4
let routeTaxi = prompt('Выберете число: 225,255, 411, 101, 7, 4, 27');
if (routeTaxi == 225 | routeTaxi == 255 | routeTaxi == 7) {
    alert("Ваша карета подана")
};


//5
let day = prompt('Введите любой день недели');
if (day !== "Воскресенье" && day !== "Суббота") {
    alert("К сожалению, Вам нужно работать")
}


//6
let x = prompt('Введите число от -20 до 20');
let y = prompt('Введите число от -20 до 20');
if (x <= 1 & y >= 3 | y < 0) {
    alert(+x + +y)
}
else {
    alert('Неверно!')
};


//7
let x = prompt('Введите число');
let y = prompt('Введите еще одно число');
if (x > 2 & x < 11 | y >= 6 & y < 14) {
    alert(+x + 2)
}
else {
    alert(+x + 5)
};


//8
let userName = prompt('Введите своё имя');
if (userName != null && userName != "") {
    alert(`Привет, дорогой ${userName}`)
}
else {
    alert('Привет, дорогой друг')
};


//9.1
let greeting = '';
let lang = prompt('Выберете язык: ru en de');
if (lang == 'ru') {
    greeting = 'Приветствую Вас';
}
else if (lang == 'en') {
    greeting = 'Greeting'
}
else if (lang == 'de') {
    greeting = 'Ich grüße sie'
}
else {
    greeting = 'Ошибка выбора языка'
};


//9.2
let greeting = '';
let lang = prompt('Выберете язык: ru en de');
switch (lang) {
    case 'ru':
        greeting = 'Приветствую Вас';
        break;
    case 'en':
        greeting = 'Greeting'
        break
    case 'de':
        greeting = 'Ich grüße sie';
        break
    default:
        greeting = 'Ошибка выбора языка';
};


//10
var month = (new Date()).getMonth();
console.log(month);
if (month == 1 | month == 0 | month == 11) {
    alert('Зима')
}
else if (month == 2 | month == 3 | month == 4) {
    alert('Весна')
}
else if (month == 5 | month == 6 | month == 7) {
    alert('Лето')
}

else {
    alert('Осень')
};


//11
let lang = prompt('Выберите язык: en или ru');
let day = prompt('Введите цифру от 0 до 6');
let result = '';
if (lang == 'ru') {
    if (day == 0) {
        result = 'Воскресенье'
    }
    else if (day == 1) {
        result = 'Понедельник'
    }
    else if (day == 2) {
        result = 'Вторник'
    }
    else if (day == 3) {
        result = 'Среда'
    }
    else if (day == 4) {
        result = 'Четверг'
    }
    else if (day == 5) {
        result = 'Пятница'
    }
    else if (day == 6) {
        result = 'суббота'
    }
    else {
        alert('Не правильное значение')
    }

}
else if (lang == 'en') {
    if (day == 0) {
        result = 'Sunday'
    }
    else if (day == 1) {
        result = 'Monday'
    }
    else if (day == 2) {
        result = 'Tuesday'
    }
    else if (day == 3) {
        result = 'Wednesday'
    }
    else if (day == 4) {
        result = 'Thursday'
    }
    else if (day == 5) {
        result = 'Friday'
    }
    else if (day == 6) {
        result = 'Saturday'
    }
    else {
        alert('Incorrect value')
    }
}
else {
    alert('Incorrect value')
};


//12.1
let userName = prompt('Введите имя');
let age = prompt('Введите возраст ');
switch (userName + "|" + age) {
    case ('John|29'):
        console.log(`Привет ${userName} ${age}`)
        break;
    case ('Kate|15'):
        console.log(`Привет ${userName} ${age}`)
        break;
    default: console.log('Пока');
}



//12.2
let userName = prompt('Введите имя');
let age = prompt('Введите возраст ');
userName == 'John' && age == 29 ? console.log(`Привет ${userName} ${age}`) :
    userName == 'Kate' && age == 15 ? console.log(`Привет ${userName} ${age}`) :
        console.log('Пока');


//Циклы

//1
let str = '';

for (let i = 0; i < 6; i++) {
    str += '.#';
}
console.log(str + '.');


//2
number = '';
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) number = i ** 2, console.log(number)
}


//3
let userName = prompt('Введите Имя');
for (; ;) {
    console.log('Happy birthday to you' + '\n' +
        'Happy birthday to you' + '\n' +
        (`Happy birthday dear ${userName}`) + '\n' +
        'Happy birthday to you')
    break
}


//4
do {
    var answer = confirm("test");
} while (answer === false);


//5
let number = prompt("Введите число");
let sum = 0;
for (i = 1; i <= number; i++) {
    if (i % 2 !== 0)
        sum += i
}
alert(sum);


//6
let number = 0
for (i = 0; ; i++) {
    number = Math.random()
    if (number > 0.9)
        break
}
console.log(number)
console.log(i + 1);

//7
let result = 0;
for (i = 2; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        result = (j * i)
        console.log(`${i}x${j}=${result}`)
    }
}



//8 Он очень много раз перевернулся в гробу)
let n = 15;
let fib = [0, 1];
for (i = 1; i < n; i++, fib[i] = fib[i - 1] + fib[i - 2]) { };
console.log(fib.join(' '));


//9
let sum = 0;
let quantity = 0;
let average = 0;
for (i = 0; ; i++) {
    let randomNumber = prompt("Введите число")
    if (randomNumber === null)
        break;
    else {
        sum += +randomNumber;
        quantity = i + 1;
        average = sum / quantity
    }
}
console.log(`Сумма ${sum}, Количество ввёденных чисел ${quantity}, Среднее арифмитическое ${average}`);



//10
let correctPassword = "js1995";
for (; ;) {
    let userPassword = prompt('Введите пароль');
    if (correctPassword === userPassword) {
        alert("Вы успешно авторизированы")
        break;
    }
    else if (userPassword === null) {
        if (confirm("Вы уверены, что хотите отменить авторизацию?") == true) {
            alert("Вы отменили авторизацию")
            break;
        }
    }
}



//11
for (i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz")
    else if (i % 3 == 0)
        console.log("Fizz")
    else if (i % 5 == 0)
        console.log("Buzz")
    else {
        console.log(i)
    }
}








