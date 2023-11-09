const resultado         = document.querySelector(".resultado");
const input             = document.querySelector(".input");
const botonInicio       = document.querySelector(".btn-inicio");
const reloj             = document.querySelector(".reloj");
const puntos            = document.querySelector('.puntaje');
const ganadas           = document.querySelector('.ganadas');
const inputInicio       = document.querySelector('.input-entrada');
const contenedor        = document.querySelector('.contenedor');
const tablero           = document.querySelector('.tablero');
const errores           = document.querySelector('.errores');


document.addEventListener('DOMContentLoaded',()=>{
  input.value = ""
  inputInicio.value = ""
})

const palabras = ["Inicio", "Messi","Pogba","Luke","Vader","Thanos", "Drogba","Schwarzenegger","Skywalker","MacCartney","Red","Hot","Chile","Pepper","Potts","Ironman","Anticonstitucionalidad","Cefalorraquídeo","Barcelona","Imperiales","Copenhague","Gamora","Starlord","Quadrilatero","Etherium","Bibliografia","2023","Fortnite","Twitch"];


let contador = 0;
let puntaje = 0;
let intervalId;

let escribiendo = false;

inputInicio.addEventListener("keyup",()=>{

  if(inputInicio.value === "inicio"){
    contador++
    resultado.textContent = palabras[contador]
    input.classList.add("dis-block")
    input.focus()
    intervalId = setInterval(tiempo,1000)
    inputInicio.value = ""
    inputInicio.remove()
  }
  

})


input.addEventListener("keyup",()=>{
  
  
  if(input.value.length === palabras[contador].length){
    input.removeAttribute('placeholder')

    if(input.value.toLowerCase() === palabras[contador].toLowerCase()){
      error("PERFEC")
      contador++
      resultado.textContent = palabras[contador]
      input.value = ""
     
      if(contador >= palabras.length){
        clearInterval(intervalId)
        input.remove()
        resultado.textContent = `Tardaste ${sumador} Segundos`
        ganadas.textContent = `Correctas ${puntaje} de ${palabras.length-1}`
        console.log("Fin")
      }

    }else if (input.value !== palabras[contador]){
      contador++
      resultado.textContent = palabras[contador]
      error("Mal escrita")
      input.value = ""

      if(contador >= palabras.length){
        clearInterval(intervalId)
        input.value = ""
        resultado.textContent = `Tardaste ${sumador} Segundos`
        ganadas.textContent = `Correctas ${puntaje} de ${palabras.length-1}`
        input.remove()
        console.log("Fin")
  
      }
    }
  }
})

function error(num1){
if(num1 === "Mal escrita"){
  errores.textContent = num1
  errores.style.color = "red"
 

  
  setTimeout(()=>{
    errores.textContent = ""
  },500)
}else{
  errores.textContent = "PERFEC"
  puntaje++
  puntos.textContent = puntaje
  errores.style.color = "green"
  errores.style.fontWeight = "bold"
  errores.style.fontSize = "145%"
  setTimeout(()=>{
    errores.textContent = ""
    errores.style.fontWeight = "100"
    errores.style.fontSize = "95%"
  },500)
}
 

}





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
