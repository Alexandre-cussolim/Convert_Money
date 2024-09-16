const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //valor convertido
  const currencyValueToConverted = document.querySelector(".currency-value"); // outra moedas

  //console.log(currencySelect.value)
  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.2;
  const bitcoinToday = 300000.5;

  //const convertedValue = inputCurrencyValue / dolarToday

  if (currencySelect.value == "dolar") {
    //Se o select estiver o selecionado o valor de dolar, entre aqui
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    //Se o select estiver o selecionado o valor de euro, entre aqui
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelect.value == "libra") {
    //Se o select estiver o selecionado o valor de libra, entre aqui
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-EN", {
      style: "currency",
      currency: "GPB",
    }).format(inputCurrencyValue / libraToday);
  }
  if (currencySelect.value == "bitcoin") {
    //Se o select estiver o selecionado o valor de bitcoin, entre aqui
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar americano"
    currencyImage.src = "./assets/dolar.png" 
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png" 
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png" 
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bit Coin"
    currencyImage.src = "./assets/bitcoin.png" 
  }

  convertValues()
}

currencySelect.addEventListener("change",changeCurrency )
convertButton.addEventListener("click", convertValues);
