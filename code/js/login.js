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
            alert("The username or password is invalid!")
    }

    catch
    {
        alert("The username or password is invalid!")
    }
} 