import { Fragment } from "react";

<Fragment>
<hr />
          <div className="container">
            <div className="row">
              <div className="col-1"><div/>
              <div className="col-sm shadow mb-5 bg-white rounded">
                <form method="POST" autoComplete="off" name="google-sheet">
                  <br />
                  <h2 style={{ textAlign: "center" }}>Datos del Encuentro</h2>
                  <br />
                  <h5>Descripcion</h5>
                  <div className="row ">
                    <div className="col-md-5 col-sm-5 col-xs-5">
                      <span className="help-block text-muted small-font">
                        Local
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="equipoa"
                        placeholder="Nombre Equipo A"
                        required
                      />
                    </div>
                    <div className="col-md-5 col-sm5 col-xs-5">
                      <span className="help-block text-muted small-font">
                        Visita
                      </span>
                      <input
                        type="text"
                        name="equipob"
                        className="form-control"
                        placeholder="Nombre del Equipo B"
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row ">
                    <div className="col-md-5 col-sm-5 col-xs-5">
                      <span className="help-block text-muted small-font">
                        Fecha
                      </span>
                      <input
                        type="date"
                        className="form-control"
                        name="equipoa"
                        required
                      />
                    </div>
                    <div className="col-md-5 col-sm5 col-xs-5">
                      <span className="help-block text-muted small-font">
                        Hora Encuentro
                      </span>
                      <input
                        type="time"
                        name="hora"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <br/>
                  <h6>Ingrese Multiplicadores RW</h6>
                  <br/>
                  <div className="row ">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <span className="help-block text-muted small-font">
                          M. Equipo A</span>
                        <input
                          type="number"
                          max={9}
                          min={0}
                          name="multa"
                          className="form-control"
                          placeholder="0.00"
                          step="0.01"
                          required
                        />
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <span className="help-block text-muted small-font">
                        Mult. Empate</span>
                      <input
                        type="number"
                        max={9}
                        min={0}
                        name="multempate"
                        className="form-control"
                        placeholder="N Goles"
                        step="0.01"
                        required
                      />
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                      <span className="help-block text-muted small-font">
                        M. Equipo B</span>
                      <input
                        type="number"
                        max={9}
                        min={0}
                        name="multb"
                        className="form-control"
                        placeholder="0.00 "
                        step="0.01"
                        required
                      />
                    </div>
                  <div/>
                  <br/>
                    <div className="row ">
                      <div className="col-md-5 col-sm-5 col-xs-5 pad-adjust">
                        <input
                          type="reset"
                          className="btn btn-warning"
                          defaultValue="LIMPIAR FICHERO"
                        />
                      </div>
                      <div className="col-md-5 pad-adjust">
                        <button
                          type="submit"
                          value="Gracias por Apostar aqui"
                          className="btn btn-dark"
                        >ENVIAR APUESTA
                        </button>
                      </div>
                    </div>
                </form>
              </div>
              <div className="col-6" />
            </div>
          </div>
</Fragment>