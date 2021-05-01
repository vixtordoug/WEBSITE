function relatorio() {
    var nome = (document.getElementById('nome').value);
    var sobrenome = (document.getElementById('sobrenome').value);
    var curso = (document.getElementById('curso').value);
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var situacao;


    var resultado = parseFloat((nota1 + nota2) / 2);

    if (resultado <= 3) {
        situacao = "REPROVADO"
    } else if (resultado < 7) {
        situacao = "na RECUPERAÇÂO"
    } else {
        situacao = "APROVADO"
    }
    var resposta = nome + " " + sobrenome + ", você está " + situacao + " na disciplina " + curso + ", com média " + resultado;


    document.getElementById('txtResultado').setAttribute("value", resposta);
}