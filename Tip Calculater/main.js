const billinput = document.getElementById("bill")
const tipinput = document.getElementById("tip")
const btnvalue = document.getElementById("btn")
const total  = document.getElementById("show")


function TipCalculateFunction(){
    const billValue = billinput.value
    const TipValue = tipinput.value
    const totalVal = billValue *(1+ TipValue/100)
    total.innerHTML = totalVal.toFixed(2)
}


btnvalue.addEventListener("click", TipCalculateFunction)