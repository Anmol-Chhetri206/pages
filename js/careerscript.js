 $(document).ready(function()
    {
        $("#datepicker").datepicker({
        changeMonth : true,
        changeYear : true,
        yearRange : "1980:2026",
        dateFormat : "dd-mm-yy"
        });
    });
function data()
		{
		var fname=document.getElementById("fname").value;
		var lname=document.getElementById("lname").value;
        var dateOfBirth = document.getElementById("datepicker").value;
		var contact=document.getElementById('contact').value;
		var email=document.getElementById('email').value;
        var qualification = document.getElementById("qualification").value;
		if(fname =="" || lname == "" || dateOfBirth == "" || contact == "" || email == "" || qualification == "")
        {
           alert("All Fields are required");
           return false;
        }
        let applicant =
        {
            fnamea: fname,
            lname: lname,
            dateOfBirth: dateOfBirth,
            contact: contact,
            email: email,
            qualification: qualification
        };
        let applicants = JSON.parse(localStorage.getItem("applicants")) || [];
        applicants.push(applicant);
        localStorage.setItem("applicants",JSON.stringify(applicants));
        alert("Form Submitted Successfully. We will contact you soon....");
        return false;
		}