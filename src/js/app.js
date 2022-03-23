document.addEventListener('DOMContentLoaded',function (){
    scrollNav();

    navegacionFija();
    darkmode();
});

function navegacionFija(){
    
    const barra = document.querySelector('.header');

    //registrar el intersection observer
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('.fijo');
        }else{
            barra.classList.add('.fijo');
        }
    });
    //elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));

}

//funcion para que al pulsar en los enlaces de la navegacion, baje de forma mas dinamica a cada seccion.
function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function (enlaces){
        enlaces.addEventListener('click',function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior:'smooth'
            });
        });
    });

}

function darkmode(){
    const botonDarkMode = document.querySelector('.dark-mode-boton');
    const cont1 = document.getElementById('#festival');
        botonDarkMode.addEventListener('onclick',function(){
        cont1.classList.toggle('dark-mode');
    });
}