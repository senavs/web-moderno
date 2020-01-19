let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// verdadeiro
isAtivo = 1
console.log('verdadeiro')
console.log(Boolean(isAtivo))
console.log(!!isAtivo)
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"text")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// falso
isAtivo = 0
console.log('falso')
console.log(Boolean(isAtivo))
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!('' || null || 0 || 'o resultado'))


let nome = ''
console.log(nome || 'Desconhecido')
nome = 'Lucas'
console.log(nome || 'Desconhecido')