
function simulador() {
    const campoNombre = document.getElementById('nombres').value;
    const campoTelefono = document.getElementById('telefono').value;
    const campoEmail = document.getElementById('email').value;
    const campoInversion = parseInt(document.getElementById('inversion').value);
    const campoTiempo = document.getElementById('tiempo').value;
    const contPre = document.getElementById('pre');
    const contPost = document.getElementById('post');
    const showTiempo = document.getElementById('tiempo-show');
    const showInteres = document.getElementById('interes-show');
    const showNombres = document.getElementById('nombres-show');
    const showEmail = document.getElementById('email-show');
    let interes = 0;
    let total = 0;
    const ShowGanancia = document.getElementById('ganancia-show');
    const ShowTotal = document.getElementById('total-show');
    
    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');
    showNombres.innerText = campoNombre;
    showEmail.innerText = campoEmail;

    switch (campoTiempo) {
        case "1":
            showTiempo.innerText = '12 MESES';
            showInteres.innerText = '0.8%';
            interes = (campoInversion * 0.008) * 12;
            total = campoInversion + interes;
            ShowGanancia.innerText = interes;
            ShowTotal.innerText = total;
            break;
    
        case "2":
            showTiempo.innerText = '24 MESES';
            showInteres.innerText = '1.3%';
            interes = (campoInversion * 0.013) * 24;
            total = campoInversion + interes;
            ShowGanancia.innerText = interes;
            ShowTotal.innerText = total;
            break;
        
        case "3":
            showTiempo.innerText = '36 MESES';
            showInteres.innerText = '1.7%';
            interes = (campoInversion * 0.017) * 36;
            total = campoInversion + interes;
            ShowGanancia.innerText = interes;
            ShowTotal.innerText = total;
            break;

        default:
        showTiempo.innerText = '1234 MESES';
        break;
    }   
}

const boton =  document.getElementById ("simulador-btn")

boton.addEventListener ("click",simulador)