class ticketManager {
  #precioBaseDeGanancia = 0.15;

  constructor() {
    this.eventos = [];
  }

  getEventos() {
    //method
    return this.eventos;
  }

  agregarEvento = (
    nombre,
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date().toString()
  ) => {
    const evento = {
      nombre,
      lugar,
      precio: precio + precio * this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    };
  };
}
