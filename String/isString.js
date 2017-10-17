//we should consider the type created by string constructor(new String)
function isString(str) {
  if (typeof str === 'string') {
    return true
  }

  try {
    str.length
  } catch (e) {
    return false
  }

  //every object have
  if (typeof str.valueOf() === 'string') {
    return true
  }

  return false
}

export default isString
