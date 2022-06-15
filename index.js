var carta1 = {
    nome: "Bulbassauro",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Darth Vader",
    atributos: {
      ataque: 8,
      defesa: 6,
      magia: 7
    }
  };
  
  var carta3 = {
    nome: "Eleven",
    atributos: {
      ataque: 6,
      defesa: 7,
      magia: 8
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirOpcoes();
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type= 'radio' name='atributo' value=' " +
        atributo +
        "' >" +
        atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributos");
  
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Voce venceu!";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "Voce perdeu ";
    } else {
      elementoResultado.innerHTML = "Empatou";
    }
  }
  