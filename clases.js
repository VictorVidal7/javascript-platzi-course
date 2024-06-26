/* Dadas la siguientes clases:

Clase Banda con las propiedades:

nombre - string
generos - Array
integrantes - Array
Crea una clase llamada "Integrante" con las propiedades:

nombre - string
instrumento - string
Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".

La solución debería tener un input y output como los siguientes:

Input

  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))

Output

{
  "nombre":"Los Jacks",
  "generos":["rock","pop","post-punk"],
  "integrantes":[
    {"nombre":"Erik","instrumento":"Guitarra"},
    {"nombre":"Paul","instrumento":"Bateria"}
  ]} */

  class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        const bateristas = this.integrantes.filter(integrante => integrante.instrumento === 'Bateria');
        if (bateristas.length > 0 && integranteNuevo.instrumento === 'Bateria') {
            console.log('Ya hay un baterista en la banda');
            return;
        }
        this.integrantes.push(integranteNuevo);
    }
    }

    //Crear clase Integrante
class Integrante {
    constructor({
      nombre,
      instrumento,
    }) {
      this.nombre = nombre;
      this.instrumento = instrumento;
    }
  }