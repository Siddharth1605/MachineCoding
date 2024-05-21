function valid()
{
    document.getElementById("emailError").textContent = '';
    document.getElementById("firstError").textContent = '';
    document.getElementById("lastError").textContent = '';
    document.getElementById("queryError").textContent = '';
    document.getElementById("checkError").textContent = '';

    let query = document.getElementsByName("query");
    let flag = true;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;

    if(firstname === '')
    {
        document.getElementById("firstError").textContent = 'First Name is required';
        flag = false;
    }

    if(lastname === '')
    {
        document.getElementById("lastError").textContent = "Last Name is required";
        flag = false;
    }

    if(email === '' || !emailPattern.test(email))
    {
        document.getElementById("emailError").textContent = "Email is required";
        flag = false;
    }

    let count = 0 ;
    for(i = 0;i<query.length;i++)
    {
        if(query[i].checked)
            count++;
    }
    if(count > 1 || count < 1)
    {
        document.getElementById("queryError").textContent = "Need to Select a query";
        flag = false;
    }

    if(!document.getElementById("checkbox").checked)
    {
        document.getElementById("checkError").textContent = "Please agree to the conditions";
        flag = false;
    }
    return flag;
}