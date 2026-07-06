function forgot()
{
    let email = document.getElementById("email").value;
    let npassword = document.getElementById("npassword").value;
    let cpassword = document.getElementById("cpassword").value;
    if(email === "" || npassword === "" || cpassword === "")
    {
        alert("All fields are mandatory");
        return;
    }
    if(npassword !== cpassword)
    {
        alert("Passwords do not match");
        return;
    }
    let user = JSON.parse(localStorage.getItem("user"));
    if(user && email === user.email)
    {
        user.password = npassword;
        localStorage.setItem("user", JSON.stringify(user));
        alert("Password Changed Successfully");
        window.location.href = "../index.html";
    }
    else
    {
        alert("Email not found");
    }
}