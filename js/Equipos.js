$(function() {
  $("#btnTitle").on("click", function() {
    $("#btnTeam").text("");
    window.location.href = "Equipos.html";
  });
});

function cambiarContenido(opcion) {
  $("#btnTeam").text(opcion + "/");
  $("#btnTeam").on("click", function() {
    $("#btnTournament").text("");
    $("#opcionesEquipo").html("");
    cambiarContenido(opcion);
  });

  if (opcion === 'Tigres') 
  {
    document.getElementById('contenido').innerHTML = `
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
    `;
  } 
  
  else if (opcion === 'Tune Squad') 
  {
    document.getElementById('contenido').innerHTML = `
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
    `;
  }
}

function cambiarContenido2(opcion) {
  document.getElementById('contenido').innerHTML = ``;
  $("#btnTournament").text(opcion);

  if (opcion === 'Fut 7 Otay') 
  {
    document.getElementById('opcionesEquipo').innerHTML = `
      <nav class="nav nav-pills nav-justified">
        <a id="btnCalendar" class="nav-link active" aria-current="page" onclick="cambiarContenido3('Fut','calendar')">
          <span class="material-symbols-outlined">
            calendar_month
          </span>
        </a>
        <a class="nav-link" onclick="cambiarContenido3('Fut','stats')">
          <span class="material-symbols-outlined">
            query_stats
          </span>
        </a>
        <a class="nav-link" onclick="cambiarContenido3('Fut','table')">
          <span class="material-symbols-outlined">
            table
          </span>
        </a>
        <a class="nav-link" onclick="cambiarContenido3('Fut','info')">
          <span class="material-symbols-outlined">
            info
          </span>
        </a>
      </nav>
    `;

    cambiarContenido3('Fut','calendar');
  } 

  else if (opcion === 'Basketball bancario') 
  {
    document.getElementById('opcionesEquipo').innerHTML = `
      <nav class="nav nav-pills nav-justified">
        <a class="nav-link" aria-current="page" onclick="cambiarContenido3('Basket','calendar')">
          <span class="material-symbols-outlined">
            calendar_month
          </span>
        </a>
        <a class="nav-link" onclick="cambiarContenido3('Basket','stats')">
          <span class="material-symbols-outlined">
            query_stats
          </span>
        </a>
        <a class="nav-link" onclick="cambiarContenido3('Basket','table')">
          <span class="material-symbols-outlined">
            table
          </span>
        </a>
        <a class="nav-link" onclick="cambiarContenido3('Basket','info')">
          <span class="material-symbols-outlined">
            info
          </span>
        </a>
      </nav>
    `;
  } 

  let filtros = document.querySelectorAll("#opcionesEquipo a");
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
}

function cambiarContenido3(opcion,opcion2) {
  if (opcion === 'Fut') 
  {
    if (opcion2 === 'calendar') 
    {
      document.getElementById('contenido').innerHTML = `
        <div id="contenido">
              <div class="alert alert-primary" role="alert">
                <div class="flex-container">
                  <div class="left-div">
                    <center>
                      #2
                      <br>
                      <span class="material-symbols-outlined">
                        groups
                      </span>
                      <br>
                      Tigres
                    </center>
                  </div>
                  <h2>VS</h2>
                  <div class="left-div">
                    <center>
                      #4
                      <br>
                      <span class="material-symbols-outlined">
                          groups
                      </span>
                      <br>
                      Pumas
                    </center>
                  </div>
                  <div>
                    <strong>Dia:</strong> Domingo 29 <br>
                    <strong>Hora:</strong> 9:00am <br>
                    <strong>Cancha:</strong> 3
                  </div>
                </div>
              </div>
        </div>
      `;
    } 
    else if (opcion2 === 'stats') 
    {
      document.getElementById('contenido').innerHTML = `
      <div id="contenido"> 
        <table>
          <thead>
            <tr>
              <th>Equipo</th>
              <th>PJ</th>
              <th>G</th>
              <th>E</th>
              <th>P</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            <tr class="equipo">
              <td>Tigres</td>
              <td>10</td>
              <td>7</td>
              <td>1</td>
              <td>2</td>
              <td>20</td>
              <td>10</td>
              <td>+10</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>
    
          <div class="container">
            <div class="box">
              <div class="left-div">
                <center>
                  <span class="material-symbols-outlined">
                    groups
                  </span>
                  <br>
                  Tigres
                </center>
              </div>
              <h2>3-1</h2>
              <div class="left-div">
                <center>
                  <span class="material-symbols-outlined">
                    groups
                  </span>
                  <br>
                  Pumas
                </center>
              </div>
              <div class="right-div">
                <H1>G</H1>
              </div>
            </div>

            <div class="box">
              <div class="left-div">
                <center>
                  <span class="material-symbols-outlined">
                    groups
                  </span>
                  <br>
                  Tigres
                </center>
              </div>
              <h2>2-2</h2>
              <div class="left-div">
                <center>
                  <span class="material-symbols-outlined">
                    groups
                  </span>
                  <br>
                  Leones
                </center>
              </div>
              <div class="right-div">
                <H1>E</H1>
              </div>
            </div>
          </div>
        
          <table>
            <thead>
              <tr>
                <th>Jugador</th>
                <th>Goles</th>
                <th>Asist</th>
                <th>T. amarillas</th>
                <th>T. rojas</th>
              </tr>
            </thead>
            <tbody>
              <tr class="equipo">
                <td>Armando</td>
                <td>23</td>
                <td>9</td>
                <td>3</td>
                <td>0</td>
              </tr>
              <tr class="equipo">
                <td>Sergio</td>
                <td>2</td>
                <td>0</td>
                <td>6</td>
                <td>2</td>
              </tr>
              <tr class="equipo">
                <td>Kevin</td>
                <td>10</td>
                <td>16</td>
                <td>2</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    } 
    else if (opcion2 === 'table') 
    {
      document.getElementById('contenido').innerHTML = `
        <div id="contenido"> 
          <table>
            <thead>
              <tr>
                <th>Equipo</th>
                <th>PJ</th>
                <th>G</th>
                <th>E</th>
                <th>P</th>
                <th>GF</th>
                <th>GC</th>
                <th>DG</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr class="equipo">
                <td>Tigres</td>
                <td>10</td>
                <td>7</td>
                <td>1</td>
                <td>2</td>
                <td>20</td>
                <td>10</td>
                <td>+10</td>
                <td>22</td>
              </tr>
              <tr class="equipo">
                <td>América</td>
                <td>10</td>
                <td>6</td>
                <td>2</td>
                <td>2</td>
                <td>18</td>
                <td>11</td>
                <td>+7</td>
                <td>20</td>
              </tr>
              <tr class="equipo">
                <td>Chivas</td>
                <td>10</td>
                <td>6</td>
                <td>2</td>
                <td>2</td>
                <td>15</td>
                <td>10</td>
                <td>+5</td>
                <td>20</td>
              </tr>
              <tr class="equipo">
                <td>Pumas</td>
                <td>10</td>
                <td>4</td>
                <td>4</td>
                <td>2</td>
                <td>14</td>
                <td>9</td>
                <td>+5</td>
                <td>16</td>
              </tr>
              <tr class="equipo">
                <td>Cruz Azul</td>
                <td>10</td>
                <td>4</td>
                <td>4</td>
                <td>2</td>
                <td>13</td>
                <td>9</td>
                <td>+4</td>
                <td>16</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    } 
    else if (opcion2 === 'info') 
    {
      document.getElementById('contenido').innerHTML = `
        <div class="information">
          <H1>Fut 7 Otay</H1>
          <div class="flex-container">
            <div>
              <span class="material-symbols-outlined">
                location_on
              </span>
            </div>
            <div>
              <h4>Ubicacion</h4>
            </div>
          </div>
          <div id="texto">
            <p>Tijuana B.C., Col. Otay, 27319</p>
          </div>


          <div class="flex-container">
            <div>
              <span class="material-symbols-outlined">
                supervisor_account
              </span>
            </div>
            <div>
              <h4>Organizador</h4>
            </div>
          </div>
          <div id="texto">
            <p>Actividades deportivas S.A</p>
          </div>


          <div class="flex-container">
            <div>
              <span class="material-symbols-outlined">
                contact_support
              </span>
            </div>
            <div>
              <h4>Contacto</h4>
            </div>
          </div>
          <div id="texto">
            <p>+52 (664) 123 4567</p>
          </div>

          
          <div class="flex-container">
            <div>
              <span class="material-symbols-outlined">
                award_star
              </span>
            </div>
            <div>
              <h4>Premios</h4>
            </div>
          </div>
          <div id="texto">
            <p><strong>Primer lugar:</strong> $5000 pesos</p>
          </div>
          <div id="texto">
            <p><strong>Segundo lugar:</strong> $3000 pesos</p>
          </div>
          <div id="texto">
            <p><strong>Tercer lugar:</strong> $1000 pesos</p>
          </div>
        

          <div class="flex-container">
            <div>
              <span class="material-symbols-outlined">
                calendar_month
              </span>
            </div>
            <div>
              <h4>Dias de juego</h4>
            </div>
          </div>
          <div id="texto">
            <p>Miercoles y Domingos</p>
          </div>
          <br><br>
        </div>
      `;
    } 
  } 

  else if (opcion === 'Basket') 
  {
    if (opcion2 === 'calendar') 
    {
      document.getElementById('contenido').innerHTML = `
      <div id="contenido">
              <div class="alert alert-primary" role="alert">
                <div class="flex-container">
                  <div class="left-div">
                    <center>
                      #2
                      <br>
                      <span class="material-symbols-outlined">
                        groups
                      </span>
                      <br>
                      Tune Squad
                    </center>
                  </div>
                  <h2>VS</h2>
                  <div class="left-div">
                    <center>
                      #3
                      <br>
                      <span class="material-symbols-outlined">
                          groups
                      </span>
                      <br>
                      Skulls
                    </center>
                  </div>
                  <div>
                    <strong>Dia:</strong> Domingo 29 <br>
                    <strong>Hora:</strong> 9:00am <br>
                    <strong>Cancha:</strong> Duela 2
                  </div>
                </div>
              </div>
        </div>
      `;
    } 
    else if (opcion2 === 'stats') 
    {
      document.getElementById('contenido').innerHTML = `
        <div id="contenido"> 
          <table>
            <thead>
              <tr>
                <th>Equipo</th>
                <th>PJ</th>
                <th>G</th>
                <th>P</th>
                <th>PF</th>
                <th>PC</th>
                <th>DP</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr class="equipo">
                <td>Tune</td>
                <td>10</td>
                <td>7</td>
                <td>3</td>
                <td>40</td>
                <td>20</td>
                <td>+20</td>
                <td>22</td>
              </tr>
            </tbody>
          </table>
      
            <div class="container">
              <div class="box">
                <div class="left-div">
                  <center>
                    <span class="material-symbols-outlined">
                      groups
                    </span>
                    <br>
                    Tune
                  </center>
                </div>
                <h7>39-35</h7>
                <div class="left-div">
                  <center>
                    <span class="material-symbols-outlined">
                      groups
                    </span>
                    <br>
                    Skulls
                  </center>
                </div>
                <div class="right-div">
                  <H3>G</H3>
                </div>
              </div>

              <div class="box">
                <div class="left-div">
                  <center>
                    <span class="material-symbols-outlined">
                      groups
                    </span>
                    <br>
                    Tune
                  </center>
                </div>
                <h7>32-20</h7>
                <div class="left-div">
                  <center>
                    <span class="material-symbols-outlined">
                      groups
                    </span>
                    <br>
                    Tropics
                  </center>
                </div>
                <div class="right-div">
                  <H3>G</H3>
                </div>
              </div>
            </div>
          
          <table>
            <thead>
            <tr class="equipo">
                <th>Jugador</th>
                <th>Pts</th>
                <th>Reb</th>
                <th>Asis</th>
                <th>Rob</th>
                <th>Blq</th>
              </tr>
            </thead>
            <tbody>
            <tr class="equipo">
                <td>Michael</td>
                <td>25.0</td>
                <td>7.8</td>
                <td>10.0</td>
                <td>1.2</td>
                <td>0.6</td>
              </tr>
              <tr class="equipo">
                <td>Kevin</td>
                <td>27.5</td>
                <td>8.5</td>
                <td>5.5</td>
                <td>1.0</td>
                <td>1.5</td>
              </tr>
              <tr class="equipo">
                <td>Jesus</td>
                <td>30.0</td>
                <td>4.5</td>
                <td>6.5</td>
                <td>1.5</td>
                <td>0.2</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    } 
    else if (opcion2 === 'table') 
    {
      document.getElementById('contenido').innerHTML = `
      <div id="contenido">
        <table>
          <thead>
            <tr>
              <th>Equipo</th>
              <th>PJ</th>
              <th>G</th>
              <th>P</th>
              <th>PF</th>
              <th>PC</th>
              <th>DP</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            <tr class="equipo">
              <td>Tune</td>
              <td>10</td>
              <td>7</td>
              <td>3</td>
              <td>40</td>
              <td>20</td>
              <td>+20</td>
              <td>22</td>
            </tr>
            <tr class="equipo">
              <td>Celtics</td>
              <td>10</td>
              <td>6</td>
              <td>4</td>
              <td>38</td>
              <td>28</td>
              <td>+10</td>
              <td>20</td>
            </tr>
            <tr class="equipo">
              <td>Bulls</td>
              <td>10</td>
              <td>6</td>
              <td>4</td>
              <td>32</td>
              <td>24</td>
              <td>+8</td>
              <td>20</td>
            </tr>
            <tr class="equipo">
              <td>Lakers</td>
              <td>10</td>
              <td>5</td>
              <td>5</td>
              <td>30</td>
              <td>30</td>
              <td>+0</td>
              <td>15</td>
            </tr>
            <tr class="equipo">
              <td>Raptors</td>
              <td>10</td>
              <td>4</td>
              <td>6</td>
              <td>25</td>
              <td>36</td>
              <td>-11</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
      `;
    } 
    else if (opcion2 === 'info') 
    {
      document.getElementById('contenido').innerHTML = `
      <div class="information">
      <H1>Basketball Bancario</H1>
      <div class="flex-container">
        <div>
          <span class="material-symbols-outlined">
            location_on
          </span>
        </div>
        <div>
          <h4>Ubicacion</h4>
        </div>
      </div>
      <div id="texto">
        <p>Centro deportivo bancario</p>
      </div>


      <div class="flex-container">
        <div>
          <span class="material-symbols-outlined">
            supervisor_account
          </span>
        </div>
        <div>
          <h4>Organizador</h4>
        </div>
      </div>
      <div id="texto">
        <p>Baloncesto B.C</p>
      </div>


      <div class="flex-container">
        <div>
          <span class="material-symbols-outlined">
            contact_support
          </span>
        </div>
        <div>
          <h4>Contacto</h4>
        </div>
      </div>
      <div id="texto">
        <p>+52 (664) 987 6543</p>
      </div>

      
      <div class="flex-container">
        <div>
          <span class="material-symbols-outlined">
            award_star
          </span>
        </div>
        <div>
          <h4>Premios</h4>
        </div>
      </div>
      <div id="texto">
        <p><strong>Primer lugar:</strong> Trofeo y 3 balones Wilson NBA certificados</p>
      </div>
      <div id="texto">
        <p><strong>Segundo lugar:</strong> 1 balon Wilson NBA certificado</p>
      </div>
      <div id="texto">
        <p><strong>Tercer lugar:</strong> $1000 persos</p>
      </div>
    

      <div class="flex-container">
        <div>
          <span class="material-symbols-outlined">
            calendar_month
          </span>
        </div>
        <div>
          <h4>Dias de juego</h4>
        </div>
      </div>
      <div id="texto">
        <p>Domingos</p>
      </div>
      <br><br>
    </div>
      `;
    } 
  } 
}





  