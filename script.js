document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    let resultado = `Seu IMC é ${imc.toFixed(2)}. `;

    if (imc < 18.5) {
        resultado += "Você está abaixo do peso. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Dieta rica em calorias e nutrientes para o ganho de peso de forma saudável. Exemplo: Bife de carne vermelha grelhada, arroz integral e legumes cozidos, sopa de feijão com legumes e frango.</li>";
        resultado += "<li><strong>Atividades:</strong> MUSCULAÇÃO 2 A 3 VEZ POR SEMANA (AGACHAMENTO, FLEXÃO,ELEVAÇÃO DE PANTURRILHA, DENTRE OUTROS).</li></ul>";
    } else if (imc >= 18.5 && imc < 24.99) {
        resultado += "Você está com peso normal. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Dieta balanceada, com alimentos nutritivos e saudáveis. Exemplo: Salada de folhas verdes com frango grelhado, tomate, azeite; arroz integral com legumes; sopa de legumes com abobrinha e ervilha e pão integral.</li>";
        resultado += "<li><strong>Atividades:</strong>CAMINHADA/CORRIDA LEVE, MUSCULAÇÃO, CROSSFIT (2 A 3 VEZES POR SEMANA).</li></ul>";
    } else if (imc >= 25 && imc < 29.99) {
        resultado += "Você está com sobrepeso. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Dieta balanceada, com  alimentos de baixa calorias. Exemplo: Peixe grelhado com salada e folhas verdes, arroz integral, feijão de caldo com batata doce.</li>";
        resultado += "<li><strong>Atividades:</strong>CAMINHADA, CORRIDA, CICLISMO, NATAÇÃO, MUSCULAÇÃO (3 A 5 VEZES POR SEMANA).</li></ul>";
    } else {
        resultado += "Você está com obesidade. Sugestões:";
        resultado += "<ul><li><strong>Cardápio:</strong> Dieta com baixa calorias, para ajudar na perda de peso de forma saudável e sustentável. Exemplo: Omelete de ovos com legumes, cebola, pimentão e espinafre. Salada de folhas verdes, frango grelhado com cebola. Arroz integral.</li>";
        resultado += "<li><strong>Atividades:</strong>CAMINHADA, HIDROGINÁSTICA, MUSCULAÇÃO (3 A 5 VEZES POR SEMANA).</li></ul>";
    }

    resultado += "<p><em>Nota: Antes de iniciar qualquer atividade física ou dieta, consulte sempre um Nutricionista e um Profissional de Educação Física para obter melhores resultados e garantir sua saúde.</em></p>";

    document.getElementById("resultado").innerHTML = resultado;
});
