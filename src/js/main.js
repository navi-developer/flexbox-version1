// alert("Texto a mostrar");
function myBuscar(){
    document.getElementById("buscador").style.display = "block";
    document.getElementById("buscar").style.display = "none";
    document.getElementById("Smenu").style.display = "none";
    document.getElementById("Smenu2").style.display = "none";
    document.getElementById("Smenu3").style.display = "none";
}
function retroceder(){
    document.getElementById("buscador").style.display = "none";
    document.getElementById("buscar").style.display = "block";
    document.getElementById("Smenu").style.display = "block";
    document.getElementById("Smenu2").style.display = "block";
    document.getElementById("Smenu3").style.display = "block";
}