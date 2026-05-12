var attempts = 3

function login()
{
    const nameAdmin = "teacher"
    const nameUser = "student"

    const passAdmin = "admin"
    const passUser = "user"

    try
    {
        if(document.getElementById("txtUser").value == nameAdmin && document.getElementById("txtPass").value == passAdmin)
        {
            alert("Welcome teacher")
            window.location = "../html/admin.html"
        }

        else if(document.getElementById("txtUser").value == nameUser && document.getElementById("txtPass").value == passUser)
        {
            alert("Welcome student")
            window.location = "../html/student.html"
        }

        else
        {
            attempts--
            alert("The username or password is invalid!\nAttempts remaining: " + attempts)
        }

        if(attempts == 0)
        {
            alert("Too many failed attempts!")
            window.location = "https://google.com"
        }
    }

    catch
    {
        attempts--
        alert("The username or password is invalid!\nAttempts remaining: " + attempts)
    }
} 