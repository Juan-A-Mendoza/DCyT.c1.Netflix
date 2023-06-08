function calcular() {
  // Obtenemos los valores de los campos de entrada
  const planA = parseInt(document.getElementById("planA").value);
  const planB = parseInt(document.getElementById("planB").value);
  const planC = parseInt(document.getElementById("planC").value);

  // Calculamos el precio a pagar por cada suscriptor de cada plan
  const precioA = planA * 3.3;
  const precioB = planB * 5.5;
  const precioC = planC * 10;

  // Calculamos el total de suscriptores y el porcentaje que no pagó servicio de conexión
  const totalSuscriptores = planA + planB + planC;
  const sinConexion = (planA + planB) / totalSuscriptores;

  // Identificamos el plan favorito según la cantidad de suscriptores
  let planFavorito;
  if (planC >= planB && planC >= planA) {
    planFavorito = "C (para 5 TVs)";
  } else if (planB >= planA && planB >= planC) {
    planFavorito = "B (para 2 TVs)";
  } else {
    planFavorito = "A (para 1 TV)";
  }

  // Mostramos los resultados en pantalla
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <p>Precio a pagar por cada suscriptor:</p>
    <ul>
      <li>Plan A (para 1 TV): $${precioA.toFixed(2)}</li>
      <li>Plan B (para 2 TVs): $${precioB.toFixed(2)}</li>
      <li>Plan C (para 5 TVs): $${precioC.toFixed(2)}</li>
    </ul>
    <p>Porcentaje de suscriptores que no pagaron servicio de conexión: ${(sinConexion * 100).toFixed(2)}%</p>
    <p>Plan favorito: ${planFavorito}</p>
  `;
}

