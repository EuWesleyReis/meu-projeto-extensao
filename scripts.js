// Barra Inteligente (Aberto / Fechado)
function verificarHorario() {
    const agora = new Date();
    const dia = agora.getDay(); // 0 = domingo
    const hora = agora.getHours();
    const minuto = agora.getMinutes();

    let aberto = false;

    // Domingo
    if (dia === 0) {
        if (hora >= 8 && (hora < 19 || (hora === 19 && minuto === 0))) {
            aberto = true;
        }
    } else {
        // Segunda a sábado
        if (hora >= 8 && hora < 23) {
            aberto = true;
        }
    }

    const barra = document.getElementById("status-bar");

    if (aberto) {
        barra.textContent = "🟢 Estamos ABERTOS! Faça seu pedido!";
        barra.classList.add("status-open");
        barra.classList.remove("status-closed");
    } else {
        barra.textContent = "🔴 Estamos FECHADOS no momento — abrimos às 08:00";
        barra.classList.add("status-closed");
        barra.classList.remove("status-open");
    }
}

verificarHorario();
setInterval(verificarHorario, 60000);
