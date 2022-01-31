// Number_1
/*let a = +prompt("Введите целое число")
if (a > 0){
    alert(++a)
} else{
    alert(a)
}*/


//Number 2
/*let a = +prompt("Введите целое число")
if (a > 0){
    alert(a+1)
} else{
    alert(a-2)
}*/


//Number 3
/*let a = +prompt("Введите целое число")
if (a > 0){
    alert(++a)
} else if (a < 0){
    alert(a-2)
} else{
    alert(10)
}*/


// Number 4
/*let a = +prompt("Введите 1 целое число")
let b = +prompt("Введите 2 целое число")
let c = +prompt("Введите 3 целое число")
if (a > 0 && b > 0 && c > 0){
    alert("3")
} else if (a < 0 && b > 0 && c > 0 || a > 0 && b < 0 && c > 0 || a > 0 && b > 0 && c < 0){
    alert("2")
} else if (a < 0 && b < 0 && c > 0 || a > 0 && b < 0 && c < 0 || a < 0 && b > 0 && c < 0){
    alert("1")
} else{
    alert("0")
}*/


// Number 5
/*let a = +prompt("Введите 1 целое число")
let b = +prompt("Введите 2 целое число")
let c = +prompt("Введите 3 целое число")
if (a > 0 && b > 0 && c > 0){
    alert("Положительных чисел: 3; Отрицательных чисел: 0.")
} else if (a < 0 && b > 0 && c > 0 || a > 0 && b < 0 && c > 0 || a > 0 && b > 0 && c < 0){
    alert("Положительных чисел: 2; Отрицательных чисел: 1.")
} else if (a < 0 && b < 0 && c > 0 || a < 0 && b > 0 && c < 0 || a > 0 && b < 0 && c < 0){
    alert("Положительных чисел: 1; Отрицательных чисел: 2.")
} else{
    alert("Положительных чисел: 0; Отрицательных чисел: 3.")
}*/


//Number 6
/*let a = +prompt("Введите 1 число")
let b = +prompt("Введите 2 число")
if (a > b){
    alert(a)
} else{
    alert(b)
}*/


//Number 7
/*let a = +prompt("Введите 1 число")
let b = +prompt("Введите 2 число")
if (a < b){
    alert(a)
} else{
    alert(b)
}*/


//Number 8
/*let a = +prompt("Введите 1 число")
let b = +prompt("Введите 2 число")
if (a > b){
    alert("Большее число равно: " + a)
    alert("Меньшее число равно: " + b)
} else{
    alert("Большее число равно: " + b)
    alert("Меньшее число равно: " + a)
}*/


//Number 9
/*let a = +prompt("Введите значение вещественного типа")
let b = +prompt("Введите значение вещественного типа")
if (a > b){
    b1 = (a**2)**0.5
    a1 = (b**2)**0.5
    alert("Первая переменная (a) равна: " + a1 + "    Вторая переменная (b) равна: " + b1) 
} else{
    alert("Первая переменная (a) равна: " + a + "    Вторая переменная (b) равна: " + b)
}*/


//Number 10
/*let a = +prompt("Введите целое число")
let b = +prompt("Введите целое число")
if(a != b){
    a1 = a+b
    b1 = a1
    alert("Переменные A и B равны: " + b1)
} else{
    a1 = 0
    b1 = a1
    alert("Переменные A и B равны: " + b1)
}*/


//Number 11
/*let a = +prompt("Введите целое число")
let b = +prompt("Введите целое число")
if (a != b && a > b){
    alert("Переменные A и B равны: " + a)
} else if (a != b && a < b){
    alert("Переменные A и B равны: " + b)
} else{
    alert("Переменные A и B равны: 0")
}*/


//Number 12
/*let a = +prompt("Введите число")
let b = +prompt("Введите число")
let c = +prompt("Введите число")
if (a > b && b > c){
    alert(c)
} else if (a > b && b < c){
    alert(b)
} else if (a < b && b < c){
    alert(a)
} else if (a < b && b > c && a > c){
    alert(c)
} else if (a < b && b > c && a < c){
    alert(a)
} else if (b < a && a > c && b > c){
    alert(c)
} else if (b < a && a > c && b < c){
    alert(b)
} else if (a < c && c > b && a > b){
    alert(b)
} else if (a < c && c > b && a < b){
    alert(a)
} else {
    alert("eror try again")
}*/


//Number 13
/*let a = +prompt("Введите число")
let b = +prompt("Введите число")
let c = +prompt("Введите число")
if (a > b && b > c){
    alert(b)
} else if (a > b && b < c && a > c){
    alert(c)
} else if (a > b && b < c && a < c){
    alert(a)
} else if (a < b && b < c){
    alert(b)
} else if (a < b && b > c && a > c){
    alert(a)
} else if(a < b && b > c && a < c){
    alert(c)
} else if (b < a && a > c && b > c){
    alert(b)
} else if (b < a && a > c && b < c){
    alert(c)
} else if (a < c && c > b && a > b){
    alert(a)
} else if (a < c && c > b && a < b){
    alert(b)
} else {
    alert("eror try again")
}*/


//Number 14
/*let a = +prompt("Введите число")
let b = +prompt("Введите число")
let c = +prompt("Введите число")
if (a > b && b > c){
    alert("Наименьшее число: " + c + "Наибольшее число: " + a)
} else if (a > b && b < c && a > c){
    alert("Наименьшее число: " + b + "Наибольшее число: " + a)
} else if (a > b && b < c && a < c){
    alert("Наименьшее число: " + b + "Наибольшее число: " + c)
} else if (a < b && b < c){
    alert("Наименьшее число: " + a + "Наибольшее число: " + c)
} else if (a < b && b > c && a > c){
    alert("Наименьшее число: " + c + "Наибольшее число: " + b)
} else if (a < b && b > c && a < c){
    alert("Наименьшее число: " + a + "Наибольшее число: " + b)
} else if (b < a && a > c && b > c){
    alert("Наименьшее число: " + c + "Наибольшее число: " + a)
} else if(b < a && a > c && b < c){
    alert("Наименьшее число: " + b + "Наибольшее число: " + a)
} else if (a < c && c > b && a > b){
    alert("Наименьшее число: " + b + "Наибольшее число: " + c)
} else if (a < c && c > b && a < b){
    alert("Наименьшее число: " + a + "Наибольшее число: " + c)
} else {
    alert("eror try again")
}*/


//Number 15
/*let a = +prompt("Введите число")
let b = +prompt("Введите число")
let c = +prompt("Введите число")
if (a > b && b > c){
    alert(a+b)
} else if (a > b && b < c){
    alert(a+c)
} else if (a < b && b < c){
    alert(b+c)
} else if (a < b && b > c && a > c){
    alert(b+a)
} else if (a < b && b > c && a < c){
    alert(b+c)
} else if (b < a && a > c && b > c){
    alert(a+b)
} else if (b < a && a > c && b < c){
    alert(a+c)
} else if (a < c && c > b && a > b){
    alert(c+a)
} else if (a < c && c > b && a > b){
    alert(c+b)
} else {
    alert("eror try again")
}*/