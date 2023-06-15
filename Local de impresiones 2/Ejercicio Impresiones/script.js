// Clase base Impresora
class Impresora {
  constructor() {
    this.precio = 0;
  }

  calcularPrecio() {
    return this.precio;
  }
}

// Clase ImpresoraTinta que hereda de Impresora
class ImpresoraTinta extends Impresora {
  constructor(color) {
    super();
    this.color = color;
    this.setPrecio();
  }

  setPrecio() {
    if (this.color === 1) {
      this.precio = 20;
    } else {
      this.precio = 25;
    }
  }
}

// Clase ImpresoraLaser que hereda de Impresora
class ImpresoraLaser extends Impresora {
  constructor(cantidadToner) {
    super();
    this.cantidadToner = cantidadToner;
    this.setPrecio();
  }

  setPrecio() {
    if (this.cantidadToner === 1) {
      this.precio = 50;
    } else {
      this.precio = this.cantidadToner * 30;
    }
  }
}

function calcularPrecioTinta() {
  var colorSelect = document.getElementById("color");
  var precioTinta = document.getElementById("precioTinta");

  var color = parseInt(colorSelect.value);
  var impresoraTinta = new ImpresoraTinta(color);
  var precio = impresoraTinta.calcularPrecio();

  precioTinta.textContent = "Precio: " + precio + " Bs";
}

function calcularPrecioLaser() {
  var cantidadTonerInput = document.getElementById("cantidadToner");
  var precioLaser = document.getElementById("precioLaser");

  var cantidadToner = parseInt(cantidadTonerInput.value);
  var impresoraLaser = new ImpresoraLaser(cantidadToner);
  var precio = impresoraLaser.calcularPrecio();

  precioLaser.textContent = "Precio: " + precio + " Bs";
}

function calcularPorcentajeLaser() {
  var porcentajeLaser = document.getElementById("porcentajeLaser");

  var totalImpresoras = prompt("Ingrese el total de impresoras recargadas:");
  var totalLaser = prompt("Ingrese el total de impresoras láser recargadas:");

  var porcentaje = (totalLaser / totalImpresoras) * 100;
  porcentajeLaser.textContent = "Porcentaje de Impresoras Láser Recargadas: " + porcentaje + "%";
}
