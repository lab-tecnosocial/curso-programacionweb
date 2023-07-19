/* FUNCION AUTO AUTONOMO */
let semaforo = 'verde';
let numPersonasCalle = 0;

function autoRobot1(semaforo) {
    if (semaforo === 'verde') {
        return 'Avanza';
    } else if (semaforo === 'rojo') {
        return 'Detente';
    }
}

function autoRobot2(semaforo, numPersonas) {
    let accion;
    if (semaforo === 'verde' && numPersonas === 0) {
        accion = 'Avanza';
    } else if (semaforo === 'rojo') {
        accion = 'Detente';
    } else {
        accion = 'Espera';
    }
    return accion;
}

console.log(autoRobot2('verde', 2));

/* OPERADORES DE COMPARACION Y LOGICOS */
console.log(8 > 5); // true
console.log(3 < -1); // false
console.log('Alex' === 'Rudy'); // false
console.log(10 !== 0); // true
console.log(7 <= 5); // false
console.log(10 >= 10); // true
console.log(!(2 > 1 || 0 > 1)); // true

/* FUNCION EVALUADOR DE POPULARIDAD */
let numeroLikes = 2;
function evaluarLikes(likes) {
    let evaluacion;
    if (likes >= 10) {
        evaluacion = 'Eres popular';
    } else {
        evaluacion = 'No eres popular';
    }
    return evaluacion;
}

console.log(evaluarLikes(numeroLikes));