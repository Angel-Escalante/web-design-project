function cambiarContenido(opcion) {
    // Aquí puedes agregar lógica para cambiar el contenido según la opción seleccionada
    // Por ejemplo, podrías mostrar u ocultar diferentes secciones del contenido
  
    // Ejemplo:
    if (opcion === 'groups') {
      document.getElementById('contenido').innerHTML = '<h1>Grupos</h1><p>Contenido de grupos</p>';
    } else if (opcion === 'workspace_premium') {
      document.getElementById('contenido').innerHTML = '<h1>Workspace Premium</h1><p>Contenido de Workspace Premium</p>';
    }
  
    // Cambiar el color de fondo del enlace activo a rojo
    const enlaces = document.querySelectorAll('.nav-link');
    enlaces.forEach(enlace => enlace.classList.remove('active'));
    const enlaceActivo = document.querySelector(`[onclick="cambiarContenido('${opcion}')"`);
    enlaceActivo.classList.add('active');
  }
  