function cambiarContenido(opcion) {
    if (opcion === 'add') 
    {
      document.getElementById('contenido2').innerHTML = `
      <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nombre del equipo</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Deporte</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Seleccionar deporte</option>
                    <option value="1">Futbol</option>
                    <option value="2">Basketball</option>
                    <option value="3">Volleyball</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">ID del jugador</label>
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="button-container"  style="text-align: center;">
                <button type="button" class="btn btn-secondary">Cancelar</button>
                <button type="submit" class="btn btn-danger">Guardar</button>
            </div>
            <table>
            <thead>
            <tr class="equipo">
                <th>Jugador</th>
              </tr>
            </thead>
            <tbody>
            <tr class="equipo">
                <td>Michael</td>
              </tr>
              <tr class="equipo">
                <td>Kevin</td>
              </tr>
              <tr class="equipo">
                <td>Jesus</td>
              </tr>
            </tbody>
          </table>
        </div>
        </form>  
      `;
    } 
  
    else if (opcion === 'settings') 
    {
      document.getElementById('contenido2').innerHTML = `
        <div class="alert alert-primary" role="alert">
                <div class="flex-container">
                    <div class="left-div">
                        <center>
                            <span class="material-symbols-outlined">
                                groups
                            </span>
                            <br>
                            Tigres
                        </center>
                    </div>
                    <div class="left-div">
                        <p>ID</p>
                        12345
                    </div>
                    <div class="delete-center-div">
                        <button type="button" class="btn btn-secondary">Modificar</button>
                    </div>
                </div>
            </div>
            
        <div class="alert alert-primary" role="alert">
            <div class="flex-container">
                <div class="left-div">
                    <center>
                        <span class="material-symbols-outlined">
                            groups
                        </span>
                        <br>
                        Tune
                    </center>
                </div>
                <div class="left-div">
                    <p>ID</p>
                    98765
                </div>
                <div class="delete-center-div">
                    <button type="button" class="btn btn-secondary">Modificar</button>
                </div>
            </div>
        </div>
      `;
    } 

    else if (opcion === 'delete') 
    {
      document.getElementById('contenido2').innerHTML = `
      <div id="contenido">
        <a class="nav-link active" aria-current="page" onclick="cambiarContenido2('Fut 7 Otay')">
            <div class="alert alert-primary" role="alert">
                <div class="flex-container">
                <div class="left-div">
                    <span class="material-symbols-outlined">
                    workspace_premium
                    </span>
                </div>
                <div class="center-div">
                    <p>Fut 7 Otay</p>
                    <strong>Ubicacion:</strong> Otay Modulos
                </div>
                <div class="right-div">
                    <span class="material-symbols-outlined">
                        navigate_next
                    </span>
                </div>
                </div>
            </div>
        </a>
      </div>

      <div id="contenido">
        <a class="nav-link active" aria-current="page" onclick="cambiarContenido2('Basketball bancario')">
            <div class="alert alert-primary" role="alert">
                <div class="flex-container">
                <div class="left-div">
                    <span class="material-symbols-outlined">
                    workspace_premium
                    </span>
                </div>
                <div class="center-div">
                    <p>Basketball bancario</p>
                    <strong>Ubicacion:</strong> Centro deportivo bancario
                </div>
                <div class="right-div">
                    <span class="material-symbols-outlined">
                        navigate_next
                    </span>
                </div>
                </div>
            </div>
        </a>
      </div>
      `;
    } 
  }

  let filtros = document.querySelectorAll("#contenido a");
  for(let i = 0; i < filtros.length; i++) {
    filtros[i].addEventListener("click", function() {
      // eliminar la clase "active" de todos los elementos <a> dentro del filtro
      for(let j = 0; j < filtros.length; j++) {
        filtros[j].classList.remove("active");
      }
      // agregar la clase "active" solo al elemento <a> que se hizo clic en
      this.classList.add("active");
    });
  }





function cambiarContenido2(opcion){
    if (opcion === 'Fut 7 Otay') 
    {
      document.getElementById('contenido2').innerHTML = `
            <div class="alert alert-primary" role="alert">
                <div class="flex-container">
                    <div class="left-div">
                        <center>
                            <span class="material-symbols-outlined">
                                groups
                            </span>
                            <br>
                            Tigres
                        </center>
                    </div>
                    <div class="left-div">
                        <p>#2</p>
                        7-1-2
                    </div>
                    <div class="delete-center-div">
                        <button type="button" class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
      `;
    } 

    else if (opcion === 'Basketball bancario') 
    {
      document.getElementById('contenido2').innerHTML = `
        <div class="alert alert-primary" role="alert">
            <div class="flex-container">
                <div class="left-div">
                    <center>
                        <span class="material-symbols-outlined">
                            groups
                        </span>
                        <br>
                        Tune
                    </center>
                </div>
                <div class="left-div">
                    <p>#2</p>
                    7-3
                </div>
                <div class="delete-center-div">
                    <button type="button" class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
      `;
    } 
}