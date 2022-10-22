//FOR E VETORES
function processarOpcoes44comListas(quantNumeros){
  mensagem = "<br>"

  numeros = [] //LISTA, ARRAY, VETOR

  //i = 1
  //while(i <= quantNumeros){
  //ENTRADA
  for(i = 1; i <= quantNumeros; i++){
    var n = parseInt(document.getElementById("input_"+i).value)
    numeros.push(n)
    //i++
  }
  //}
  var opcao = parseInt(document.getElementById("input_opcao").value)

  //PROCESSAMENTO
  if(opcao == 1){
    //numeros.sort()
    //numeros.sort(function (a, b) {  return a - b;  })
    numeros.sort(
      function (a, b) {
        return a - b; //if a - b > 0 true else if a - b <= 0 false  
      }
    )
    mensagem += `Os números ordenados são ${numeros}`
  }else if(opcao == 2){
    //numeros.sort();
    //numeros.reverse();
    numeros.sort(
      function (a, b) {
        return b - a; //if a - b > 0 true else if a - b <= 0 false  
      }
    )
    mensagem += `Os números ordenados de forma decrescente são ${numeros}`
  }else if(opcao == 3){
    mensagem += `Os números são ${numeros}`
  }

  //SAIDA
  document.getElementById("mensagem").innerHTML = mensagem
}

function removerInputs_44comlistas(){
  var div_inputs = document.getElementById('div_inputs')
  div_inputs.innerHTML = '';
}

function gerarInputs_44comlistas(){
  removerInputs_44comlistas()
  
  //ENTRADAS
  var quantNumeros =10

  //PROCESSAMENTO
  var div_inputs = document.getElementById('div_inputs')
  
  //var i = 0 //index
  //while(i < quantNumeros){
  for(i = 0; i < quantNumeros; i++){
    var h2 = document.createElement("H2")
    var text_h2 = document.createTextNode("Digite o "+(i+1)+"º número:")
    h2.appendChild(text_h2)
    div_inputs.appendChild(h2)

    var input_num = document.createElement("input")
    input_num.setAttribute("type", "number")
    input_num.setAttribute("id", "input_"+(i+1))
    div_inputs.appendChild(input_num)

    //i++;
  }
  //}
  textOpcoes = `ESCOLHA UMA OPÇÃO
  1 - Listar em ordem crescente
  2 - Listar em ordem decrescente
  3 - Listar na ordem original`
  var h2 = document.createElement("H2")
  var text_h2 = document.createTextNode(textOpcoes)
  h2.appendChild(text_h2)
  div_inputs.appendChild(h2)

  var input_opcao = document.createElement("input")
  input_opcao.setAttribute("type", "number")
  input_opcao.setAttribute("id", "input_opcao")
  div_inputs.appendChild(input_opcao)
  
  button_processar = document.createElement("button")
  button_processar.textContent = 'Processar opção';
  button_processar.setAttribute("onClick", `javascript: processarOpcoes44comListas(${quantNumeros});`);
  div_inputs.appendChild(button_processar)
  
}


//FOR MATRIZES
/*
45 - Leia a nota de 5 alunos. Para cada aluno, leia 4 notas, sendo que a primeira tem peso 3, a segunda peso 2 e a terceira e quarta peso 1. Calcule e apresente a média de cada aluno, dizendo se ele passou, não passou ou vai para a recuperação (e quantos pontos precisa para ser aprovado). Além disso, tire a média da turma.
*/
function calcularMediaAlunos45(quantAlunos){
  mensagem = "<br>"

  alunos = [] //TABELA, MATRIZES, LISTA DE LISTAS

  //ENTRADA
  for(i = 1; i <= quantAlunos; i++){
    notas = []
    for(j = 1; j <= 4; j++){
      var nota = parseInt(document.getElementById("input_"+i+"_"+j).value)
      notas.push(nota)
    }
    alunos.push(notas)
  }

  //PROCESSAMENTO
  //medias = [] //VETOR
  //situacao = [] //VETOR
  medias = {} //DICIONÁRIO
  for(i = 0; i < quantAlunos; i++){
    somaNotas = 0
    for(j = 0; j < 4; j++){
      if(j == 0){
        somaNotas += 3 * alunos[i][j]
      }else if(j == 1){
        somaNotas += 2 * alunos[i][j]
      }else if(j == 2 || j == 3){
        somaNotas += alunos[i][j]//somaNotas += 1 * alunos[i][j]
      }
    }
    media = somaNotas / 7 //media ponderada
    situacao = ""
    if(media < 3){
      situacao = "Reprovado"
    }else if(media >= 3 && media < 7){
      situacao = "Recuperacao"
    }else if(media > 7){
      situacao = "Aprovado"
    }
    /*
    medias = {
      0: {
        "media": 4,
        "situacao": "Recuperacao",
        "pontosFaltantes": 3
      },
      1: {
        "media": 7,
        "situacao": "Aprovado",
      }
    }
    */
    medias[i] = {
      "media": media,
      "situacao": situacao
    }
    if(media >= 3 && media < 7){
      medias[i]["pontosFaltantes"] = 7 - media
    }
  }
  
  //SAIDA
  for(i = 0; i < quantAlunos; i++){
    mensagem += `O ${i+1}oº aluno teve média ${medias[i]["media"]} e sua situação é ${medias[i]["situacao"]}`
    //mensagem += `O ${i+1}oº aluno teve média ${medias[i]["media"]} e sua situação é ${medias[i]["situacao"]} e tem pontos faltantes: ${medias[i]["pontosFaltantes"]} <br><br>`

    if(medias[i]["media"] >= 3 && medias[i]["media"] < 7 ){
      mensagem += ` e tem pontos faltantes: ${medias[i]["pontosFaltantes"]} <br><br>`
    }else{
      mensagem += "<br><br>"
    }

  }
  
  document.getElementById("mensagem").innerHTML = mensagem
}


function removerInputs_45comlistas(){
  var div_inputs = document.getElementById('div_inputs')
  div_inputs.innerHTML = '';
}

function gerarInputs_45comlistas(){
  removerInputs_45comlistas()
  
  //ENTRADAS
  var quantAlunos = 5

  //PROCESSAMENTO
  var div_inputs = document.getElementById('div_inputs')
  
  for(i = 0; i < quantAlunos; i++){
    for(j = 0; j < 4; j++){
      var h2 = document.createElement("H2")
      var text_h2 = document.createTextNode("Digite a " + (j+1) + "ª nota do "+(i+1)+"º aluno:")
      h2.appendChild(text_h2)
      div_inputs.appendChild(h2)

      var input_num = document.createElement("input")
      input_num.setAttribute("type", "number")
      input_num.setAttribute("id", "input_"+(i+1)+"_"+(j+1))
      div_inputs.appendChild(input_num)
    }
  }
  //}
  button_processar = document.createElement("button")
  button_processar.textContent = 'Calcular Média';
  button_processar.setAttribute("onClick", `javascript: calcularMediaAlunos45(${quantAlunos});`);
  div_inputs.appendChild(button_processar)
  
}


//46

function coordenadas_46 (coordenadas){
  mensagem = "<br>"

  x = []
  y = [] //TABELA, MATRIZES, LISTA DE LISTAS

  //ENTRADA
  for(i = 1; i <= coordenadas; i++){
    var n = parseInt(document.getElementById("input_x_"+i).value)
    x.push(n)
    var m = parseInt(document.getElementById("input_y_"+i).value)
    y.push(m)
    //i++
  }
  //}
  var opcao = parseInt(document.getElementById("input_opcao").value)

  //PROCESSAMENTO
  if(opcao == 1){
    //numeros.sort()
    //numeros.sort(function (a, b) {  return a - b;  })
    x.sort(
      function (a, b) {
        return a - b; //if a - b > 0 true else if a - b <= 0 false  
      }
    )
    y.sort(
      function (a, b) {
        return a - b; //if a - b > 0 true else if a - b <= 0 false  
      }
    )
    mensagem += ` x = ${x} e  y = ${y}`
  }else if(opcao == 2){
    //xy.sort();
    //xy.reverse();
    x.sort(
      function (a, b) {
        return b - a; //if a - b > 0 true else if a - b <= 0 false  
      }
    )
    y.sort(
      function (a, b) {
        return b - a; //if a - b > 0 true else if a - b <= 0 false  
      }
    )
    mensagem += ` y = ${y} e  x = ${x}`
  }else if(opcao == 3){
    mensagem += `Os x = ${x} e os y = ${y}`
  
  }else if(opcao == 4){
    mensagem += `a fazer`
  }
  
  //SAIDA
  document.getElementById("mensagem").innerHTML = mensagem
}


function removerInputs_46(){
  var div_inputs = document.getElementById('div_inputs')
  div_inputs.innerHTML = '';
}

function gerarInputs_46(){
  removerInputs_46()
  
  //ENTRADAS
  var coordenadas = 5

  //PROCESSAMENTO
  var div_inputs = document.getElementById('div_inputs')
  
  //var i = 0 //index
  //while(i < coordenadas){
  for(i = 0; i < coordenadas; i++){
  var h2 = document.createElement("H2")
    var text_h2 = document.createTextNode("Digite o "+(i+1)+"º x:")
    h2.appendChild(text_h2)
    div_inputs.appendChild(h2)

  var input_num = document.createElement("input")
    input_num.setAttribute("type", "number")
    input_num.setAttribute("id", "input_x_"+(i+1))
    div_inputs.appendChild(input_num)

  var h2 = document.createElement("H2")
    var text_h2 = document.createTextNode("Digite o "+(i+1)+"º y:")
    h2.appendChild(text_h2)
    div_inputs.appendChild(h2)

  var input_num = document.createElement("input")
    input_num.setAttribute("type", "number")
    input_num.setAttribute("id", "input_y_"+(i+1))
    div_inputs.appendChild(input_num)
  
    //i++;
  }

  textOpcoes =  `ESCOLHA UMA OPÇÃO 
  1 - Listar em ordem crescente os valores de X, e ao lado deve ser listado os valores correspondentes de Y.
  2 - Listar em ordem decrescente os valores de Y, e ao lado deve ser listado os valores correspondentes de X.
  3 - Listar na ordem original
  4 - Listar com salto de posições`

  var h2 = document.createElement("H2")
  var text_h2 = document.createTextNode(textOpcoes)
  h2.appendChild(text_h2)
  div_inputs.appendChild(h2)

  var input_opcao = document.createElement("input")
  input_opcao.setAttribute("type", "number")
  input_opcao.setAttribute("id", "input_opcao")
  div_inputs.appendChild(input_opcao)

  button_processar = document.createElement("button")
  button_processar.textContent = 'verifica';
  button_processar.setAttribute("onClick", `javascript: coordenadas_46(${coordenadas});`);
  div_inputs.appendChild(button_processar)
  
}

//46.2
var coordenadas = []

function posicoes_46(coordenadas){
  mensagem = ""
    var passos=      parseInt(document.getElementById("input_saltos"+i).value) 
    for(var i=0 ;i< coordenadas.lenght; i+=passos){
      mensagem += coordenadas[i] + "<br>"
    }

  document.getElementById("mensagem").innerHTML = mensagem


}


function sortFunctionCrescente(a, b){
  if (a[0] === b[0]) {
      return 0;
  }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}


function sortFunctionDecrescente(a, b) {
  if (a[0] === b[0]) {
      return 0;
  }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
} 

function coordenadas_46_2 (coordenadas){
  mensagem = "<br>"

  coordenadas = [] 

  //ENTRADA
  for(i = 1; i <= coordenadas; i++){
    var x = parseInt(document.getElementById("input_x_"+i).value) 
    var y = parseInt(document.getElementById("input_y_"+i).value)
    coordenadas.push([x,y])
  }
  var opcao2 = parseInt(document.getElementById("input_opcao2").value)

  //PROCESSAMENTO
  if(opcao2 == 1){
    coordenadas.sort(sortFunctionCrescente); 

    
    mensagem += `Os números ordenados são ${coordenadas}`
    
  }else if(opcao2 == 2){
    coordenadas.sort(sortFunctionDecrescente);


    mensagem += `Os números ordenados de forma decrescente são ${coordenadas}`

  }else if(opcao2 == 3){
    mensagem += `Os numeros são  ${coordenadas}`
  
  }else if(opcao2 == 4){
    
    var h2 = document.createElement("H2")
    var text_h2 = document.createTextNode("Digite o salto de posições:")
    h2.appendChild(text_h2)
    div_inputs.appendChild(h2)

    var input_num = document.createElement("input")
    input_num.setAttribute("type", "number")
    input_num.setAttribute("id", "input_saltos_"+(i+1))
    div_inputs.appendChild(input_num)

    button_processar = document.createElement("button")
    button_processar.textContent = 'imprimir quantidade de passos';
    button_processar.setAttribute("onClick", `javascript: posições_46();`);
    div_inputs.appendChild(button_processar)

  
  }
  
  //SAIDA
  document.getElementById("mensagem").innerHTML = mensagem
}


function removerInputs_46_2(){
  var div_inputs = document.getElementById('div_inputs')
  div_inputs.innerHTML = '';
}

function gerarInputs_46_2(){
  removerInputs_46_2()
  
  //ENTRADAS
  var coordenadas = 5

  //PROCESSAMENTO
  var div_inputs = document.getElementById('div_inputs')
  
  //var i = 0 //index
  //while(i < coordenadas){
  for(i = 0; i < coordenadas; i++){
  var h2 = document.createElement("H2")
    var text_h2 = document.createTextNode("Digite o "+(i+1)+"º x:")
    h2.appendChild(text_h2)
    div_inputs.appendChild(h2)

  var input_num = document.createElement("input")
    input_num.setAttribute("type", "number")
    input_num.setAttribute("id", "input_x_"+(i+1))
    div_inputs.appendChild(input_num)

  var h2 = document.createElement("H2")
    var text_h2 = document.createTextNode("Digite o "+(i+1)+"º y:")
    h2.appendChild(text_h2)
    div_inputs.appendChild(h2)

  var input_num = document.createElement("input")
    input_num.setAttribute("type", "number")
    input_num.setAttribute("id", "input_y_"+(i+1))
    div_inputs.appendChild(input_num)
  
    //i++;
  }

  textOpcoes =  `ESCOLHA UMA OPÇÃO 
  1 - Listar em ordem crescente .
  2 - Listar em ordem decrescente .
  3 - Listar na ordem original.
  4 - Listar com salto de posições.`

  var h2 = document.createElement("H2")
  var text_h2 = document.createTextNode(textOpcoes)
  h2.appendChild(text_h2)
  div_inputs.appendChild(h2)

  var input_opcao = document.createElement("input")
  input_opcao.setAttribute("type", "number")
  input_opcao.setAttribute("id", "input_opcao2")
  div_inputs.appendChild(input_opcao)

  button_processar = document.createElement("button")
  button_processar.textContent = 'verifica';
  button_processar.setAttribute("onClick", `javascript: coordenadas_46_2(${coordenadas});`);
  div_inputs.appendChild(button_processar)
}


//47

function questao47(quantDiaMes){
 /* var x0 = parseInt(document.getElementById("d1").value)
  var y0 = parseInt(document.getElementById("m1").value)
  var x1 = parseInt(document.getElementById("d2").value)
  var y1 = parseInt(document.getElementById("m2").value)
  var x2 = parseInt(document.getElementById("d3").value)
  var y2 = parseInt(document.getElementById("m3").value)
  var x3 = parseInt(document.getElementById("d4").value)
  var y3 = parseInt(document.getElementById("m4").value)
  var x4 = parseInt(document.getElementById("d5").value)
  var y4 = parseInt(document.getElementById("m5").value)
  data = [[x0, y0],
  [x1, y1],
  [x2, y2],
  [x3, y3],
  [x4, y4]]*/
  //entrada
  data = []
  for( i = 1; i <= quantDiaMes; i++){
    var dia = parseInt(document.getElementById("input_dia_"+(i)).value)
    var mes = parseInt(document.getElementById("input_mes_"+(i)).value)
    data.push([dia,mes])
  }

  //processamento
  erro = [0, 0, 0, 0, 0]
  corrigir = "Por favor, corrija os pares dia/mês da posição "
  //for(k=0;k<5; k++){
  for(k=0;k<quantDiaMes; k++){
    erro[k] = 0
    if(data[k][1]<1 || data[k][1] >12){
      erro[k] = 1;
      corrigir += `${(k+1)}`
    }else if(data[k][1] == 2 && (data[k][0]<1 || data [k][0] >28)){
      erro[k] = 1; 
      corrigir += `${(k+1)}`
    }else if((data[k][1]==4 || data[k][1] ==6 || data[k][1] ==9 || data[k][1] ==11) && (data[k][0]<1 || data[k][0]>30)){
      erro[k] = 1;
      corrigir += `${(k+1)}` 
    }else if(data[k][0] < 1 || data[k][0]>31){
      erro[k] = 1; 
      corrigir += `${(k+1)}`
    }

    //if(k<=3 && erro[k] == 1) corrigir += ", " 
    //else if(k == 4) corrigir += "."
    if(k<=quantDiaMes-2 && erro[k] == 1) corrigir += ", " //se ocorrer um erro até o penúltimo elemento, corrigir recebe ", "
    else if(k == quantDiaMes-1) corrigir = (corrigir + ".").replace(", .", ".");// se é o ultimo elemento, sempre adiciona um "."
  }
  //saida
  //document.getElementById("mensagem").innerHTML = `numero de datas corretas: ${5-erro.reduce((a, b) => a + b, 0)}, número de datas erradas ${erro.reduce((a, b) => a + b, 0)}. ${corrigir}`
  document.getElementById("mensagem").innerHTML = `numero de datas corretas: ${quantDiaMes-erro.reduce((a, b) => a + b, 0)}, número de datas erradas ${erro.reduce((a, b) => a + b, 0)}. ${corrigir}`

}
function limparInputs47() {
  var div_inputs = document.getElementById("div_inputs");
  div_inputs.innerHTML = ''
}

function gerarInputs47() {
  limparInputs47()
  var quantDiaMes= 5
  var div_inputs = document.getElementById("div_inputs");
 
 //var i =0 
 // while(i<quantNum){
  for(i = 0; i <quantDiaMes; i++){
    //dia
    var h2 = document.createElement("H2");
    var text_h2= document.createTextNode("Digite o "+ (i + 1) + "° dia");
    h2.appendChild(text_h2);
    div_inputs.appendChild(h2);

    var input_num = document.createElement("input")
    input_num.setAttribute("type", "number")
    input_num.setAttribute("id","input_dia_"+(i+1));
    div_inputs.appendChild(input_num)
    //mes
    h2 = document.createElement("H2");
    text_h2= document.createTextNode("Digite o "+ (i + 1) + "° mes");
    h2.appendChild(text_h2);
    div_inputs.appendChild(h2);

    input_num = document.createElement("input")
    input_num.setAttribute("type", "number")
    input_num.setAttribute("id","input_mes_"+(i+1));
    div_inputs.appendChild(input_num)
  
  }
  
  button_processar = document.createElement("button");
  button_processar.textContent = "caucular média";
  button_processar.setAttribute("onclick",`javascript: questao47(${quantDiaMes});`);
  div_inputs.appendChild(button_processar);
}


//48

function calendario_48() {
  ("#calendario").datepicker({
    showOn: "button",
    buttonImage: "calendario.png",
    buttonImageOnly: true
  });
}

function removerCalendario() {
  var div_calendario = document.getElementById('div_calendario')
  //div_calendario.innerHTML = '';
}

function gerarCalendario() {
  removerCalendario()

  //VARIÁVEIS
  var quat_dias_mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  var meses = [  'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO']
  var dias_semana = [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' , ' ', ' ', ]

  //ENTRADAS
  var ano = parseInt(document.getElementById("input_ano").value)

  //PROCESSAMENTO
  var div_ano = document.getElementById('div_ano')

  //imprimir ano
  var h1 = document.createElement("H1")
  var text_h1 = document.createTextNode(ano)
  h1.appendChild(text_h1)
  div_ano.innerHTML = '';
  div_ano.appendChild(h1)

  //para cada mes
  for (var mes = 0; mes < 12; mes++) {
    var div_calendario = document.createElement("div")

    //imprimir mês
    var h2 = document.createElement("H2")
    var text_h2 = document.createTextNode(meses[mes])
    h2.appendChild(text_h2)
    div_calendario.appendChild(h2)

    //imprimir dias da dias_semana
    var h3 = document.createElement("H3")
    var text_h3 = document.createTextNode(dias_semana.toString().replaceAll(',', '__'))
    h3.appendChild(text_h3)
    div_calendario.appendChild(h3)

    //obter o dia primeiro de janeiro do ano
    //mes = 0
    const dia1 = new Date(ano, mes, 2); //ano, mes (inicia em zero), dia
    let day = dia1.getDay() //0 - domingo a 6 - sábado
    if (day == 0)
      day = 6
    else
      day = day - 1

    //imprimir a primeira linha do mês
    linha1 = ''
    contDia = 1
    for (var i = 0; i < 7; i++) {
      if (i < day)
        linha1 += '___'
      else {
        linha1 += '_' + contDia + '_'
        contDia += 1
      }
    }
    var h3_linha = document.createElement("H3")
    var text_h3_linha = document.createTextNode(linha1)
    h3_linha.appendChild(text_h3_linha)
    div_calendario.appendChild(h3_linha)

    //imprimir outras linhas do mês
    for (; contDia <= quat_dias_mes[mes];) {
      linha = ''
      var i = 0
      for (; i < 7; i++) {
        if (contDia > quat_dias_mes[mes])
          break;
        else if (contDia < 10) {
          linha += '_' + contDia++ + '_'
        } else {
          linha += contDia++ + '_'
        }
      }

      //se fevereiro é bissexto
      if (mes == 1 && contDia == 29 && (ano - 2020) % 4 == 0) {
        if (i < 7)
          linha += '29_'
        //else
        //linha += '</br>29_'
      }

      var h3_linha = document.createElement("H3")
      var text_h3_linha = document.createTextNode(linha)
      h3_linha.appendChild(text_h3_linha)
      div_calendario.appendChild(h3_linha)

      if (mes == 1 && contDia == 29 && (ano - 2020) % 4 == 0) { //se fevereiro é bissexto e dia 29 cai na segunda-feira
        if (i == 7) {
          var h3_linha = document.createElement("H3")
          var text_h3_linha = document.createTextNode('29_')
          h3_linha.appendChild(text_h3_linha)
          div_calendario.appendChild(h3_linha)
        }
      }
    }

    //adiciono o mes na TABELA
    var td = 'td' + mes
    var div_td = document.getElementById(td)
    //var div_td = document.getElementById('div_calendario')
    div_td.innerHTML = '';
    div_td.appendChild(div_calendario)

  }

}

//49

function tabuada_49(){

  var num = parseInt(document.getElementById("num").value);
  var resposta = document.getElementById('resposta');
  var tabuada='';

  for(var count=1; count<=10 ; count++)
   tabuada += num+" x "+count+" = "+
     num*count+"<br />";
  
  resposta.innerHTML = tabuada;
}