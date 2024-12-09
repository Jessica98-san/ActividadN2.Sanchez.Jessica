document.addEventListener("DOMContentLoaded",()=>{
        setInterval(()=>{
            location.reload();
        },2000);

        let jsdat = localStorage.getItem('dat') || "No-haydat";
        const arrobj = JSON.parse(localStorage.getItem('dat'));
        
        arrobj.forEach(obj=>{
            const fila = document.createElement("tr");
            Object.entries(obj).forEach(([clave,valor])=>{
                let celda = document.createElement("td");
                celda.textContent = valor;
                fila.appendChild(celda);
            });
            document.getElementById("tablad").appendChild(fila);
        });

    
});