const resultado         = document.querySelector(".resultado");
const input             = document.querySelector(".input");
const botonInicio       = document.querySelector(".btn-inicio");
const reloj             = document.querySelector(".reloj");
const puntos            = document.querySelector('.puntaje');

const palabras = ["Inicio", "Messi","Thanos", "Drogba","Schwarzenegger","Skywalker","MacCartney","Red","Hot","Chile","Pepper","Potts","Ironman","Anticonstitucionalidad","Cefalorraquídeo","Barcelona","Inter","Copenhague","Gamora","Starlord","Quadrilatero","Pelissero","Rodriguez","Avalle","Meza","Rost",];


let contador = 0;
let puntaje = 0;


let intervalId;



input.addEventListener("keyup",()=>{
  if(contador === 0 && input.value.toLowerCase() === palabras[contador].toLocaleLowerCase()){
  intervalId = setInterval(tiempo,1000)
  contador++
  resultado.textContent = palabras[contador]
  input.value = ""
  }
  else if(input.value.length === palabras[contador].length){
    console.log('la cantidad es la misma')
    
    input.removeAttribute('placeholder')

    if(input.value.toLowerCase() === palabras[contador].toLowerCase()){
      console.log("y la palabra esta bien escrita suma 1")
      contador++
      resultado.textContent = palabras[contador]
      input.value = ""
      puntaje++
      puntos.textContent = puntaje
      console.log(contador)
      if(contador >= palabras.length){
        clearInterval(intervalId)
        input.remove()
        console.log("Fin")
  
      }

    }else if (input.value !== palabras[contador]){
      contador++
      resultado.textContent = palabras[contador]
      puntaje--
      console.log("REsta por mal escrita")
      input.value = ""

      if(contador >= palabras.length){
        clearInterval(intervalId)
        input.remove()
        console.log("Fin")
  
      }
    }
  }
})








// input.addEventListener("keyup", () => {
//   if (contador === 0 && input.value === "inicio") {
//         input.removeAttribute('placeholder')
//         contador++;
//         intervalId = setInterval(tiempo,1000)
//         resultado.textContent = palabras[contador];
//         input.value = "";
//   }else if (input.value.length === palabras[contador].length ) {
//         console.log("La cantidad de carcterees se completo");
//         contador++;
//         puntaje++
//         puntos.textContent = puntaje
//         resultado.textContent = palabras[contador];
        
        
        
//         if(contador >= palabras.length){
//                 clearInterval(intervalId)
//                 resultado.textContent = `Tardaste ${sumador} Segundos`
//                 input.remove()
//         }else if(input.value.toLowerCase() === palabras[contador].toLowerCase()){
//           puntaje--
//           input.value = ""
//           contador++
//           resultado.textContent = palabras[contador];
//           console.log("Escrita Correctamente")
      
//         }
//   }
   
  
// });






let sumador = 0;

const tiempo = () => {
  sumador++;
  reloj.textContent = sumador;
};
