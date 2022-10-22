//ENTRADA, PROCESSAMENTO E SAIDA.

function circunferencia_01(){
  //ENTRADAS
  var raio = parseInt(document.getElementById("input_raio").value)

  //PROCESSAMENTO
  d = raio * 2
  c = 2 * Math.PI * raio
  a = Math.PI * raio * raio

  //SAIDA
  r = `o diametro é ${d};<br> o comprimento é ${c};<br> a área é ${a};`
   document.getElementById("mensagem").innerHTML = r

}


function secessorAntecessor_02(){
  //ENTRADAS
  var n1 = parseInt(document.getElementById("input_num1").value)
  
  //PROCESSAMENTO
  a = n1 - 1
  b = n1 + 1

  //SAIDA
  m = `o antecessor é ${a};<br> o sucessor é ${b}`
   document.getElementById("mensagem").innerHTML = m

}

function conversor_03(){
  //ENTRADAS
  var m1 = parseInt(document.getElementById("input_metros").value)
  
  //PROCESSAMENTO
  dm = m1*10
  cm = m1*100
  mm = m1*1000

  //SAIDA
  m = `em decímetro ${dm};<br> em centímetro ${cm};<br> em milimetro ${mm};`
   document.getElementById("mensagem").innerHTML = m

}

function somar() {
  //ENTRADAS
  var num1 = document.getElementById("n1").value;
  var num2 = document.getElementById("n2").value;

  //PROCESSAMENTO
  var soma = parseInt(num1) + parseInt(num2);

  //SAÍDA
  document.getElementById("result").innerHTML = soma;
}

function operacoes2Numeros_06(){
  //ENTRADAS
  var n1 = parseInt(document.getElementById("input_num1").value)
  var n2 = parseInt(document.getElementById("input_num2").value)

  //PROCESSAMENTO
  a = n1 + n2
  b = n1 * (n2**2)
  c = n1 * n1
  d = Math.sqrt((n1**2)+(n2*n2))
  e = Math.sin(n1 - n2)
  f = Math.abs(n1) 

  //SAIDA
  m = `a)-A soma dos números é ${a};<br>b)- O produto do primeiro número pelo quadrado do segundo é ${b};<br>c)- O quadrado do primeiro número é ${c};<br>d)- A raiz quadrada da soma dos quadrados é ${d};<br>e)- O seno da diferença do primeiro número pelo segundo é ${e};<br>f)-. O módulo do primeiro número é ${f};<br>`
  
  document.getElementById("mensagem").innerHTML = m

}

function quatroletras_07(){
  //ENTRADAS
  var letras = document.getElementsByTagName("letras").value;
  
  //PROCESSAMENTO
  num < 100
  num >= 1
  


  //SAIDA
   document.getElementById("mensagem").innerHTML = num

}

function reajustedez_08(){
  //ENTRADAS
  var r = parseInt(document.getElementById("input_reajuste").value)

  //PROCESSAMENTO

  x = r *(10/100)

  //SAIDA
  x = `o reajuste superior de 10% é ${x};`

   document.getElementById("mensagem").innerHTML = x

}

function descontonove_09(){
  //ENTRADAS
  var des = parseInt(document.getElementById("input_desconto").value)

  //PROCESSAMENTO

  x = des - (9/100)

  //SAIDA
  x = `o preço com desconto de 9% é ${x};`

   document.getElementById("mensagem").innerHTML = x

}

function viajem_10(){
  //ENTRADAS
  var vm = parseInt(document.getElementById("input_vm").value)
  var tmp = parseInt(document.getElementById("input_tmp").value)

  //PROCESSAMENTO
  dp = vm * tmp
  

  //SAIDA
  r = `a distancia percorrida é ${dp} km/hr;`
   document.getElementById("mensagem").innerHTML = r

}


//IF ELSE

function vocePodeDoarSangue_16(){
  //ENTRADAS
  var idade = parseInt(document.getElementById("input_idade").value)
  var mensagem = ""

  //PROCESSAMENTO
  if(idade >= 18 && idade <= 67){
    mensagem = "Você pode doar sangue"
  }else{
    mensagem = "Você NÃO PODE doar sangue"
  }
  //SAIDA
  document.getElementById("mensagem").innerHTML = mensagem
}

function parouimpar_17(){
  //ENTRADAS
  var numero = parseInt(document.getElementById("input_numero").value)
  var mensagem = ""

  //PROCESSAMENTO
  if(numero % 2 === 0){
    mensagem = "O Numero é par"
  }else{
    mensagem = "O Numero é impar"
  }
  //SAIDA
  document.getElementById("mensagem").innerHTML = mensagem
}

function categoriaidade_18(){
  //ENTRADAS
  var idade = parseInt(document.getElementById("valor_idade").value)
  var mensagem = ""

  //PROCESSAMENTO
  if(idade >= 10 && idade <= 14){
    mensagem = "voce é infantil"
  }else if(idade >= 15 && idade <= 17){
    mensagem = "voce é juvenil"
  }else if(idade >= 18 && idade <= 25){
    mensagem = "voce é adulto"
  }else{
    mensagem = "voce é uma criança ou idoso."
  }
  //SAIDA
  document.getElementById("mensagem").innerHTML = mensagem
}

function quadradoa_19(){
  //ENTRADAS
  var quadrado = parseInt(document.getElementById("input_quadrado").value)
  var mensagem = ""

  //PROCESSAMENTO
  if(quadrado >= 0 ){
  mensagem = Math.sqrt(quadrado)
  }else{
  mensagem = quadrado * quadrado
    
  }
  //SAIDA
  document.getElementById("mensagem").innerHTML = mensagem
}

function maior_20(){
  //ENTRADAS
 var num1 = parseFloat(document.getElementById("numero1").value);
 var num2 = parseFloat(document.getElementById("numero2").value);
 var num3 = parseFloat(document.getElementById("numero3").value);


  //PROCESSAMENTO
  var maior = num1;
  
  if(num2 > maior)
      maior = num2;
  if(num3 > maior)
      maior = num3;
  //SAIDA
  alert("maior: "+maior);
}

function divisivel_21(){
  //ENTRADAS
  var teclado = parseInt(document.getElementById("input_teclado").value)
  var mensagem = ""

  //PROCESSAMENTO
  if(teclado % 10 == 0){
        mensagem = "e divisivel por dez;"
    }
    else if(teclado % 5 == 0){
        mensagem = "e divisivel por 5;"
    }
    else if(teclado % 2 == 0){
       mensagem = "e divisivel por 2;"
    }
    else
    {
        mensagem = "nao e divisivel por 10, 5 ou 2;"
    }
  //SAIDA
  document.getElementById("mensagem").innerHTML = mensagem
}

function produtoelucro_22(){
  //ENTRADAS
  var x = parseInt(document.getElementById("input_produto").value)
  var mensagem = ""

  //PROCESSAMENTO
  if(x < 20){
    mensagem = x +  ( x * 45/100)
  }else{
    mensagem = x + (x * 30/100)
  }
  //SAIDA
  document.getElementById("mensagem").innerHTML = mensagem
}

function classeeleitoral_23(){
  //ENTRADAS
  var idade = parseInt(document.getElementById("valor_idade").value)
  var mensagem = ""

  //PROCESSAMENTO
  if(idade < 16){
    mensagem = "voce é Não-eleitor"
  }else if(idade >= 18 && idade <= 65){
    mensagem = "voce é Eleitor obrigatório"
  }else if(idade >= 16 && idade <= 28 && idade > 65){
    mensagem = "voce é Eleitor facultativo"
  
  }
  //SAIDA
  document.getElementById("mensagem").innerHTML = mensagem
}

function crescente_24(){
  //ENTRADAS
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 var num3 = parseFloat(document.getElementById("num3").value);


  //PROCESSAMENTO
  var ordem = num1;
  var mensagem = ""

  if(num2 > num1){
  ordem=num2;
  num2=num1;
  num1=ordem;
  }

  if(num3 > num1){
  ordem=num3;
  num3=num1;
  num1=ordem;
  }

  if(num3 > num2){
  ordem=num3;
  num3=num2;
  num2=ordem;
  }
  ordem = (num1+"-"+num2+"-"+num3)
  
  //SAIDA

  document.getElementById("mensagem").innerHTML = ` A ordem é ${ordem} `

}


//SWITCH

function operacoesComFigurasGeometricas(){
  //ENTRADAS
  var vEscolha = parseInt(document.getElementById("input_escolha").value)
  var raio = parseInt(document.getElementById("input_raio").value)
  var altura = parseInt(document.getElementById("input_altura").value)

  //PROCESSAMENTO
  var volume = null
  var area = null
  var pi = 3.1415
  //switch(vEscolha){
  if(vEscolha == 1){
  //case 1:
    volume = (pi * (raio**2) * altura)/3
    area = (pi * raio**2) + (pi * raio * (Math.sqrt(raio**2 + altura**2)))
  //  break;
  }else if(vEscolha == 2){
  //case 2:
    volume = pi * (raio**2) * altura
    area = 2*pi*raio*altura + pi*raio**2
    //break;
  }else if(vEscolha == 3){
  //case 3:
    volume = (4/3)*pi*raio**3
    area = 4*pi*raio**2
    //break;
  }
  //}
  //SAIDA
  document.getElementById("mensagem").innerHTML = `O volume é ${volume}<br> e a área é ${area}`

}


function verificaNumeroDiasDeUmMes_30(){
  //ENTRADAS
  var mes = parseInt(document.getElementById("input_mes").value)
  var quantDias = ""

  //PROCESSAMENTO
  switch(mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      quantDias = "31"
      break;
    case 2:
      quantDias = "28"
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      quantDias = "30"
      break;
    default:
      quantDias = "Escolha um número entre 1 e 12"
  }
  /*if(mes == 1){
    quantDias = "31"
  }else if(mes == 2){
    quantDias = "28"
  }*/
  /*switch(mes) {
    case 1:
      quantDias = "31"
      break;
    case 2:
      quantDias = "28"
      break;
    case 3:
      quantDias = "31"
      break;
    case 4:
      quantDias = "30"
      break;
    case 5:
      quantDias = "31"
      break;
    default:
      quantDias = "Escolha outro número"
  }*/

  //SAIDA
  document.getElementById("mensagem").innerHTML = quantDias
}

function consoante_31(){
  
  //ENTRADAS
  var letra = parseInt(document.getElementById("letra").value);
  var vogal = ""

  //PROCESSAMENTO
  /*if(letra == a){
    vogal = "é vogal"
  }if(letra == e){
    vogal = "é vogal"
  }if(letra == i){
    vogal = "é vogal"
  }if(letra == o){
    vogal = "é vogal"
  }if(letra == u){
    vogal = "é vogal"
  }else {
    vogal = "não é vogal"*/
    
  switch(letra) {
     case a :
      vogal ="é vogal"
      break;
    case e :
      vogal ="é vogal"
      break;
    case i :
      vogal ="é vogal"
      break;
    case o :
      vogal ="é vogal"
      break;
    case u :
      vogal ="é vogal"
      break;
    default:
      vogal ="não é vogal"
      break;
  }

 //SAIDA
  document.getElementById("mensagem").innerHTML = vogal
}

function numes_32(){
  //ENTRADAS
  var num = parseInt(document.getElementById("num").value)
  var mes = ""

  //PROCESSAMENTO
  switch(num) {
     case 1:
      mes = "janeiro"
      break;
     case 2:
      mes = "fevereiro"
      break;
     case 3:
      mes = "março"
      break;
     case 4:
      mes = "abril"
      break;
     case 4:
      mes = "maio"
      break;
     case 6:
      mes = "junho"
      break;
     case 7:
      mes = "julho"
      break;
     case 8:
      mes = "agosto"
      break;
     case 9:
      mes = "setembro"
      break;
     case 10:
      mes = "outubro"
      break;
     case 11:
      mes = "novembro"
      break;
     case 12:
      mes = "dezembro"
      break;
    default:
      mes = "Escolha um número entre 1 e 12"
  }
  //SAIDA
  document.getElementById("mensagem").innerHTML = mes
}

//DO,while

function imprimeQuadrado_40(){
  //ENTRADAS
  var lado = parseInt(document.getElementById("input_lado").value)
  var linha = ""

  //PROCESSAMENTO
  var i = 0
  while(i < lado){
    linha += "*"
    i++;
  }

  var j = 0
  var quadrado = ""
  while(j < lado){
    quadrado = quadrado + linha + "<br>"
    j++
  }

  //SAIDA
  document.getElementById("desenhoDoQuadrado").innerHTML = quadrado
}