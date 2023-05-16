function cambiarContenido(opcion) {
    if (opcion === 'add') 
    {
      document.getElementById('contenido2').innerHTML = `
       
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