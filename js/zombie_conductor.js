/*El zombie conductor es aquel que se mueve por las vías de tren. Este zombie
recibe los mismos parámetros que el objeto Enemigo más el parámetro direccion*/

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* ZombieConductor llama al constructor de Enemigo utilizando los parametros
  necesarios */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  /* Inicializamos las propiedades específicas de de ZombieConductor */
  this.direccion = direccion;
}

/* Completamos la creacion del objeto asignando su prototipo y la funcion
constructor para poder usarla con 'new' al crear nuevos Zombies Conductores */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* El siguiente método le da movimiento al zombie*/
ZombieConductor.prototype.mover = function() {

  // Si la dirección es vertical se le aplica velocidad en el eje Y
  if (this.direccion == "v") {
    this.y += this.velocidad;
  }

  // Si la dirección es horizontal se le aplica velocidad en el eje X
  if (this.direccion == "h") {
    this.x += this.velocidad;
  }

  /* En esta parte lo que hacemos es invertir la direccion HORIZONTAL si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
  }
  /* En esta parte lo que hacemos es invertir la direccion VERTICAL si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
    this.velocidad *= -1;
  }
}

/* El ataque lo toma de su prototipo Enemigo que ya implementa un metodo atacar,
que quitaba una vida y ahora pasa a quitar 5 vidas*/
ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVidas(10);
};
