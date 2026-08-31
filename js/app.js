document.addEventListener("DOMContentLoaded", function () {
let xp = 0;
let sequencia = 0;
let nivel = 1;

const xpTexto = document.getElementById("xp");
const sequenciaTexto = document.getElementById("sequencia");
const botaoConcluir = document.getElementById("botao-concluir");
const nivelTexto = document.getElementById("nivel");
const progressoXp = document.getElementById("progresso-xp");

botaoConcluir.onclick = function () {
    xp = xp + 20;
    sequencia = sequencia + 1;
    if (xp >= 100) {
        nivel = nivel + 1;
        xp = 0;
        nivelTexto.textContent = "Nível: " + nivel;
        progressoXp.style.width = "%";
    }
    xpTexto.textContent = `XP: ${xp} / 100`;
    sequenciaTexto.textContent = `🔥 Sequência: ${sequencia} dias`;
};
});