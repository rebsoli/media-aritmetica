function calcular() {
    let bimestre1 = parseFloat(document.getElementById("1bimestre").value),
        bimestre2 = parseFloat(document.getElementById("2bimestre").value),
        bimestre3 = parseFloat(document.getElementById("3bimestre").value),
        bimestre4 = parseFloat(document.getElementById("4bimestre").value),
        media = document.getElementById("media").value,
        mediaFinal = parseFloat(
            (bimestre1 + bimestre2 + bimestre3 + bimestre4) / 4
        ),
        resultado = document.getElementById("resultado");
    function limpar(id) {
        document.getElementById(`${id}`).value = "";
    }
    if (
        bimestre4 > 10 ||
        bimestre3 > 10 ||
        bimestre2 > 10 ||
        bimestre1 > 10 ||
        bimestre4 < 0 ||
        bimestre3 < 0 ||
        bimestre2 < 0 ||
        bimestre1 < 0 ||
        media > 10 ||
        media < 0
    ) {
        alert(
            "O valor digitado foge do sistema númerico (0 a 10). Por favor, tente novamente"
        );
        limpar("media");
        limpar("1bimestre");
        limpar("2bimestre");
        limpar("3bimestre");
        limpar("4bimestre");
    } else if (
        isNaN(document.getElementById("1bimestre").value) ||
        isNaN(document.getElementById("2bimestre").value) ||
        isNaN(document.getElementById("3bimestre").value) ||
        isNaN(document.getElementById("4bimestre").value) ||
        isNaN(document.getElementById("media").value)
    ) {
        alert("O valor digitado não é um número");
        limpar("media");
        limpar("1bimestre");
        limpar("2bimestre");
        limpar("3bimestre");
        limpar("4bimestre");
    } else if (
        document.getElementById("1bimestre").value == "" ||
        document.getElementById("2bimestre").value == "" ||
        document.getElementById("3bimestre").value == "" ||
        document.getElementById("4bimestre").value == "" ||
        document.getElementById("media").value == ""
    ) {
        alert("Você não preencheu todos os campos");
    } else {
        resultado.innerHTML = `Sua média foi de ${mediaFinal}`;
        let status = document.getElementById("status");
        if (mediaFinal >= media) {
            status.innerHTML = "Você foi aprovado!";
            status.style.color = "green";
        } else {
            status.innerHTML = "Você foi reprovado!";
            status.style.color = "red";
        }
    }
}