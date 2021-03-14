
 function abrirmodal() {
    document.getElementById("modal").setAttribute("style", "visibility:innert;")
}

document.addEventListener('keydown', function fecharmodal(event) {
    
    const isEscKey = event.key === 'Escape'

    if(isEscKey){

    document.getElementById("modal").setAttribute("style", "visibility:hidden;")}
})