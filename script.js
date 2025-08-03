function guardarNota() {
  const nota = document.getElementById('nota').value;
  if (nota.trim() === "") return;

  let notas = JSON.parse(localStorage.getItem('notas')) || [];
  notas.push(nota);
  localStorage.setItem('notas', JSON.stringify(notas));
  document.getElementById('nota').value = "";
  mostrarNotas();
}

function mostrarNotas() {
  const lista = document.getElementById('listaNotas');
  lista.innerHTML = "";
  const notas = JSON.parse(localStorage.getItem('notas')) || [];
  notas.forEach((nota, index) => {
    const li = document.createElement('li');
    li.textContent = nota;
    const btn = document.createElement('button');
    btn.textContent = "Eliminar";
    btn.onclick = () => eliminarNota(index);
    li.appendChild(btn);
    lista.appendChild(li);
  });
}

function eliminarNota(index) {
  let notas = JSON.parse(localStorage.getItem('notas')) || [];
  notas.splice(index, 1);
  localStorage.setItem('notas', JSON.stringify(notas));
  mostrarNotas();
}

mostrarNotas();