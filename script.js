document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    let resultado = `Seu IMC é ${imc.toFixed(2)}. `;

    if (imc < 18.5) {
        resultado += "Você está abaixo do peso. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Dieta rica em calorias e nutrientes para o ganho de peso de forma saudável. Ex:Bife de carne vermelha grelhada, arroz integral e legumes cozidos.
Sopa de feijão com legumes e frango.</li>";
        resultado += "<li><strong>Atividades:</strong> Exercícios de resistência como musculação, para ganho de massa muscular.</li></ul>";
    } else if (imc >= 18.5 && imc < 24.99) {
        resultado += "Você está com peso normal. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Dieta balanceada, com alimentos nutritivos e saudáveis. Ex: Salada de folhas verdes com frango grelhado, tomate, azeite; arroz integral com legumes; sopa de legumes com abobrinha e ervilha e pão integral.</li>";
        resultado += "<li><strong>Atividades:</strong> Manter uma rotina de atividades físicas moderadas, como caminhadas ou ciclismo.</li></ul>";
    } else if (imc >= 25 && imc < 29.99) {
        resultado += "Você está com sobrepeso. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Dieta balanceada, com alimentos de baixa calorias. Ex: Peixe grelhado com salada e folhas verdes, arroz integral, feijão de caldo com batata doce.</li>";
        resultado += "<li><strong>Atividades:</strong> Exercícios aeróbicos, como corrida e natação, para perda de peso.</li></ul>";
    } else {
        resultado += "Você está com obesidade. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Dieta com baixa calorias, para ajudar na perda de peso de forma saudável e sustentável. Ex:Omelete de ovos com legumes, cebola, pimentão e espinafre.
Salada de folhas verdes, frango grelhado com cebola. Arroz integral.</li>";
        resultado += "<li><strong>Atividades:</strong> Exercícios leves e moderados com acompanhamento, como caminhada e hidroginástica.</li></ul>";
    }

    resultado += "<p><em>Nota: Antes de iniciar qualquer atividade física ou dieta, consulte sempre um Nutricionista e um Profissional de Educação Física para obter melhores resultados e garantir sua saúde.</em></p>";

    document.getElementById("resultado").innerHTML = resultado;
});
