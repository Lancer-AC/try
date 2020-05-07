'use utf-8'
encodeURIComponent("utf-8");
var a = 1,
    b = 2;
if (a > b) {
    a = 1;
    b = 2;
} else {
    a = 2;
    b = 1;
}
'hello world';

Number; //int float doubale  and so on
NaN; //not a number
Infinity; //extremly big that js can experience
String; //sting
Boolean; //bool 0 1 false true
; //比较运算符 > < >= <= == ===//==只比较值，===还比较类型
//NaN is diffrent from all data type(including itself)
null; //empty
undefined; //mostly as same as null
[1, 2, 'hello', null, true, NaN]; //arry
new Array(1, 2, 3, 'hello') //as same as last
var arr = [1, 2, 3, '...'];

var person = {
    name: 'Nash',
    age: 20,
    tags: ['js', 'web'],
    city: 'bejing',
    hascar: true,
    zipcode: null
};
person.name = 'bob';


alert("hello " + person.name);
console.log(a);

a = `多行
字符
串
hao
nb`
console.log(a);
console.log("阿勒")
b = `nihao ${person.name}`;
b = b.toUpperCase();
console.log(b);

var m = new Map([
    ['nash', 95],
    ['monila', 100]
]);
m.set('adam', 88);
m.delete('adam');
var s = new Set([1, 2, 3, 3.0]);
s.add(4);
console.log(s);
for (var w of s) { console.log(w); }
s.forEach(function name(params) {
    console.log(name + params);
})

function abs(x) {
    if (typeof x != 'number') { throw 'NAN'; }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

var f = abs(123);
console.log(f);

var time = new Date().getTime();
var year = new Date().getFullYear();
var month = (new Date().getMonth()) + 1;
var data = new Date().getDate();
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var day = new Date().getDay();
var Time = year + '-' + month + '-' + data + ' ' + hours + ':' + minutes + ' ' + 'w:' + day;
// console.log(`time is: ` + (time + 1));
// console.log(`now is: ${now + 1}`);
console.log('Time is:' + Time);
console.log(location);

function count() {
    var arr = [];
    for (let i = 1; i <= 3; i++) {
        arr.push(function() {
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());
console.log(f2());
console.log(f3());