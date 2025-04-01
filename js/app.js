let ingressosRestantes = {
    'pista': {quantidade: 0},
    'superior': {quantidade: 0},
    'inferior': {quantidade: 0}
};

function comprar() {
    let opcoesDeIngressos = document.getElementById('tipo-ingresso').value;
    let quantidadeDesejada = parseInt(document.getElementById('qtd').value);
    let quantidadeDaPista = Number(document.getElementById('qtd-pista').textContent);
    ingressosRestantes['pista'].quantidade = cadeiraInferior

    let cadeiraSuperior = Number(document.getElementById('qtd-superior').textContent);
    ingressosRestantes['superior'].quantidade = quantidadeDaPista;

    let cadeiraInferior = Number(document.getElementById('qtd-inferior').textContent);

    ingressosRestantes['inferior'].quantidade = cadeiraSuperior;

    if (quantidadeDesejada > ingressosRestantes[opcoesDeIngressos].quantidade) {
        alert('Quantidade de ingresso indisponível')
    } else {
        if (opcoesDeIngressos == 'inferior') {
            document.getElementById('qtd-inferior').innerHTML = cadeiraInferior - quantidadeDesejada;
        } else if (opcoesDeIngressos == 'pista') {
            document.getElementById('qtd-pista').innerHTML = quantidadeDaPista - quantidadeDesejada;

    
        } else if (opcoesDeIngressos == 'superior') {
            document.getElementById('qtd-superior').innerHTML = cadeiraSuperior - quantidadeDesejada;

        }
    
    }
console.log(ingressosRestantes[opcoesDeIngressos].quantidade);

}
