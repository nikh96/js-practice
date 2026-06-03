const form = document.querySelector("form")

// prevent default action
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please provide a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please provide a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // show the result 
        let bmiMessage = ""
        if (bmi < 18.5) {
            bmiMessage = "You are underweight"
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiMessage = "You are normal weight"
        } else {
            bmiMessage = "You are overweight"
        }
        results.innerHTML = `<span>BMI: ${bmi}</span> <br/> <strong>${bmiMessage}</strong>`
    }


})