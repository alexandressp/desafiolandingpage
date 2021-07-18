const form = document.querySelector('[data-form]');
let nome = document.querySelector('[data-form-nome]');
let email = document.querySelector('[data-form-email]');
let button = document.querySelector('[data-form-button]');

console.log(button);

form.addEventListener("submit",function(e){
  e.preventDefault();

  //DESABILITA O BOTAO
  button.setAttribute("disabled",true);
  button.innerHTML = `Aguarde <img src="./assets/img/1495.gif">`;

  //PARAMETROS
  nome = nome.value;
  email = email.value;

  //VERIFICA SE FORAM PREENCHIDOS
  if((nome !== "") && (email !== "")){
    let dadosCadastro = new Object;
    dadosCadastro.nome = nome;
    dadosCadastro.email = email;

    //CONVERTE EM STRING
    dadosCadastro = JSON.stringify(dadosCadastro);

    //GUARDA NO LOCALSTORAGE
    localStorage.setItem('dadosCadastro',dadosCadastro);

    
    setTimeout(() => {
      //TRATA O BOTAO
      button.removeAttribute("disabled");
      button.innerHTML = `Avise-me`;

      //Adiciona o avisos
      let message = document.createElement('div');//cria o elemento
      message.className = 'alert alert-success';
      let messageText = document.createTextNode('Cadastro efetuado com sucesso!');//adiciona o texto

      //insere o texto no elemento criado
      message.appendChild(messageText);
      //insere o elemento filho
      form.appendChild(message);

    }, 1000);
    
  }


})
