
function mudarCor() {
    const buttonCores = document.getElementById('buttonCores');
    const imgTema = document.getElementById('imgTema');
    const logoMinha = document.getElementById('logoMinha');
    if(buttonCores.classList == 'temaEscuro'){
        buttonCores.classList.remove('temaEscuro');
        buttonCores.classList.add('temaClaro');
        imgTema.src = "./assets/img/modo-claro.png";
        logoMinha.src ="./assets/img/meu_logo_Tema_Claro.png";
        document.body.classList.toggle('white');
        return;
    }
    buttonCores.classList.remove('temaClaro');
    buttonCores.classList.add('temaEscuro');
    imgTema.src = "./assets/img/modo-escuro.png";
    logoMinha.src ="./assets/img/meu_logo.png";
    document.body.classList.toggle('white',false);
}