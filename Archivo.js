const resultado         = document.querySelector(".resultado");
const input             = document.querySelector(".input");
const botonInicio       = document.querySelector(".btn-inicio");
const reloj             = document.querySelector(".reloj");
const puntos            = document.querySelector('.puntaje');

const palabras = ["inicio", "Messi", "Drogba","acensor","Schwarzenegger"];
let contador = 0;
let puntaje = 0;


let intervalId;

input.addEventListener("keyup", () => {
  if (contador === 0 && input.value === "inicio") {
        input.removeAttribute('placeholder')
        contador++;
        intervalId = setInterval(tiempo,1000)
        resultado.textContent = palabras[contador];
        input.value = "";
  }else if (input.value.toLowerCase() === palabras[contador].toLowerCase()) {
        console.log("La palabras es la correcta");
        contador++;
        puntaje++
        puntos.textContent = puntaje
        resultado.textContent = palabras[contador];
        console.log(input.value.length)
        input.value = "";
        
        if(contador >= palabras.length){
                clearInterval(intervalId)
                resultado.textContent = `Tardaste ${sumador} Segundos`
                input.remove()
        }
  }else if(input.value.length === palabras[contador].length){
    puntaje--
    input.value = ""
    contador++
    resultado.textContent = palabras[contador];
    console.log("ya te pasaste se resto un punto")

    if(contador >= palabras.length){
      clearInterval(intervalId)
      resultado.textContent = `Tardaste ${sumador} Segundos`
      input.remove()
      
}
  }
   
  
});




let sumador = 0;

const tiempo = () => {
  sumador++;
  reloj.textContent = sumador;
};
