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






const squadre =
     [
          {
               nome: 'inter',
               punti:0,
               falli_subiti:0
          },
          {
               nome: 'juventus',
               punti:0,
               falli_subiti:0
          },
          {
               nome: 'milan',
               punti:0,
               falli_subiti:0
          },
          {
               nome: 'napoli',
               punti:0,
               falli_subiti:0
          },
          {
               nome: 'sassuolo',
               punti:0,
               falli_subiti:0
          },
     ]


     function n_random(){
        return  Math.floor((Math.random() * 50) + 1)
     }

     squadre.forEach((element) => {
          element.punti=n_random()
          element.falli_subiti=n_random()
     });

     // console.log(squadre)

     let nomi_falli=[ ]


     squadre.forEach((elem)=>{
          let { nome, falli_subiti } = elem;
          nomi_falli.push({nome, falli_subiti});
     })

     console.log(nomi_falli)