const form = document.getElementById('form-contatos'); //form que sera onde vão botar todas as informações de input
const nomes = []; //abrir uma array para salvar os nomes dos contatos
const numeros = []; //abrir uma array para salvar o numero dos contatos


let linhas = ''; // botando valor "0" para linhas

form.addEventListener('submit', function(e) {
    e.preventDefault(); //para a página não atulizar em todo submit

    adicionaLinha(); //chamando funcao adicionaLinha
    atualizaTabela(); //chamando a funcao atualizaTabela
})

function adicionaLinha() { //funcao para adicionar o nome dos contatos na array dos contatos e os numeros na array dos numeros
    const inputNomeContato = document.getElementById('nome-contato'); //pegando o input do nome pelo id 
    const inputNumeroContato = document.getElementById('numero-contato'); //pegando o input do numero pelo id

    if (nomes.includes(inputNomeContato.value)) { //if para verificar se o nome não é um já existente
        alert(`O nome: ${inputNomeContato.value} já foi cadastrado.`); //mensagem alert avisando que o nome é repetido
    } else if (numeros.includes(parseInt(inputNumeroContato.value))) { //if para verificar se o numero não é um já existente
        alert(`O numero: ${inputNumeroContato.value} já foi cadastrado.`); //mensagem alert avisando que o numero é repetido
    } else  {
        nomes.push(inputNomeContato.value); //adicionando o valor do input nome dentro da array nome
        numeros.push(parseInt(inputNumeroContato.value)); //adicionando o valor do input numero (como numero) dentro da array numero
    
        let linha = '<tr>'; //abrir uma linha na tabela
            linha += `<td>${inputNomeContato.value}</td>`; //colocar o nome na tabela
            linha += `<td>${inputNumeroContato.value}</td>`; //colocar o numero na tabela
            linha += '</tr>' //fechar a linha da tabela
            linhas += linha; //para conseguir colocar outras linhas diferentes   
    }

    inputNomeContato.value = ''; //para limpar o campo do nome
    inputNumeroContato.value = ''; //para limpar o campo do numero
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody'); //criando uma constante para o tbody do html
    corpoTabela.innerHTML = linhas; //colocando o conteudo de linhas dentro do tbody
}



