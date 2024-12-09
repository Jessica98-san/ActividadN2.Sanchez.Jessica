//DOM Cargado
document.addEventListener("DOMContentLoaded",()=>{

    //Se obtienen los elementos por ID

    //Comparar
    let botoncomparar = document.getElementById("botoncomparar");
    let cajaif = document.getElementById("cajaif");
    const in1 = document.getElementById("num1");
    const in2 = document.getElementById("num2");

    //Meses
    let botonmes = document.getElementById("botonmes");
    let cajames = document.getElementById("cajames");
    let inputmes = document.getElementById("inmes");

    //Nombres
    let botonarray = document.getElementById("botonarray");
    let cajaarray = document.getElementById("cajaarray");
    let inputarray = document.getElementById("inputarray");
    let arrnombres = [];

    // Función Comparar

    const comparar = ()=> {
        
        let eti = document.createElement("label");

        if(isNaN(parseFloat(in1.value))|| isNaN(parseFloat(in2.value))){
            eti.textContent = "Ingresa valores numéricos"
        
        }else{
            let val1 =  parseFloat(in1.value);
            let val2 =  parseFloat(in2.value);
            if(val1>val2){
                eti.textContent = `El numero mayor es ${val1}`;
            }else if (val2>val1){
                eti.textContent = `El numero mayor es ${val2}`;
            }else{
                eti.textContent = `Los números son iguales`;
            }
        };
        

        cajaif.innerHTML = "";
        cajaif.appendChild(eti);

        //Limpiar entradas
        in1.value = "";
        in2.value = "";
    };

    //Función mes

    const mes = ()=>{
        let vmes = parseInt(inputmes.value);
        let swmes = "";
        let lmes = document.createElement("label");

        switch(vmes){
            case 1:
                swmes = "Enero";
                break;
            case 2:
                swmes = "Febrero";
                break;
            case 3:
                swmes = "Marzo";
                break;
            case 4:
                swmes = "Abril";
                break;
            case 5:
                swmes = "Mayo";
                break;
            case 6:
                swmes = "Junio";
                break;
            case 7:
                swmes = "Julio";
                break;
            case 8:
                swmes = "Agosto";
                break;
            case 9:
                swmes = "Septiembre";
                break;
            case 10:
                swmes = "Octubre";
                break;
            case 11:
                swmes = "Noviembre";
                break;
            case 12:
                swmes = "Diciembre";
                break;
            default:
                swmes = "No existe este mes";
                break;
        }

        lmes.textContent = `El mes que seleccionaste es: ${swmes}`;
        
        cajames.innerHTML = "";
        cajames.appendChild(lmes);

        //Limpiar la entrada
        inputmes.value = "";
    };

    //Función array

    const farray = ()=>{
        let larray = document.createElement("label");

        //Valida mínimo un nombre de 3 letras
        const regex = /^[a-zA-Z]{3,}$/;

        if(regex.test(inputarray.value)){
            arrnombres.push(inputarray.value);
        }else{
            alert("Ingrese un nombre válido (mínimo 3 letras)")
        }

        const listanombres = arrnombres.join(", ");

        cajaarray.innerHTML = "";
        larray.textContent = listanombres;
        cajaarray.appendChild(larray);

        //Limpiar entrada
        inputarray.value = "";

    };

    //Se ejecuta comparar
    botoncomparar.addEventListener("click",comparar);

    //Se ejecuta mes
    botonmes.addEventListener("click",mes);

    //Se ejecuta array
    botonarray.addEventListener("click",farray);

});





