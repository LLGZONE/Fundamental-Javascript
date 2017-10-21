//要考虑由new String创造的字符串
function isString(str) {
  if (typeof str === 'string') {
    return true
  }

  try {
    let len = str.length
  } catch (e) {
    return false
  }

  //每个对象都有valueOf, null没有
  return typeof str.valueOf() === 'string'
}

export default isString
