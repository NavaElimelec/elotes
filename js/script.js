const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click',girar);
giros = 0;


function girar(){

    if(giros<2){

    
    let rand = Math.random()*7200;
    
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src','sonido/ruleta.mp3');
    
    document.querySelector('.contador').innerHTML = 'Turnos:  ' + giros;
    }else{
        Swal.fire({
            icon:'success',
            title:'Vuelva Pronto el Juego Temino',
            confirmButtonColor:'#3085d6',
            confimButtonText:'Aceptar',
            allowOutsideClick:false
        }).then((result)=>{
             if(result.value == true){

                giros = 0;
                document.querySelector('.elije').innerHTML = 'Tu cortesia es:  ';
                document.querySelector('.contador').innerHTML = 'Turnos:  ' + giros;

             }
        })
    }

    function premios(premios){
        document.querySelector('.elije').innerHTML = 'Tu cortesia es:  '+ premios;

    }

    function calcular(rand){

        valor = rand/360;
        valor = (valor-parseInt(valor.toString().split(".")[0]))*360;
       // console.log(valor);
       ruleta.style.transform = "rotate("+rand+"deg)";

setTimeout(() => {


       switch(true){

        case valor > 0 && valor <= 45:
            premios('Esquites');
            break;
        
        case valor > 46 && valor <= 90:
            premios('De Nuevo');
            break;
    
        case valor > 91 && valor <= 135:
            premios('Un Elote');
            break;
    
        case valor > 136 && valor <= 180:
            premios('Maru & Elote');
            break;
    
        case valor > 181 && valor <= 225:
            premios('Coca-Cola 600ml');
            break;
    
        case valor > 226 && valor <= 270:
            premios('Pa la otra');
            break;

        case valor > 276 && valor <= 315:
            premios('Coca Cola 2l');
            break;

        case valor > 316 && valor <= 360:
            premios('Maruchan');
            break;
       }
    },5000);
}
}