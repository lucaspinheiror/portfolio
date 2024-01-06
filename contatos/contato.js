function clickMenu(){
    let lisMenu = document.querySelector('#lista-menu')

    if(lisMenu.style.display == 'none'){
        lisMenu.style.display = 'block'
    } else{
        lisMenu.style.display = 'none'
    }
}