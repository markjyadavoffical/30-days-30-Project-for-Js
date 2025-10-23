  window.onload = () => {
     const button = document.querySelector('#btn');
button.addEventListener('click',function(){

     const height = document.querySelector('#height').value;
     const weight = document.querySelector('#weight').value;
     const result = document.querySelector('.result')

     if (height ==="" || height <0 || isNaN(height)) {
        result.innerHTML= `please give a valid value ${height}`
     } else if(weight ==="" || weight <0 || isNaN(weight)) {
        result.innerHTML =`please give a valid value ${weight}`
     }

       const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}`; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Over Weight: ${bmi}`;
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesity (Class I): ${bmi}`;
    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `Obesity (Class II) : ${bmi}`;
    } else {
        result.innerText = `Extreme Obesity: ${bmi}`;
    }
})
  }   
  