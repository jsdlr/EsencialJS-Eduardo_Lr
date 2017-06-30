var estudiantes = [
  {"codigo":"001","nombre":"Mario   ","nota":89},
  {"codigo":"002","nombre":"Juan    ","nota":79},
  {"codigo":"003","nombre":"Carla   ","nota":92},
  {"codigo":"004","nombre":"Cesar   ","nota":90},
  {"codigo":"005","nombre":"Ana     ","nota":85},
  {"codigo":"006","nombre":"Pedro   ","nota":89},
  {"codigo":"007","nombre":"Marta   ","nota":70},
  {"codigo":"008","nombre":"Luis    ","nota":79},
  {"codigo":"009","nombre":"Antonio ","nota":81},
  {"codigo":"010","nombre":"Gabriela","nota":77}
];

function boton1() {
  var display = "";
  for (var i = 0; i < estudiantes.length; i++) {
    display = display+'Estudiante '+estudiantes[i].codigo+' - '+
    'Nombre: '+estudiantes[i].nombre+' - '+'Nota: '+estudiantes[i].nota+'<br>';
  };
  document.getElementById('contenido').innerHTML = display;
};

function boton2(){
  var promedio = 0;
  for (var i = 0; i < estudiantes.length; i++) {
    promedio = promedio + estudiantes[i].nota
  };
  document.getElementById('contenido').innerHTML = "El promedio del salon es de "+ (promedio/estudiantes.length)
};

function boton3(){
  var nota = 0,
      est = "";
  for (var i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota > nota) {
      est = 'Estudiante '+estudiantes[i].codigo+' - '+
      'Nombre: '+estudiantes[i].nombre+' - '+'Nota: '+estudiantes[i].nota;
      nota = estudiantes[i].nota
    }
  }
  document.getElementById('contenido').innerHTML = "La mayor nota corresponde a: <br>"+est;
};

function boton4(){
  var nota = 100,
      est = "";
  for (var i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota < nota) {
      est = 'Estudiante '+estudiantes[i].codigo+' - '+
      'Nombre: '+estudiantes[i].nombre+' - '+'Nota: '+estudiantes[i].nota;
      nota = estudiantes[i].nota
    }
  }
  document.getElementById('contenido').innerHTML = "La menor nota corresponde a: <br>"+est;
};
