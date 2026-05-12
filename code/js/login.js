var admin = false

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
            admin = true
            alert("Welcome teacher")
        }

        else if(document.getElementById("txtUser").value == nameUser && document.getElementById("txtPass").value == passUser)
        {
            admin = false
            alert("Welcome student")
        }

        else
            alert("The username or password is invalid!")
    }

    catch
    {
        alert("The username or password is invalid!")
    }

    return admin
} 