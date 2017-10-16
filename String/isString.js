//we should consider the type created by string constructor(new String)
function isString(str) {
  if (typeof str === 'string') {
    return true
  }

  try {
    let a = str.length
  } catch (e) {
    return false
  }

  if (typeof str.valueOf() === 'string') {
    return true
  }

  return false
}

export default isString
