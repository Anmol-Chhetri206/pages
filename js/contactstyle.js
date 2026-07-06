function contact()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if(name == "" || email == "")
    {
        alert("These Fields are required.");
        return false;
    }
    let userMessage =
    {
        name: name,
        email:email,
        message: message
    };
    let userMessages = JSON.parse(localStorage.getItem("userMessages")) || [];
    userMessages.push(userMessage);
    localStorage.setItem("userMessages",JSON.stringify(userMessages));
    alert("Your Message is received. We will contact you soon..");
    return true;
}