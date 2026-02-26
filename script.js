function calcular() {
    const custo = parseFloat(document.getElementById('custo').value);
    const venda = parseFloat(document.getElementById('venda').value);
    const resDiv = document.getElementById('resultado');

    if (custo > 0 && venda > 0) {
        const lucro = (venda - custo).toFixed(2);
        const margem = ((lucro / venda) * 100).toFixed(2);

        document.getElementById('lucroBruto').innerHTML = `<b>Lucro:</b> R$ ${lucro}`;
        document.getElementById('margem').innerHTML = `<b>Margem:</b> ${margem}%`;
        resDiv.classList.remove('hidden');
    } else {
        alert("Por favor, preencha os valores corretamente.");
    }
}

function compartilhar() {
    const custo = document.getElementById('custo').value;
    const venda = document.getElementById('venda').value;
    const lucro = (venda - custo).toFixed(2);
    const url = window.location.href;
    const texto = `📈 *Resultado da Calculadora*%0A%0A*Custo:* R$ ${custo}%0A*Venda:* R$ ${venda}%0A*Lucro:* R$ ${lucro}%0A%0AFaça seu cálculo aqui: ${url}`;
    window.open(`https://wa.me/?text=${texto}`, '_blank');
}
