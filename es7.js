class TicketManager {
  #precioBaseDeGanancia = 0.15;
  eventos = []; // Moved the array initialization outside the constructor

  constructor() {}

  getEventos() {
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
    if (this.eventos.length === 0) {
      evento.id = 1;
    } else {
      evento.id = this.eventos[this.eventos.length - 1].id + 1;
    }
    this.eventos.push(evento);
  };

  agregarParticipantes = (idEvento, idParticipante) => {
    const eventoIndex = this.eventos.findIndex(
      (evento) => evento.id === idEvento
    );
    if (eventoIndex === -1) {
      console.log("Evento no encontrado");
      return;
    }
    const usuarioRegistrado = this.eventos[eventoIndex].participantes.includes(
      idParticipante
    );
    if (usuarioRegistrado) {
      console.log("Usuario ya está registrado");
      return;
    }
    this.eventos[eventoIndex].participantes.push(idParticipante);
  };
}

const manejadorDeEventos = new TicketManager();

manejadorDeEventos.agregarEvento("Evento 1", "Perú", 200, 50000);
manejadorDeEventos.agregarEvento("Evento 3", "Argentina", 200);
manejadorDeEventos.agregarEvento("Evento 2", "Brasil", 500, 100000);
manejadorDeEventos.agregarParticipantes(1, 1234);
manejadorDeEventos.agregarParticipantes(2, 1234);
manejadorDeEventos.agregarParticipantes(3, 1234);
manejadorDeEventos.agregarParticipantes(1, 1234); // Adding a participant to Evento 1 again

console.log(manejadorDeEventos.getEventos());
