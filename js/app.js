document.addEventListener("DOMContentLoaded", function () {
let xp = 0;
let sequencia = 0;
 
const xpTexto = document.getElementById("xp");
const sequenciaTexto = document.getElementById("sequencia");
const botaoConcluir = document.getElementById("botao-concluir");

botaoConcluir.onclick = function () {
    xp = xp + 20;
    sequencia = sequencia + 1;
    xpTexto.textContent = `XP: ${xp} / 100`;
    sequenciaTexto.textContent = `🔥 Sequência: ${sequencia} dias`;
};
});