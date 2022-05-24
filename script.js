const projeto1 = () =>{
  let contador = document.querySelector("span");
  
  //Aqui estou pegando o valor do meu elemento span
  let valueContador = contador.innerHTML;
  let valueInicial = valueContador;
  
  setInterval(function(){
    valueContador--;
    if(valueContador < 0){
      valueContador = valueInicial * 2;
      valueInicial = valueContador;
    }
    contador.innerHTML = valueContador;
  },1000);
}

//projeto1();

///////////////////////////////////////////////////////////////////////////////////
const projeto2 = ()=> {

  let respostas = document.querySelectorAll('.resposta');

  for(let i = 0; i < respostas.length; i++){
    respostas[i].addEventListener('click', ()=>{

    let attr = respostas[i].getAttribute('resposta');
      if(attr =="true"){
        respostas[i].style.backgroundColor="green";
        alert("Resposta correta!");
      } else {
        respostas[i].style.backgroundColor="black";
        alert("Resposta errada!");
      }
      
    })
  }
  
}

projeto2();

////////////////////////////////////////////////////////////////////////////////////
const projeto3 = () => {

  function getRandomArbitrary(min, max){
    return parseInt(Math.random() * (max-min) + min);
  }
  let computerOptions = document.querySelectorAll(".opcao-single");
  
  let escolhaUser = prompt("Escolha: Pedra, papel ou tesoura");
  let computadorEscolha = getRandomArbitrary(0, 3);
  if(escolhaUser == "papel"){
    let escolhaFinal = computerOptions[computadorEscolha].innerHTML;
    if(escolhaFinal.toLowerCase() == "papel"){
      alert("Empate");
    } else if(escolhaFinal.toLowerCase() == "tesoura"){
      alert("Você perdeu! computador escolheu tesoura!");
    } else if(escolhaFinal.toLowerCase() == "pedra"){
      alert("Você ganhou! computador escolheu pedra!");
    }
  } else if(escolhaUser == "tesoura"){
      let escolhaFinal = computerOptions[computadorEscolha].innerHTML;
      if(escolhaFinal.toLowerCase() == "tesoura"){
      alert("Empate");
    } else if(escolhaFinal.toLowerCase() == "pedra"){
      alert("Você perdeu! computador escolheu pedra!");
    } else if(escolhaFinal.toLowerCase() == "papel"){
      alert("Você ganhou! computador escolheu papel!");
    }
  } else if(escolhaUser == "pedra"){
      let escolhaFinal = computerOptions[computadorEscolha].innerHTML;
      if(escolhaFinal.toLowerCase() == "pedra"){
      alert("Empate");
    } else if(escolhaFinal.toLowerCase() == "tesoura"){
      alert("Você perdeu! computador escolheu tesoura!");
    } else if(escolhaFinal.toLowerCase() == "papel"){
      alert("Você ganhou! computador escolheu pedra!");
    }
  }
}
projeto3();