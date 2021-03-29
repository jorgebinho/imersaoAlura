var chama = () => 
{
    var dolarValue = prompt("Qual o valor em dólar que deseja converter?");
    var dolarValueNum = parseFloat(dolarValue);

    var realValue = dolarValueNum * 5.75;
    var decimalValue = realValue.toFixed(2)
    alert(`O valor convertido para dolar é de: ${decimalValue}`);
}

chama();