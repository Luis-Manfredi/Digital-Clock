const mostrarReloj = ()=>{
    let fecha = new Date();
    
//  Show Hour
    let hours = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let secs = formatoHora(fecha.getSeconds());
    
//  Take id "hora" and assign hour to element
    document.getElementById('hora').innerHTML = `${hours}:${min}:${secs}`;

//  Show Date
//  Months   
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago',
     'Sep', 'Oct', 'Nov', 'Dic'];
//  Days
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    document.getElementById('fecha').innerHTML = `${diaSemana}, ${dia} ${mes}`; 

    document.getElementById('contenedor').classList.toggle('animar');
}

// Add a zero to the format
const formatoHora = (hora)=>{ 
    if (hora < 10)
        hora = '0' + hora;
    return hora;
} 

// Update function every second
setInterval(mostrarReloj, 1000);

