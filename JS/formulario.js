
document.addEventListener("DOMContentLoaded",()=>{
  const formulario = document.getElementById("form");
  const arreglo = [];

  formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
  
    const datos = Object.fromEntries(new FormData(event.target));
    arreglo.push(datos);
    const datosjs = JSON.stringify(arreglo);

    localStorage.setItem('dat',datosjs);
    console.log(localStorage.getItem('dat'));
    
    console.log("Listo");

    //Limpiar
    document.getElementById("ID").value = "";
    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("lugar").selectedIndex = 0;

  });

  document.getElementById("registrar").addEventListener("click",()=>{
    window.open('datos.html','_blank');
  },{once:true});
  
});
