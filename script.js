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
