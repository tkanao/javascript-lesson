// alert('Hello World!');

console.log('Hello World!');

let text = 'Javascriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

let testText;
console.log(testText); // => undefined

let again = '定義しました';
again = '再代入はできます';

let elephant = '象';
console.log(elephant);
console.log('elephant');

let template = 'テンプレートリテラル';
let templateText = `これが${template}です
${template}は改行もできます。`;
console.log(templateText);

let numTen = 10;
let strTen = '10';
console.log(numTen, strTen);

let number = 5;
number += 3;
console.log(number)

let name1 = 'John';
let name2 = 'Bob';
let name3 = 'Michael';
let name4 = 'Emma';

let names = ['john', 'Bob', 'Michael', 'Emma'];

console.log('names[0] =>', names[0]);
console.log('names[1] =>', names[1]);
console.log('names[2] =>', names[2]);
console.log('names[2] =>', names[3]);
console.log('names.length => ', names.length);

let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

let John = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(John.bloodType);

let one = '1';
let two = 2;

console.log('one →', typeof one, one);
console.log('two →', typeof two, two);

function getArea(radius) {
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea(5);

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return 
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);