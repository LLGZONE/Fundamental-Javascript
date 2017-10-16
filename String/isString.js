//we should consider the type created by string constructor(new String)
function isString(str) {
  try {
    let a = str.length
  } catch (e) {
    return false
  }

  if (typeof str === 'string') {
    return true
  }

  if (typeof str.valueof() === 'string') {
    return true
  }

  return false
}
