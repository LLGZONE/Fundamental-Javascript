/**
 * Created by LLGZONE on 2017/10/21.
 */
import isString from './isString'

const isTemplateLiterals = (literals) => {
  const str = literals.trim()

  if (str.endsWith('\\`')) {
    return false
  }
  if (str.startsWith('`') && str.endsWith('`')) {
    return true
  }

  //tag
  if (str.)
}

const Template = (literals) => {
  if (!isString(literals)) {
    throw new Typ eError(`TypeError ${literals} is not string`)
  }

}