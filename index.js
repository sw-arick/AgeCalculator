const date = document.getElementById('date');
const button = document.getElementById('submit');
const result = document.getElementById('result');

function calcAge() {
    const birthdayValue = date.value;
    if(birthdayValue === "") {
        result.textContent = "Please enter your date of birth.";
    }
    else {
        const age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age;
}

button.addEventListener("click", calcAge);  