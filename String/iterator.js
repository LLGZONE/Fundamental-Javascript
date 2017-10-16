import isString from './isString'

function iterateStr(str) {
  if (!isString(str)) {
    throw new TypeError(`${str} is not string`)
  }

  for (const s of str) {
    console.log(s)
  }

  for (const s of str) {
    console.log(s)
  }
}
