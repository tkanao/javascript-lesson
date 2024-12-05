// Q1 変数
let nickname = 'かなほ';
let age = '27'

console.log('私のニックネームは'+nickname+'です。'+'年齢は'+age+'歳です。');

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let languagesText = `私の好きな言語は${languages[0]}です。
次は${languages[3]}を勉強してみたいです。`

console.log(languagesText);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5 四則演算
let ageSum = playerList[0].age + playerList[1].age + playerList[2].age;
let ageAverage = ageSum / playerList.length;
console.log(ageAverage);

// Q6 関数
function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function(){
  return('World');
};

console.log(sayWorld());

// Q7 メソッド
// Q3にて以下の変数を定義
// let user = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };

user.birthday = '2000-09-27';
console.log(user); //birthdayプロパティが追加されたことを確認

user.sayHello = function() {
  return('Hello');
};

console.log(user.sayHello());

// Q8 引数
let calc = {};

calc.add = function(x, y) {
  let add = x + y;
  return add;
}; //addメソッドを定義

console.log(calc.add(2,5)); //2+5を計算

calc.subtract = function(x, y) {
  let subtract = x - y;
  return subtract;
};

console.log(calc.subtract(20,10));

calc.multiply = function(x, y) {
  let multiply = x * y;
  return multiply;
};

console.log(calc.multiply(7,7));

calc.divide = function(x, y) {
  let divide = x / y;
  return divide;
};

console.log(calc.divide(15,3));

// Q9 返り値
function remainder(x, y) {
  let result = x % y;
  return x + 'を' + y + 'で割った余りは' + result + 'です。';
};

console.log(remainder(5,3));

// Q10 スコープ
// function foo() {
//   let x = 1;
// }
// console.log(x);

// x is not defined（変数 x が定義されていない）というエラーが出力される理由
// 上記の関数の内のX=1のスコープはfunction foo()のみである。
// そのため、function foo()外で、xを出力しようとしても
// 参照されないため、変数xが定義されていないというエラーが起こる。

// 以下、応用編
// Q1 標準組み込みオブジェクト

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

console.log(random(1, 9));

// function random()はmin〜maxまでのランダムな整数を返す。
// 関数numにMath.floor+minを代入
// Math.floor 与えられた数値以下の最大の整数を返す）。
// Math.floorの引数にMath.random*最大値引く最小値プラス１を代入
// Math.random は 0~1の数値を返す。
// 最小値min=1, 最大値 max=9。のとき、（max-min+1=9)
// (9*0.9999≒8）
// 最小値0になる最大値はmax=9,min=1の8になるため
// 最大値である9を返すためにプラス１する。

// Q2 コールバック関数

// 「Hello World」 を返す関数mainを定義
function main() {
  console.log('Hello World!');
}

// 3,000ミリ秒後に main 関数を動かす
setTimeout(main, 3000);

// Q3 if
let num = -1;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num == 0) {
  console.log('num is 0');
} else if (num < 0) {
  console.log('num is less than 0')
}

// Q4 for
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {

  let number = mixed[i];

  if (typeof(number) == 'string'){
    console.log(number+'is not number');
  } else {
    if (number % 2 === 0){
      console.log(number+'is even')
    } else if (number % 2 === 1){
      console.log(number+'is odd')
    }
  }
}
