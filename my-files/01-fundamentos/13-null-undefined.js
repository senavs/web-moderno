let valor  // não inicializada
console.log(valor)

valor = null
console.log(valor)  // ausência de valor

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined  // não fazer isso, deixe para o JS cuidar do undefined
console.log(produto.preco) 
// delete produto.preco
console.log(produto)

produto.preco = null  // sem preço
console.log(produto)
