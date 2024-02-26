const butonSim = document.getElementById("sim");

butonSim.addEventListener("click", ()=>{
    box = document.getElementById("mod");

    box.style.display = "flex"
    setTimeout(()=>{
        window.location.href = "https://youtu.be/UL3fVR063_s?si=-KSG7HDEfnsCgUNe";
    },6000)
});

function sortearPositions(min,max){
    const numero1 = Math.floor(Math.random() * (max - min +1)) + min;
    const numero2 = Math.floor(Math.random() * (max - min +1)) + min;
    return(numero1,numero2)
};



const butonNao = document.getElementById("nao");

butonNao.addEventListener("mouseover", () => {
    function sortearPositions(min, max) {
        const numero1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const numero2 = Math.floor(Math.random() * (max - min + 1)) + min;
        return [numero1, numero2];
    }

    const [novoTop, novoLeft] = sortearPositions(0, 600); // Substitua 0 e 300 pelos valores desejados
    butonNao.style.position = "absolute";
    butonNao.style.top = `${novoTop}px`;
    butonNao.style.left = `${novoLeft}px`;
});