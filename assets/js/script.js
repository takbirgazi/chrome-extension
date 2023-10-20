
// From Currency Selection Code 
let frm_curancy= document.querySelector("#from_curncy");
let f_hid= document.getElementById("from_curnc_hid_opt");

    f_hid.value = frm_curancy.value;

    frm_curancy.addEventListener("change", (event) => { 
          f_hid.value = event.target.value;

    });

// TO Currency Selection Code 
let to_curancy= document.querySelector("#to_curncy");
let to_hid= document.getElementById("to_curnc_hid_opt");

    to_hid.value = to_curancy.value;

    to_curancy.addEventListener("change", (event) => { 
          to_hid.value = event.target.value;

    });
    
// Realtime Currency Convertion with API 
const convertButton = document.getElementById('convertButton');
const usdAmountInput = document.getElementById('usdAmount');
const resultDisplay = document.getElementById('result');

  convertButton.addEventListener('click', function() {
    const usdAmount = parseFloat(usdAmountInput.value);
    if (!isNaN(usdAmount)) {

      // API Intigration 
      // API From:- https://apilayer.com/

        let fromCuntry = document.getElementById("from_curnc_hid_opt").value;
        let toCuntry = document.getElementById("to_curnc_hid_opt").value;
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
                  resultDisplay.textContent = `${usdAmount} ${fromCuntry} is approximately ${res} ${toCuntry}`;
              })
              .catch(error => console.log('error', error));

              resultDisplay.textContent = "Loading...";

    } else {
      resultDisplay.textContent = 'Please enter a valid USD amount.';
    }
  });