export default function validarCrearPartido(valores) {

    let errores = {};

    // validad equipos
    if(!valores.equipoa){
        errores.equipoa= "Equipo Local Obligatorio"
    }
    if(!valores.equipob){
        errores.equipob= "Equipo Visitante Obligatorio"
    }
    // validad fecha y hora
    if(!valores.fecha){
        errores.fecha= "Indicar una Fecha"
    }
    if(!valores.hora){
        errores.hora= "Indicar hora encuentro"
    }
    if(!valores.multa){
        errores.multa= "Ingresar Valor"
    }
    if(!valores.multempate){
        errores.multempate= "Ingresar Valor"
    }
    if(!valores.multb){
        errores.multb= "Ingresar Valor"
    }
    return errores;

}