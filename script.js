const jugador1 = document.querySelector(".player1");
const jugador2 = document.querySelector(".player2");
const opcion1 = jugador1.querySelectorAll(".option");
const opcion2 = jugador2.querySelectorAll(".option");
const marcador = document.querySelector(".marcador");
const versus = document.querySelector(".vs");
const juego1 = versus.querySelector(".juego1");
const juego2 = versus.querySelector(".juego2");

let marcador1 = 0;
let marcador2 = 0;

const juegos = {
    "piedra": ["tijera", "lagarto"],
    "papel": ["piedra", "spock"],
    "tijera": ["papel", "lagarto"],
    "lagarto": ["spock", "papel"],
    "spock": ["tijera", "piedra"]
};

function crearElementoJuego(juego, jugador) {
    const iconoJugador = transformar(jugador);
    juego.innerHTML = `
        <div class="juegoCard">
            <h3 class="juego">${jugador}</h3>
            ${iconoJugador}
        </div>
    `;

    let juegoCard = juego.querySelector(".juegoCard");
    juegoCard.classList.add("desactivado");
}

opcion1.forEach(opcion => {
    opcion.addEventListener("click", () => {
        const jugador = opcion.classList[1];
        crearElementoJuego(juego1, jugador);
        jugar();
    });
});

opcion2.forEach(opcion => {
    opcion.addEventListener("click", () => {
        const jugador = opcion.classList[1];
        crearElementoJuego(juego2, jugador);
        jugar();
    });
});

function transformar(transform) {
    const iconos = {
        "piedra": '<i class="fa-solid fa-hand-back-fist"></i>',
        "papel": '<i class="fa-solid fa-hand"></i>',
        "tijera": '<i class="fa-solid fa-hand-scissors"></i>',
        "lagarto": '<i class="fa-solid fa-hand-lizard"></i>',
        "spock": '<i class="fa-solid fa-hand-spock"></i>'
    };
    return iconos[transform] || "error";
}

function jugar() {
    const juegoCard1 = juego1.querySelector(".juegoCard");
    const juegoCard2 = juego2.querySelector(".juegoCard");

    juegoCard1.classList.remove("desactivado");
    juegoCard2.classList.remove("desactivado");

    const jugador1 = juego1.querySelector(".juego").textContent;
    const jugador2 = juego2.querySelector(".juego").textContent;

    if (jugador1 === jugador2) {
        marcador1++;
        marcador2++;
    } else if (juegos[jugador1]?.includes(jugador2)) {
        marcador1++;
    } else {
        marcador2++;
    }

    marcador.textContent = `${marcador1} vs ${marcador2}`;

    setTimeout(() => {
        juego1.innerHTML = "";
        juego2.innerHTML = "";
    }, 1500);
}
