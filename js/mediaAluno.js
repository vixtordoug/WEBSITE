function relatorio() {
    var nome = formAluno.nome.value;
    var curso = formAluno.curso.value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var situacao;




    var resultado = parseFloat((nota1 + nota2) / 2);

    if (nota1 < 0) {
        document.getElementById("resultadoMedia").innerHTML = "Certifique-se que os valores estão corretos, coloque apenas números de 0.0 até 10.0"
    } else if (nota1 > 10) {
        document.getElementById("resultadoMedia").innerHTML = "Certifique-se que os valores estão corretos, coloque apenas números de 0.0 até 10.0"
    } else if (nota2 > 10.0) {
        document.getElementById("resultadoMedia").innerHTML = "Certifique-se que os valores estão corretos, coloque apenas números de 0.0 até 10.0"
    } else if (nota2 < 0) {
        document.getElementById("resultadoMedia").innerHTML = "Certifique-se que os valores estão corretos, coloque apenas números de 0.0 até 10.0"
    } else if (resultado <= 3) {
        document.getElementById("resultadoMedia").innerHTML = nome + ", você está REPROVADO na disciplina " + curso + ", com média " + resultado;
    } else if (resultado < 7) {
        document.getElementById("resultadoMedia").innerHTML = nome + ", você está na RECUPERAÇÂO na disciplina " + curso + ", com média " + resultado;
    } else {
        document.getElementById("resultadoMedia").innerHTML = nome + ", você está APROVADO na disciplina " + curso + ", com média " + resultado;
    }
}