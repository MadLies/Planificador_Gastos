export const formatearCantidad = (cantidad) => {
    return Number(cantidad).toLocaleString( 'en-US', {
        style: 'currency',
        currency: 'USD',
    });
};

export const generarId = () => {
    const random = Math.random().toString(36).substring(2, 15);
    const fecha = new Date().toString(36);
    return random + fecha;
}

export const formatearFecha = (fecha) => {
    const fechaFormateada = new Date(fecha);
    return fechaFormateada.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
    
}