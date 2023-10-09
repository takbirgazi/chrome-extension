
    const convertButton = document.getElementById('convertButton');
    const usdAmountInput = document.getElementById('usdAmount');
    const resultDisplay = document.getElementById('result');
  
    convertButton.addEventListener('click', function() {
      const usdAmount = parseFloat(usdAmountInput.value);
      if (!isNaN(usdAmount)) {


        // API Intigration 

          let fromCuntry = "USD";
          let toCuntry = "BDT";
          let curancy = usdAmount;
          var myHeaders = new Headers();
          myHeaders.append("apikey", "rQkq9MVIHQxa7RuNRn0BwdKBfiOT5Vm4");

          var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
          };

          fetch("https://api.apilayer.com/currency_data/convert?to="+toCuntry+"&from="+fromCuntry+"&amount="+curancy, requestOptions)
            .then(response => response.json())
            .then(result => {
                const resultAmount = Number(result.result);
                const res =resultAmount.toFixed(2);
                resultDisplay.textContent = `${usdAmount} USD is approximately ${res} BDT`;
            })
            .catch(error => console.log('error', error));

            resultDisplay.textContent = "Loading...";

      } else {
        resultDisplay.textContent = 'Please enter a valid USD amount.';
      }
    });
  
