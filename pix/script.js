function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

async function geraPix() {
    document.getElementById('numero').hidden = false;
    document.querySelector(".pix").hidden = true;
    document.querySelector(".carregamento").hidden = false;
    await delay();
    document.querySelector(".pix").hidden = false;
    document.querySelector(".carregamento").hidden = true;
}

window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".pix").hidden = true;
    document.querySelector(".carregamento").hidden = true;
    
    document.querySelector("#comprar").addEventListener("click", async function() {
        await geraPix();
    });
})

const texto = document.getElementById('texto');
document.getElementById('copia').addEventListener('click',copiar);

async function copiar(){
    const mensagem = document.getElementById('mensagem');
    if(mensagem.hidden == true){
    const imagem = document.getElementById('copia');
    imagem.src = "check.png"
     const texto = document.getElementById('texto');
    await navigator.clipboard.writeText(texto.textContent);
    texto.style.textDecoration = "underline";
    mensagem.hidden = false;
    }else {
        mensagem.textContent = '*Código Já Copiado';
    }

   
}

