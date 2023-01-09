const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNacimiento = new Date(1993, 07, 21);
console.log(fechaNacimiento);

const comparacion = fechaHoy > fechaNacimiento;
console.log(comparacion);

const diaNac = fechaNacimiento.getDate();
console.log(diaNac);

const mesNac = fechaNacimiento.getMonth();
console.log(mesNac + 1);

const anyoNac = fechaNacimiento.getFullYear();
console.log(anyoNac);