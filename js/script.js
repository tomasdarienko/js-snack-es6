// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal


const biciclette =
     [
          {
               nome: 'cannondale',
               peso: 14
          },
          {
               nome: 'specialized',
               peso: 7
          },
          {
               nome: 'norco',
               peso: 10
          },
          {
               nome: 'trek',
               peso: 13
          },
          {
               nome: 'canyon',
               peso: 14
          },
     ]


let peso_min = biciclette[0]


biciclette.forEach((elem) => {

     if (elem.peso < peso_min.peso) {
          peso_min =elem
     }


});
console.log(peso_min)
let { nome, peso } = peso_min

let risultato = `la bici piu' leggera e' la ${nome} con i suoi ${peso} chili !!`

console.log(risultato)




