document.getElementById("formCodificar").addEventListener("submit", function(event){
    event.preventDefault();

    let texto = document.getElementById("texto").value;
    let deslocamento = parseInt(document.getElementById("deslocamento").value);
    let modo = event.submitter.value; 

    Codific(texto, deslocamento, modo); 
}
)

function Codific(texto, desloc, modo){
    let resultado = "";
    for (let i = 0; i < texto.length; i++){
        let ascii = texto[i].charCodeAt();
        if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
        if(modo == "codificar") {
            ascii += desloc
            if ((ascii > 90 && texto[i] <= 'Z') || ascii > 122){
                ascii -= 26; 
            }
        } else if(modo == "descodificar") {
            ascii -= desloc
        if((ascii < 65 && texto[i] <= 'Z') || ascii < 97) {
            ascii += 26;   
        }
        }
    }
        resultado += String.fromCharCode(ascii) 
    }
    console.log(resultado);
    const showResult = document.getElementById('showResultado');
    showResult.innerText = resultado;
}  