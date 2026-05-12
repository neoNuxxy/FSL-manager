function companiesInfo()
{
    let sector = ""
    let location = ""
    let maxStudents = 0
    let referent = ""
    let history = ""

    try
    {
        sector = document.getElementById("txtSector").value
        location = document.getElementById("txtLocation").value
        maxStudents = parseInt(document.getElementById("txtMaxStudents").value)
        referent = document.getElementById("txtReferent").value
        history = document.getElementById("txtHistory").value
    }

    catch
    {
        alert("The information inserted is invalid!")
    }
    
}

function courseInfo()
{
    let achievement = ""
    let skill = ""
    let workingPeriod = ""
    let hourCount = 0
    const hourCountTotal = 150

    try
    {
        achievement = document.getElementById("txtAchievement").value
        skill = document.getElementById("txtSkill").value
        workingPeriod = document.getElementById("txtWorkingPeriod").value
        hourCount = parseInt(document.getElementById("txtHourCount").value)
        hourCountTotal = 150
    }
    
    catch
    {
        alert("The information inserted is invalid!")
    }
}

function saveFile()
{
    JSON.stringify()
}