let lista_li = document.querySelectorAll('.navigation li');
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

function activeLink(){
    
    //Elimina las clases a todos los li para asegurarse
    lista_li.forEach(item=>
        item.classList.remove('hovered'));

    //la función añade una clase al item seleccionado que está llamando la función
    this.classList.add('hovered');

        
}



// Hacemos el llamado a la función con un event listener para cada li de la lista de lis

lista_li.forEach(item=>item.addEventListener('mouseover', activeLink))




//Añadimos un evento on click al toggle que es el botón de menú para agregar una clase active a la barra de navegación
toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}





