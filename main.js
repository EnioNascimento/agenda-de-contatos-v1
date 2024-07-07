const form = document.getElementById('form-cadastro')
let linhas = ''

form.addEventListener('submit',function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()

function adicionaLinha(){
    const inputNome = document.getElementById('nome')
    const inputTel = document.getElementById('telefone')

    let linha = '<tr>'
    linha += `<td> ${inputNome.value}</td>`
    linha += `<td> ${inputTel.value}</td>`
    linha += '</tr>'

    linhas += linha

    inputNome.value = ''
    inputTel.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

} 
}
)