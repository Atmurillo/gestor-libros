function cargarLibros() {
  fetch('http://localhost:4000/libros')
    .then(res => res.json())
    .then(libros => {
      const lista = document.getElementById('lista-libros');
      lista.innerHTML = '';
      libros.forEach(libro => {
        const li = document.createElement('li');
        li.textContent = `${libro.titulo} - ${libro.autor}`;
        lista.appendChild(li);
      });
    });
}

document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;

  fetch('http://localhost:4000/libros', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, autor })
  }).then(() => {
    cargarLibros();
    e.target.reset();
  });
});

cargarLibros();