const mostrarReloj = ()=>{
    let fecha = new Date();
    let hours = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let secs = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hours}:${min}:${secs}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago',
     'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    document.getElementById('fecha').innerHTML = `${diaSemana}, ${dia} ${mes}`; 

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora)=>{ 
    if (hora < 10)
        hora = '0' + hora;
    return hora;
} 

setInterval(mostrarReloj, 1000);

