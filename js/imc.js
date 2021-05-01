function calculadoraIMC() {
    var nome = (document.getElementById('nome').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resposta;
    var nivelObesidade;
    var imc = peso / (altura * altura);

    if (imc < 18.5) {
        nivelObesidade = "Baixo Peso. Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: Peso baixo para a altura. Maior probabilidade de anorexia."
    } else if (imc < 25) {
        nivelObesidade = "Peso Nomarl. Com este nível de IMC você tem maior probabilidade de ser um indivíduo saudável ."
    } else if (imc < 30) {
        nivelObesidade = "Pré Obesidade. Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: Alguma probabilidade de problemas de saúde. Predisposição a tornar-se obeso."
    } else if (imc < 35) {
        nivelObesidade = "Obesidade Grau I. Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: Risco moderado de diabetes tipo II, hipertensão, colesterol, cardiopatia."
    } else if (imc < 40) {
        nivelObesidade = "Obesidade Grau II. Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: Risco grave. Aumenta o risco das doenças associadas. O risco de mortalidade aumenta 50%"
    } else {
        nivelObesidade = "Obesidade Grau III. Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde: Risco Muito Grave. O risco de doenças associadas assim como a mortalidade aumenta 90%"
    }

    /*" ".Com este nível de IMC você está propenso a apresentar os seguintes problemas de saúde:"  */

    resposta = "Olá " + nome + ", você está no nível de obesidade: " + nivelObesidade;

    document.getElementById('txtResultado').setAttribute("value", resposta);
}