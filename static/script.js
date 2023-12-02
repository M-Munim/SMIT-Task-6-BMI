const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector(("#name"))
    let nameValue = name.value;
    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    let result = document.querySelector("#result")
    let CompDataOne = document.querySelector("#CompDataOne")
    let CompDataTwo = document.querySelector("#CompDataTwo")
    let bmiMsg = document.querySelector("#bmi_msg")
    let tableNameOne = document.querySelector("#name")

    if (isNaN(height) || height === "" || height < 0) {
        result.value = "Enter a valid height"
    } else if (isNaN(weight) || weight === "" || weight < 0) {
        result.value = "Enter a valid weight"
    } else {
        var bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.value = `BMI: ${bmi}`
        CompDataOne.value = `BMI: ${bmi}`
    }

    if (bmi < 18.6) {
        bmiMsg.value = `${nameValue}'s bmi is ${bmi}, which is under weight "KUCH KHAYA PEA KARO JANAB "`
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        bmiMsg.value = `${nameValue}'s bmi is ${bmi}, which is Normal `
    }
    else if (bmi > 24.9) {
        bmiMsg.value = `${nameValue}'s bmi is ${bmi}, which is OverWeigth "Ustad hath hola rakh"`
    }

})

