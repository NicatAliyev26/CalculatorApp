function display(val) {
  document.getElementById("result").value += val
  
}

function calculate() {
   var result = document.getElementById("result").value
   var answer = eval(result)

   document.getElementById("result").value = answer
}

function clearResult() {
    document.getElementById("result").value = ""
}