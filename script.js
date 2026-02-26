function calcular() {
    const custo = parseFloat(document.getElementById('custo').value);
    const venda = parseFloat(document.getElementById('venda').value);
    
    if(custo && venda) {
        const lucro = venda - custo;
        const margem = (lucro / venda) * 100;
        
        document.getElementById('resultado').classList.remove('hidden');
        document.getElementById('lucroBruto').innerHTML = `<b>Lucro:</b> R$ ${lucro.toFixed(2)}`;
        document.getElementById('margem').innerHTML = `<b>Margem:</b> ${margem.toFixed(2)}%`;
    } else {
        alert("Por favor, preencha os valores!");
    }
}
function compartilhar() {
    const custo = document.getElementById('custo').value;
    const venda = document.getElementById('venda').value;
    const lucro = (venda - custo).toFixed(2);
    const texto = `Usei a Calculadora de Lucro! 📈%0A*Custo:* R$ ${custo}%0A*Venda:* R$ ${venda}%0A*Lucro Real:* R$ ${lucro}%0A%0ACalcule o seu aqui: ${window.location.href}`;
    window.open(`https://wa.me/?text=${texto}`, '_blank');
}
