const convertButton = document.querySelector(".convert-button");
const currencySelectFrom = document.querySelector(".currency-select-from"); // Seleção de origem
const currencySelectTo = document.querySelector(".currency-select"); // Seleção de destino

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueToConverted = document.querySelector(".currency-value");

  // Taxas de câmbio para as moedas
  const exchangeRates = {
    real: 1.0,
    dolar: 5.2,
    euro: 6.2,
    libra: 7.2,
    bitcoin: 300000.5,
  };

  // Taxa da moeda de origem
  const fromRate = exchangeRates[currencySelectFrom.value];
  // Taxa da moeda de destino
  const toRate = exchangeRates[currencySelectTo.value];

  // Faz a conversão
  const convertedValue = (inputCurrencyValue * fromRate) / toRate;

  // Atualiza o valor convertido na interface
  currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencySelectTo.value === "real" ? "BRL" :
              currencySelectTo.value === "dolar" ? "USD" :
              currencySelectTo.value === "euro" ? "EUR" :
              currencySelectTo.value === "libra" ? "GBP" : "BTC",
  }).format(convertedValue);

  // Atualiza o valor inicial (em BRL) da entrada
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currencySelectFrom.value === "real" ? "BRL" :
              currencySelectFrom.value === "dolar" ? "USD" :
              currencySelectFrom.value === "euro" ? "EUR" :
              currencySelectFrom.value === "libra" ? "GBP" : "BTC",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyNameFrom = document.getElementById("currency-name-from"); // Nome da moeda de origem
  const currencyImageFrom = document.querySelector(".currency-img-from"); // Imagem da moeda de origem

  const currencyNameTo = document.getElementById("currency-name"); // Nome da moeda de destino
  const currencyImageTo = document.querySelector(".currency-img"); // Imagem da moeda de destino

  // Atualiza o nome e a imagem da moeda de origem
  if (currencySelectFrom.value === "real") {
    currencyNameFrom.innerHTML = "Real";
    currencyImageFrom.src = "./assets/real.png";
  } else if (currencySelectFrom.value === "dolar") {
    currencyNameFrom.innerHTML = "Dólar Americano";
    currencyImageFrom.src = "./assets/dolar.png";
  } else if (currencySelectFrom.value === "euro") {
    currencyNameFrom.innerHTML = "Euro";
    currencyImageFrom.src = "./assets/euro.png";
  } else if (currencySelectFrom.value === "libra") {
    currencyNameFrom.innerHTML = "Libra Esterlina";
    currencyImageFrom.src = "./assets/libra.png";
  } else if (currencySelectFrom.value === "bitcoin") {
    currencyNameFrom.innerHTML = "Bitcoin";
    currencyImageFrom.src = "./assets/bitcoin.png";
  }

  // Atualiza o nome e a imagem da moeda de destino
  if (currencySelectTo.value === "real") {
    currencyNameTo.innerHTML = "Real";
    currencyImageTo.src = "./assets/real.png";
  } else if (currencySelectTo.value === "dolar") {
    currencyNameTo.innerHTML = "Dólar Americano";
    currencyImageTo.src = "./assets/dolar.png";
  } else if (currencySelectTo.value === "euro") {
    currencyNameTo.innerHTML = "Euro";
    currencyImageTo.src = "./assets/euro.png";
  } else if (currencySelectTo.value === "libra") {
    currencyNameTo.innerHTML = "Libra Esterlina";
    currencyImageTo.src = "./assets/libra.png";
  } else if (currencySelectTo.value === "bitcoin") {
    currencyNameTo.innerHTML = "Bitcoin";
    currencyImageTo.src = "./assets/bitcoin.png";
  }

  convertValues();
}

// Eventos para o botão de conversão e mudanças nos selects
currencySelectFrom.addEventListener("change", changeCurrency); // Seleção de origem
currencySelectTo.addEventListener("change", changeCurrency); // Seleção de destino
convertButton.addEventListener("click", convertValues);
