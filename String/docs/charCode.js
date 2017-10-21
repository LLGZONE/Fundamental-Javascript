let c = '😀'

console.log(c.charAt(0))
console.log(c.charCodeAt(0), c.charCodeAt(1))

const uc = c.normalize('NFC')
console.log(`length: ${c.length} charAt: ${c.charAt(0)} unicode: c.codePoint(0)`)
//有些东西没有确定
