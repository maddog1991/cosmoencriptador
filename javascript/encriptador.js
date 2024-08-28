//---- seleccion elementos ----//
const botonEncriptar = document.querySelector(".boton-encriptar");
const textEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".advertencia");
const solucion = document.querySelector(".evalua");
const contenido = document.querySelector(".salida-contenedor");
const botonCop = document.querySelector(".boton-copiar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");

//---- boton encriptar ----//
botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    console.log(txt);

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no puede estar vacio !!!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe contener tildes, ni caracteres especiales !!!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser digitado en su totalidad en minusculas !!!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        solucion.innerHTML = texto;
        botonCop.style.visibility = "inherit";
        contenido.remove();
    }
});

//---- boton desencriptar ----//
botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    console.log(txt);

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no puede estar vacio !!!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe contener tildes, ni caracteres especiales !!!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser digitado en su totalidad en minusculas !!!";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else{
        texto = texto.replace(/ai/mg,    "a");
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg,  "i");
        texto = texto.replace(/ober/mg,  "o");
        texto = texto.replace(/ufat/mg,  "u");

        solucion.innerHTML = texto;
        botonCop.style.visibility = "inherit";
        contenido.remove();
    }
});


//---- boton copiado ----//
botonCop.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = solucion;
    copiar.select();
    document.execCommand("copy");
});