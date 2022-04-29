window.alert('Para sortear um jogador, click em um bloco!')
window.alert('E não esqueça, quem perde começa jogando a proxima!');
const casas =document.getElementsByTagName('input'); //pega os blocos 
const b_reiniciar = document.getElementById ('reiniciar'); //pega botao reiniciar
const label_jogador = document.getElementById ('jogador'); // pegar o label do jogador que usaremos para mostras quaç jogador tem a vez 

var jogador = '_';
var vencedor = '_';



for(var i=0;i<9;i++){
  casas[i].addEventListener('click', (event)=> { //se der velha
    if((event.target.value=='_') && (vencedor=='_')) {
      event.target.value=jogador; //preenche a casa com X ou O
      event.target.style.color='black'; //torna o valor de casa visível

      trocarJogador(); //função que troca a vez do jogador

      vencedor = vitoria(); //executa a função vitoria() qie sera definida depois
      if(vencedor!='_'){
        label_jogador.innerText=`${vencedor} venceu!`;
      }
    }
  });
}

b_reiniciar.addEventListener('click',(event) => {
  for(var i=0;i<9;i++){
    casas[i].value='_'; //limpa todas as casas
    casas[i].style.color='black';//torna o valor invisivel
    casas[i].style.background='white';//torno o fundo branco
  }
  vencedor= '_'; //reseta o vencedor
  

});
var sortearJogador = function(){
  if(Math.floor(Math.randon() * 2)==0){
    jogador = "O";//define jogador O como inicial
    label_jogador.innerText="_";//exibe na pag qual é o jogador
    label_jogador.style.color='#00f';//deixa cor do texto azul

  }
}


//altera a vez entre os jogadores
var trocarJogador = function() {
  if(jogador=='X') {
      jogador='O';
      label_jogador.innerText='O';
      label_jogador.style.color='#F00';
  
  }else{
      jogador='X';
      label_jogador.innerText='X';
      label_jogador.style.color='#00F';
  }
}
//Verifica se uma condição de vitória foi atingida e colore a linha da vitória
var vitoria = function() {
  if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
      casas[0].style.backgroundColor='#0F0';
      casas[1].style.backgroundColor='#0F0';
      casas[2].style.backgroundColor='#0F0';

      return casas[0].value;

  }else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
      casas[3].style.backgroundColor='#0F0';
      casas[4].style.backgroundColor='#0F0';
      casas[5].style.backgroundColor='#0F0';

      return casas[3].value;

  }else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
      casas[6].style.backgroundColor='#0F0';
      casas[7].style.backgroundColor='#0F0';
      casas[8].style.backgroundColor='#0F0';

      return casas[6].value;

  }else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
      casas[0].style.backgroundColor='#0F0';
      casas[3].style.backgroundColor='#0F0';
      casas[6].style.backgroundColor='#0F0';

      return casas[0].value;

  }else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
      casas[1].style.backgroundColor='#0F0';
      casas[4].style.backgroundColor='#0F0';
      casas[7].style.backgroundColor='#0F0';

      return casas[1].value;

  }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
      casas[2].style.backgroundColor='#0F0';
      casas[5].style.backgroundColor='#0F0';
      casas[8].style.backgroundColor='#0F0';

      return casas[2].value;
  }else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
      casas[0].style.backgroundColor='#0F0';
      casas[4].style.backgroundColor='#0F0';
      casas[8].style.backgroundColor='#0F0';

      return casas[0].value;

  }else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
      casas[2].style.backgroundColor='#0F0';
      casas[4].style.backgroundColor='#0F0';
      casas[6].style.backgroundColor='#0F0';

      return casas[2].value;
  }

  return '_';
}
