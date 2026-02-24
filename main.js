'use strict'
function adicionarProduto() {

    

    if (!codigo.value || !produto.value || !quantidade.value) {
        alert('Preencha todos os campos!')
        return
    }else{
        const lista = document.getElementById('lista')
        const produto = document.getElementById('produto')
        const codigo = document.getElementById('codigo')
        const quantidade = document.getElementById('quantidade')
        const span = document.createElement('span')
        span.textContent = `${codigo.value} - ${produto.value} - ${quantidade.value}`
        span.className = 'bg-blue-100 padding-2 rounded'
        lista.appendChild(span)
        
    }
}
function limparLista() {
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')
    codigo.value = ''
    quantidade.value = ''
    produto.value = ''
    lista.innerHTML = ''
}