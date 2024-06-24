function botaoCriptografar() {
    let textarea = document.getElementById('texto');
    let texto = textarea.value;
    texto = criptografar(texto);
    console.log(texto);
    let textoFinal = document.querySelector('.painel-direito-texto');
    textoFinal.value = texto;
    document.getElementById('texto-final').style.display = 'block';
    console.log(document.getElementById('painel-direito-botao-copiar').style.display)
    document.getElementById('painel-direito-botao-copiar').style.visibility = 'visible';
    document.getElementById('painel-direito-imagem').style.display = 'none';
    document.getElementById('painel-direito-textos').style.display = 'none';
    return texto;
}

function botaoDesriptografar() {
    let textarea = document.getElementById('texto');
    let texto = textarea.value;
    texto = descriptografar(texto);
    let textoFinal = document.querySelector('.painel-direito-texto');
    textoFinal.value = texto;
    document.getElementById('texto-final').style.display = 'block';
    console.log(document.getElementById('painel-direito-botao-copiar').style.display)
    document.getElementById('painel-direito-botao-copiar').style.visibility = 'visible';
    document.getElementById('painel-direito-imagem').style.display = 'none';
    document.getElementById('painel-direito-textos').style.display = 'none';
    return texto
}

function criptografar(texto) {
    const vogais = /[aeiou]/gi;
    const substituicoes = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    };

    const palavras = texto.split(' ');

    const novoTexto = palavras.map(palavra => {
        return palavra.replace(vogais, vogal => substituicoes[vogal.toLowerCase()] || vogal);
    }).join(' ');

    return novoTexto;
}

function descriptografar(mensagemCriptografada) {
    const substituicoes = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    const partes = mensagemCriptografada.split(/(enter|imes|ai|ober|ufat)/);

    // Mapeia cada parte para a letra correspondente
    const mensagemDescriptografada = partes.map(parte => substituicoes[parte] || parte).join("");

    return mensagemDescriptografada;
}

function botaoCopiar() {
    const textarea = document.getElementById('texto-final');
    textarea.select();
    document.execCommand('copy');
}