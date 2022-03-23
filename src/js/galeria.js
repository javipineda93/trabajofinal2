document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++ ){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i; // para agregar un id a las imagenes
        //AÑADIR LA FUNCION DE MOSTRARIMAGEN
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }

}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);
    
    //generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
    console.log(imagen);

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //boton cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'x';
    cerrarImagen.classList.add('btn-cerrar');
    //cuando se da click cerrar la imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //cuando se presiona se cierra la imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen);

    //mostrar en html

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
    
}

