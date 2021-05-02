//Buscando Valores
function gerarCarne() {
    var nome = form_carne.nome.value;
    var produto = form_carne.produto.value;
    var valorProduto = parseFloat(document.getElementById('valorProduto').value);
    var quantidade = parseFloat(document.getElementById('quantidade').value);
    var parcelas = parseFloat(document.getElementById('parcelas').value);
    var valorTotal;
    var i;

    valorTotal = valorProduto * quantidade;

    //Requisitos de Negócio
    if (parcelas = 3) {
        valorTotal = valorTotal * 1.05
    } else if (parcelas = 6) {
        valorTotal = valorTotal * 1.12
    }

    

    for( var i = 1; i <= parcelas; i++ ) {
        document.writeln("---------------------------------------------- CARNÊ DE PAGAMENTO ----------------------------------------------<br>\n CLIENTE: " + nome + "<br>\nPRODUTO: " + produto + "<br>\nVALOR DO PRODUTO: " + valorProduto + "<br>\nQUANTIDADE: " + quantidade + "<br>\nVALOR TOTAL: " + valorTotal + "<br>\nPARCELAS: " + i + "/ " + parcelas + "<br>\n--------------------------------------------------------------------------------------------------------------------------------<br>\n<br>\n<br>\n<br>\n") ;
    }
      
       
    }