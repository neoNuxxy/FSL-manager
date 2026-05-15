function companiesInfoCheck()
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

function courseInfoCheck()
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
    }
    
    catch
    {
        alert("The information inserted is invalid!")
    }
}

function saveFile()
{
    var fileModel =
    {
        sector: document.getElementById("txtSector").value,
        location: document.getElementById("txtLocation").value,
        maxStudents: parseInt(document.getElementById("txtMaxStudents").value),
        referent: document.getElementById("txtReferent").value,
        history: document.getElementById("txtHistory").value,

        achievement: document.getElementById("txtAchievement").value,
        skill: document.getElementById("txtSkill").value,
        workingPeriod: document.getElementById("txtWorkingPeriod").value,
        hourCount: parseInt(document.getElementById("txtHourCount").value)
    };

    const fileModel = require("fileModel")
    let datajson = fileModel.readFileSync("../../data/data.json", "utf-8")
    let data = JSON.parse(datajson)
    
    data.push(fileModel)
    datajson = JSON.stringify(data)

    fs.writeFileSync("../../data/data.json", datajson, "utf-8")
}