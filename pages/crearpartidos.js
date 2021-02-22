import React,{useState, useContext} from 'react'
import Router,{useRouter} from 'next/router'

import Container from "../components/Container";
import {FirebaseContext} from '../firebase';
// validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearPartido from '../validacion/validarCrearPartido';

const STATE_INICIAL = {
  equipoa:'',
  equipob:'',
  fecha:'',
  hora:'',
  multa:'',
  multempate:'',
  multb:'',
}

const CrearPartidos = () => {
  const { valores,errores,submitForm,handleSubmit,handleChange} = useValidacion(STATE_INICIAL,validarCrearPartido, crearEncuentro)

  const{ equipoa, equipob,fecha,hora,multa,multempate,multb} =valores;

  //hook de routing para redireccionar
const router = useRouter();

  //contextx CRUD  firebase
  const{usuario,firebase} = useContext(FirebaseContext);

  async function crearEncuentro() {
    
    const encuentro = {
      equipoa,
      equipob,
      fecha,
      hora,
      multa,
      multempate,
      multb,
    }
    //insertarlo en la base de datos
    firebase.db.collection('encuentros').add(encuentro);
  }


  return (
    <Container>
      <>
        <div class="container p-2">
          
          <div class="row">         
            <div class="col-md-5 shadow mb-5 bg-white rounded">
            <div class="card-body">  
            <form
              onSubmit={handleSubmit}
              noValidate
            >
              <h2 style={{ textAlign: "center" }}>Crear Partido Risk & Win</h2>
              <br/>
              <h5 >Descripcion Encuentro</h5>
              <div class="row">
                <div className="col-md-5 col-sm-5 col-xs-5">
                  <label htmlFor="equipoa"
                  className="help-block text-muted small-font">Local</label>
                  <input
                  type="text"
                  id="equipoa"
                  class="form-control"
                  placeholder="Ingrese Equipo A" 
                  name="equipoa"
                  autofocus
                  value={equipoa}
                  onChange={handleChange}
                  />
                </div>
                <div className="col-md-5 col-sm-5 col-xs-5">
                <label htmlFor="equipob"
                className="help-block text-muted small-font">Visita</label>
                <input
                type="text"
                id="equipob"
                class="form-control"
                placeholder="Ingrese Equipo B" 
                name="equipob"
                value={equipob}
                onChange={handleChange}
                />
              </div>
              </div>
              <br/>
              <div class="row">
                <div className="col-md-5 col-sm-5 col-xs-5">
                  <label htmlFor="fecha"className="help-block text-muted small-font">Fecha</label>
                  <input
                  type="date"
                  id="fecha"
                  class="form-control"
                  name="fecha"
                  value={fecha}
                  onChange={handleChange}
                  />
                </div>
                <div className="col-md-5 col-sm-5 col-xs-5">
                <label htmlFor="hora"className="help-block text-muted small-font">Hora Encuentro</label>
                <input
                type="time"
                id="hora"
                class="form-control"
                placeholder="hora" 
                name="hora"
                value={hora}
                onChange={handleChange}
                />
              </div>
              </div>
              <br/>
              <h6 >Ingrese Multiplicadores RW</h6>
              <div class="row">
                <div className="col-md-4 pad-adjust">
                  <label htmlFor="multa"class="help-block text-muted small-font">M. Equipo A</label>
                  <input
                  type="number"
                  id="multa"
                  max={9}
                  min={0}
                  class="btn btn-light form-control"
                  placeholder="0.00"
                  step="0.01" 
                  name="multa"
                  value={multa}
                  onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 pad-adjust">
                  <label htmlFor="multempate"class="help-block text-muted small-font">Mult Empate</label>
                  <input
                  type="number"
                  id="multempate"
                  max={9}
                  min={0}
                  class="btn btn-dark form-control"
                  placeholder="0.00"
                  step="0.01" 
                  name="multempate"
                  value={multempate}
                  onChange={handleChange}
                  />
              </div>
                <div className="col-md-4 pad-adjust">
                  <label htmlFor="multb"class="help-block text-muted small-font">M. Equipo B</label>
                  <input
                  type="number"
                  id="multb"
                  max={9}
                  min={0}
                  class="btn btn-light form-control"
                  placeholder="0.00"
                  step="0.01" 
                  name="multb"
                  value={multb}
                  onChange={handleChange}
                  />
                </div>
              </div>
              <hr/>
              <div class="row">
                <div className="col-md-7 pad-adjust">
                  <button 
                  type="submit"
                  id="btn-task-form"
                  class="btn btn-dark">CREAR PARTIDO
                  </button>
                </div>
                <div className="col-md-5 pad-adjust">
                <input
                  type="reset"
                  id="nombre"
                  class="btn btn-warning"
                  value="LIMPIAR FICHERO"
                  name="nombre"
                  required
                  />
              </div>
              </div>
              <br/>
            </form> 
            </div>
            </div>
          </div>
        </div>

      </>
    </Container>

  );
};
// const taskForm = document.getElementById('task-form');
// task.form.addEventListener('submit', e=>{
//   e.preventDefault();

//   const nombrea = taskForm['equipoa'].value;
//   const nombreb =taskForm['equipob'].value;

//   console.log('nombrea, nombreb')
// })

export default CrearPartidos;
