import React,{useState, useEffect} from 'react'

const useValidacion = (stateInitial, validar, fn) => {
    
    const[valores, guardarValores]= useState(stateInitial);
    const[errores, guardarErrores]= useState({});
    const[submitForm, guardarSubmitForm]= useState(false);

    useEffect(() => {
        if(submitForm){
            const noErrores = Object.keys(errores).length === 0;
            if(noErrores){
                fn();//fn=funcion que se  ejecuta en el componente
            }
            guardarSubmitForm(false);
        }
    }, [errores]);

    // funcion que se ejecuta conforme se escribe
    const handleChange =e =>{
        guardarValores({
            ...valores,
            [e.target.name]:e.target.value
        })
    }

    // funcion que se ejecuta cuando se hace submit
    const handleSubmit =e =>{
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    }

    return {
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange,
    };
}
export default useValidacion;