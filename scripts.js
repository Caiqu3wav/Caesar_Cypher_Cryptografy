document.getElementById("formCodificar").addEventListener("submit", function(event){
    event.preventDefault();

    let texto = document.querySelector("#formCodificar input[name='texto']").value;
    let deslocamento = parseInt(document.getElementById("deslocamento").value);
    let modo = event.submitter.value; // Defina o modo de codificação

    Codific(texto, deslocamento, modo); 
}
)

const letras = () => {
    let letra = "";
    let letrasString = "";
    for (let i = 65; i <= 90; i++) {
        let letra = String.fromCharCode(i);
         letrasString += letra + " ";
    }
    return letrasString.trim();
} 


function Codific(texto, desloc, mode){
    const alfabeto = letras();
    let resultado = "";
    for (let i = 0; i < texto.length; i++){
        let char = texto[i];
        let index = alfabeto.indexOf(char.toUpperCase());
        if (index !== -1){
            if(mode === "codificar"){
                let newIndex = (index + desloc) % alfabeto.length;
                resultado += alfabeto[newIndex];
            } else if (mode === "descodificar") {
                let newIndex = (index - desloc + alfabeto.length) % alfabeto.length;
                resultado +=alfabeto[newIndex];
            }
        } else {
            resultado += char
        }
    }
    console.log(resultado);
}