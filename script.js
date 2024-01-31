// Objeto contendo as informações dos pets
var petsInfo = {
    ivana: {
        nome: "Ivana",
        imagem: "/img/ivana (2).jpg",
        descricao: "Ivana tem cor preta, ela é a matriarca da família felina, exala uma aura de autoridade e sabedoria. Seus olhos profundos revelam uma vida de experiências e sua determinação é admirável. Ela governa com uma mistura única de firmeza e compaixão, sendo a guardiã de todos os gatos da casa."
    },
    simbinha: {
        nome: "Simbinha",
        imagem: "/img/simbinha.jpg",
        descricao: "Simbinha tem sua cor amarela, ele é um eterno companheiro, é como um farol de fidelidade em nossas vidas. Seu temperamento peculiar adiciona uma pitada de mistério à sua presença, enquanto seu coração está sempre aberto para aqueles que o cercam."
    },
    cher: {
        nome: "Cher",
        imagem: "/img/cher.jpg",
        descricao: "Cher é nossa princesa cinza. Personalidade: Nossa gata azul, Cher, é uma obra-prima de graça, timidez e mistério. Ela desliza suavemente pela casa, deixando para trás um rastro de encanto e curiosidade. Seu olhar reservado revela um mundo interior repleto de sonhos e desejos."
    },
    Ivan: {
        nome: "Ivan",
        imagem: "/img/ivan e jair.jpg",
        descricao: "É o mestre do conforto, sabe como aproveitar cada momento de tranquilidade. Sua preguiça é uma arte refinada, enquanto sua capacidade de se aconchegar nos lugares mais inesperados é verdadeiramente inspiradora."
    },

    // Adicione mais pets conforme necessário
};

// Função para mostrar as informações do pet selecionado
function mostrarInfo(petKey) {
    var pet = petsInfo[petKey];
    var paragrafoInfo = document.getElementById('paragrafo-info');
    var imagemInfo = document.getElementById('imagem-info');

    paragrafoInfo.innerHTML = "<p><span>" + pet.nome + "</span> " + pet.descricao + "</p>";
    imagemInfo.innerHTML = "<img src='" + pet.imagem + "' alt='" + pet.nome + "'>";

    var imgElement = imagemInfo.querySelector("img");
    imgElement.style.maxWidth = "100%"; // Para garantir que a imagem não ultrapasse o contêiner
    imgElement.style.display = "block"; // Para centralizar a imagem horizontalmente
    imgElement.style.margin = "0 auto"; // Margens automáticas para centralizar horizontalmente
    imgElement.style.maxHeight = "600px"; // Defina a altura máxima conforme necessário
}

