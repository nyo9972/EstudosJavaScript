var salvo


function botao(num)
{
    //salva o estado anterior do visor
    salvo = document.calc.visor.value;

    //Adiciona o value do input ao visor e concatena com numero anterior
    document.calc.visor.value = salvo + num;
}

function reset()
{
//Limpa o visor a
salvo = undefined;

}

function calcule()
{
    
    //Calcular visor
    //pegar o valor do visor em uma variavel
 var conteudoVisor = document.calc.visor.value;
    //fazer o calculo e armazenar em variavel
  var resultado = eval(conteudoVisor);
    //colocar o resultado no visor
    document.calc.visor.value = resultado
}

