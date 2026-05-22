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
            window.location = "../html/admin.html"

        else if(document.getElementById("txtUser").value == nameUser && document.getElementById("txtPass").value == passUser)
            window.location = "../html/user.html"

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