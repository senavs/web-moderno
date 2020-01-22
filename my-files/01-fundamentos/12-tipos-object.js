const pord1 = {}
pord1.nome = 'Celular Ultra Mega'
pord1.preco = 4998.90
pord1['Desconto Legal'] = 0.40  // evitar atrivutos com espaço \s
console.log(pord1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        foo: 1,
        obj: {
            foo: 2
        }
    }
}
console.log(prod2)

// JSON != Object
// JSON é uma notação textual do obj
'{"nome": "Camisa polo", "preco": 79.90}'