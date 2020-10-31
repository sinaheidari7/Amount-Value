var total = 0;

function clicked(val){
  total = total + parseFloat(val);
  var amountField = document.getElementById("mydata");
  amountField.innerHTML = "Amount = $" + total.toFixed(2);   
}
