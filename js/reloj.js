const mostrarReloj = () =>{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    const meses = ["Enero", "Febrero", "Marzo", "Abril",
"Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
    const dias = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mesAnnio = meses[fecha.getMonth()];
    let fechaTxt = `${diaSemana} ${dia} ${mesAnnio}`;

    document.getElementById("contenedor").classList.toggle("animar");
    document.getElementById("fecha").innerHTML = fechaTxt;
    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`;
};

const formatoHora = (hora)=>{
    if(hora<10){
        hora = "0" + hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1000);