// class Celular{
//     constructor(color,peso,tamaño,rdc,ram,rdp,){
//             this.color = color;
//             this.peso= peso;
//             this.tamaño= tamaño;
//             this.resolucionDeCamara = rdc;
//             this.memoriaRam= ram;
//             this.resolucionDePantalla = rdp; 
//             this.ecendido = false;
//         }   
//     presionarBtotonEncendido(){
//         if (this.encendido == false){
//             alert("celular prendido")
//             this.encendido=true;
//         }else{
//             alert("celular apagado")
//         }
//     }
//     reiniciar(){
//         if(this.encendido == true){
//             alert("reiniciando celular")

//         }else{
//             alert("el celular está apagado")
//             this.encendido = false;
//         }
//     }
//     tomarFoto(){
//         alert(  `Foto tomada en una resolución de: ${this.resolucionDeCamara}  `)

//     }
//     grabarVideo(){
//         alert(  `grabando video en  ${this.resolucionDeCamara}  `)
//     }
//     mobileInfo(){
    
//         return `
//         Color: <b>${this.color}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         tamaño:<b>${this.tamaño}</b><br>
//         Memoria RAM <b>${this.memoriaRam}</b><br>
//         resolución de video<b>${this.resolucionDeCamara}</b><br>
      
//         `;

//     }

// }
// class celularAltaGama extends Celular{
//     constructor(color,peso,tamaño,rdc,ram,rdce){
//         super(color,peso,tamaño,rdc,ram);
//         this.resolucionDeCamaraExtra=rdce;
//     }
//     grabarVideoLento(){
//         alert("Estas grabando en camara lenta")
//     }
//     reconocimientoFacial(){
//         alert("Vamos a iniciar un reconocimiento facial")
//     }
//     infoAltaGama(){
//         return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`
//     }
// }


// // celular1 = new Celular("rojo", "150g","5","HD","1GB")
// // celular2 = new Celular("azul", "1550g","5.4","Full HD","2GB")
// // celular3 = new Celular("blanco", "146g","5.9","Full HD","2GB")


// // celular1.presionarBtotonEncendido()
// // celular1.tomarFoto();
// // celular1.grabarVideo();
// // celular1.reiniciar();
    

// celular1 = new celularAltaGama("rojo","130g","5.2","4k","3GB","FULL HD")
// celular2 = new celularAltaGama("rojo","142g","6","4k","4GB","HD")




// document.write(`
//     ${celular1.mobileInfo()}<br><br>
//     ${celular2.mobileInfo()}<br>
    
// `)

// document.write("metodos de arrays <br>" )


//     var miArray = ['Moto','soto','Abaco','abeja','Sapo','nieve','Zumba','barco'];
// //     alert(miArray.sort(function (a, b){return a.toLowerCase().localeCompare doc(b.toLowerCase());}));



// const materiasHTML= document.querySelector(".materias");

// const materias =[
// // //     {
// // //         nombre:"Fisica 4",
// // //         nota: 7 
// //     }, {
// //         nombre:"Calculo 3",
// //         nota: 8
// //     }, {
// //         nombre:"Bases de datos 3",
// //         nota: 9 
// //     }, {
// //         nombre:"Matematicas discretas 2",
// //         nota: 7 
// //     }, {
// //         nombre:"Programacion 4",
// //         nota: 8 
// //     }

// // ]

// // const obtenerMateria=(id)=>{
// //     return new Promise ((resolve,reject)=>{
// //         materia= materias[id];
// //         if(materia == undefined) reject("No existe La materia")
// //         else setTimeout(()=>{resolve(materia)},Math.random()*400);
// //     })
    
// // }
// //  const devolverMaterias=async()=>{
// //      let materia= [];
// //      for (let i = 0; i < materias.length; i++) {
// //         materia[i] =  await obtenerMateria(i);
// //         let newHTMLcode = `
// //           <div class="materia">
// //              <div class="nombre"> ${materia[i].nombre}</div>
// //              <div class="nota">${materia[i].nota}</div>
// //           </div>`;
        
// //           materiasHTML.innerHTML += newHTMLcode;
// //    }
// //  }

// //  devolverMaterias( );

// // const myPromise = new Promise((resolve, reject) => {  

// //     let condition="hola";  
    
// //     if(condition==undefined) { 
// //         reject('Promise is rejected');     
          
// //     } else {    
// //         resolve('Promise is resolved successfully.');
       
// //     }
// // });

// // myPromise.then((message) => { 
// //     console.log(message);
// // }).catch((message) => { 
// //     console.log(message);
// // });


// const materiasHTML= document.querySelector(".materias");

// const materias=[
//     {
//         nombre:"Fisica 4",
//         nota: 7 
//     }, {
//         nombre:"Calculo 3",
//         nota: 8
//     }, {
//         nombre:"Bases de datos 3",
//         nota: 9 
//     }, {
//         nombre:"Matematicas discretas 2",
//         nota: 7 
//     }, {
//         nombre:"Programacion 4",
//         nota: 8 
//     }

// ]

//  const obtenerMaterias=(id)=>{
//   return new Promise((resolve,reject)=>{
//      let materia=materias[id];
//      if (materia == undefined) reject("la materia no existe")
//       else setTimeout(() => {resolve(materia)},Math.random()*400);
    
// })}

// // const obtenerMaterias=(id)=>{
// //     return new Promise ((resolve,reject)=>{
// //         materia= materias[id];
// //         if(materia == undefined) reject("No existe La materia")
// //          else setTimeout(() => {resolve(materia)},Math.random()*400);
// //     })}

// const devolverMaterias=async()=>{
//          let materia= [];
//          for (let i = 0; i < materias.length; i++) {
//             materia[i] =  await obtenerMaterias(i);
//             let newHTMLcode = `
//               <div class="materia">
//                  <div class="nombre"> ${materia[i].nombre}</div>
//                  <div class="nota">${materia[i].nota}</div>
//               </div>`;
            
//               materiasHTML.innerHTML += newHTMLcode;
//        }
//      }
    
//      devolverMaterias( );
// // const devolverMaterias=async()=>{
// //           let materia=[];
// //           for (let i = 0; i < materias.length; i++) {
// //               materia[i]  = await obtenerMaterias(i);
// //               let newHTMLcode = `
// //                         <div class="materia">
// //                            <div class="nombre"> ${materia[i].nombre}</div>
// //                            <div class="nota">${materia[i].nota}</div>
// //                         </div>`;
                      
// //                         materiasHTML.innerHTML += newHTMLcode;
// //     }
// // }
// // obtenerMaterias();



// var count= 0;

// function cc(card) {
//   // Cambia solo el código debajo de esta línea
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count+= 1;
//       break;

//     case 7:
//     case 8:
//     case 9:
//       count+=0;
//       break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count-= 1;
//       break;

  
//  }

//  if(count>=3){
//     return count + " Bet";
//  }





//  rangeOfNumbers(1, 5); 

//  var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
// function golfScore(par, strokes) {
//   // Cambia solo el código debajo de esta línea
//  return (par==strokes==1)? names[0]
//  : (par <= strokes)? names[1] 
//  : (par <1 )? names[2] 
//  : (par == strokes==2)? names[3]
//  : (strokes==par+1)? names[4]
//  : (strokes==par+2)? names[5]
//  : (strokes >= par+3)? names[6]: 

//   // Cambia solo el código encima de esta línea
// }

// golfScore(5, 4);
function getIndexToIns(arr, num) {
    arr= arr.sort((a,b)=>a - b);
     console.log()

    for(let i=0; i<arr.length; i++){

     if(num>=arr[i] && num<=arr[i+1]){
       console.log(arr.indexOf(arr[i+1]))
          console.log(arr[i+1]);
     
     }   else if(num[i+1]==undefined){
        console.log(arr.indexOf(arr[i+1]+1))}

  }
  }

   
  getIndexToIns([2, 5, 10], 15)
