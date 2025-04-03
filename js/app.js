
let ingressosRestantes = {
    'pista': {quantidade: 0},
    'superior': {quantidade: 0},
    'inferior': {quantidade: 0}
};

function comprar() {
    let opcoesDeIngressos = document.getElementById('tipo-ingresso').value;
    let quantidadeDesejada = Number(document.getElementById('qtd').value);

    let quantidade = Number(document.getElementById(`qtd-${opcoesDeIngressos}`).textContent);
    ingressosRestantes[opcoesDeIngressos].quantidade = quantidade;


    if (quantidadeDesejada > ingressosRestantes[opcoesDeIngressos].quantidade) {
        alert('Quantidade de ingresso indisponível')
    } else {
        if (opcoesDeIngressos == 'inferior') {
            document.getElementById('qtd-inferior').innerHTML = quantidade - quantidadeDesejada;
        } else if (opcoesDeIngressos == 'pista') {
            document.getElementById('qtd-pista').innerHTML = quantidade - quantidadeDesejada;

    
        } else if (opcoesDeIngressos == 'superior') {
            document.getElementById('qtd-superior').innerHTML = quantidade - quantidadeDesejada;

        }
        document.getElementById('qtd').value = '';

    }
console.log(quantidadeDesejada);

}
