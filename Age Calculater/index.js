const birthDateInput = document.getElementById("date")
const button  = document.getElementById("btn")
const show  = document.getElementById("show")



function BirthDateCalcute(){
    const birthdayValue = birthDateInput.value
    if(birthdayValue === ""){
        alert("plese enter your birthday date")
    }else{
        const age = getAge(birthDateInput)
        show.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }

    function getAge(birthdayvalue){
         const CurrentDAte = new Date();
         const birthdayDate = new Date(birthdayValue)
         let age = CurrentDAte.getFullYear()- birthdayDate.getFullYear()
         const month  = CurrentDAte.getMonth()-  birthdayDate.getMonth()

           if (
    month < 0 ||
    (month === 0 && CurrentDAte.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
      return age;
    }

}


button.addEventListener("click", BirthDateCalcute)
