const num1 = 1
const num2 = 2

//note: arrow function doesn't have arguments
const add = (...nums) => {
  return nums.reduce((a, b) => {
    return a + b
  })
}

const strMultipline = `hello
${add(num1, num2)}
world
`

const strNested = `${`hello`}`

console.log(strMultipline)
console.log(strNested)
//advanced use

/**
 *模板字符串可以使用tag标签，tag标签函数接受的第一个参数为被${}分割
 *开的字符串片段数组，剩余参数为${}里所有的量
 *strings.length = keys.length + 1
 */
 //等同于不使用tag标签
function Tag(strings, ...keys) {
  return strings.reduce((pre, cur, idx) => pre + values[idx - 1] + cur)
}

//strings.raw为strings未转义的原始数组

const strTag = Tag`hello ${1 + 1} world`

//tag标签不一定要返回字符串，比如我们返回一个函数时\
//example from mdn
function template(strings, ...keys) {
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});  // "Hello World!"
