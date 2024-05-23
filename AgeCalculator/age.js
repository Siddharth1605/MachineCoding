document.getElementById("ageForm").addEventListener('submit', function(event){
    event.preventDefault();
    let date = Number(document.getElementById("date").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);
    if(ageValidatior())
    {
        displayAge(date, month, year);
        resetForm();
    }

})
function displayAge(date, month, year)
{
    let currentDate = new Date();
    let currentmonth = currentDate.getMonth() + 1;
    let currentyear = currentDate.getFullYear();
    let currentdate = currentDate.getDate();

    let age = currentyear - year;
    if(currentmonth < month || (currentmonth === month && currentDate < date))
        age--;

    document.getElementById("years").textContent = age + " Years ";
    document.getElementById("months").textContent = '';
    document.getElementById("dates").textContent = '';

}
function ageValidatior()
{
    document.getElementById("dateError").textContent = '';
    document.getElementById("monthError").textContent = '';
    document.getElementById("yearError").textContent = '';

    let date = Number(document.getElementById("date").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);

    let flag = true;

    if(date <= 0 || date >= 32|| month.toString() === '')
    {
        document.getElementById("dateError").textContent = "Please enter a proper date";
        flag = false;
    }

    if(month <= 0 || month >= 13 || month.toString() === '')
    {
        document.getElementById("monthError").textContent = "Please enter a proper month";
        flag = false;
    }

    if(year <= 1990 || year >= 2025 || year.toString() === '')
    {
        document.getElementById("yearError").textContent = "Please enter a proper year";
        flag = false;
    }
    return flag;
}

function resetForm() {
    console.log("Reset form")
    // Clear input values
    document.getElementById("date").value = '';
    document.getElementById("month").value = '';
    document.getElementById("year").value = '';
 
}