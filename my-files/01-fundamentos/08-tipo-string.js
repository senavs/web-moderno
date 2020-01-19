const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))  // python slice 
console.log(escola.substring(0, 3))  // python slice

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'), escola)
console.log(escola.replace(/\w/g, 'e'), escola)  // regex

console.log('Ana,Maria,Pedro'.split(','))