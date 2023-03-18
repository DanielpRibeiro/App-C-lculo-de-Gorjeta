
document.getElementById('final').style.display= "none"

document.getElementById('formulario').addEventListener('submit', calcular)

function calcular(event){
    // alert('fui submetido')
    // event.prevenDefault();
    event.preventDefault()
    var valorInserido = document.querySelector('#valor').value
    var escolhaServico = document.querySelector('#servico').value
    var numeroPessoas = document.querySelector('#pessoas').value

    // alert(valorInserido, escolhaServico, numeroPessoas)
    if(valorInserido == '' | escolhaServico == '' | numeroPessoas == ''){
        alert('Preencha todos os campos...')
    }

    var total = (escolhaServico * valorInserido) / 100
    var total = (total/numeroPessoas)
    total = total.toFixed(2)
    document.getElementById('gorjetaTotal').innerHTML = total
    document.getElementById('final').style.display= "block"
}


