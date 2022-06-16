var carta1 = {
    nome: "Bulbassauro",
    imagem: "https://i.pinimg.com/736x/be/d8/92/bed8924af644c9952fd653cb49b49132.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Darth Vader",
    imagem: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus-1024x576.jpg",
    atributos: {
      ataque: 8,
      defesa: 6,
      magia: 7
    }
  };
  
  var carta3 = {
    nome: "Eleven",
    imagem: "https://i1.wp.com/mixdeseries.com.br/wp-content/uploads/2020/07/Eleven.jpg",
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
  
    exibirCartaJogador()
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributos");
  
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributos[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    
     if ((cartaJogador.atributos[atributoSelecionado]) > (cartaMaquina.atributos[atributoSelecionado])) {
      htmlResultado = "<p class='resultado-final'>Voce venceu!</p>";
    } else if (cartaMaquina.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]) {
       htmlResultado = "<p class='resultado-final'>Voce perdeu</p>";
    } else if (cartaMaquina.atributos[atributoSelecionado] === cartaJogador.atributos[atributoSelecionado]) {
     htmlResultado = "<p class='resultado-final'>Empate!</p>";
    }
    console.log(cartaJogador.atributos[atributoSelecionado])
    divResultado.innerHTML = htmlResultado;
    
    document.getElementById("btnJogar").disabled = true
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type= 'radio' name='atributo' value=' " +
        atributo + "' >" + atributo + "" + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
  }
  
  function exibirCartaMaquina() {
     var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<d id='opcoes' class='carta-status'>"
    
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type= 'radio' name='atributo' value=' " +
        atributo + "' >" + atributo + "" + cartaMaquina.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '<p>'
  }