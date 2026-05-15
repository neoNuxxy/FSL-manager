function presence()
{
    let sign = false
    const hourDone = 8
}

function documentLoad()
{
    let signedAgreement = false
    let trainingProject = false
    let finalReport = false
}

function saveFile()
{
    const fs = require("fs");
    let data = fs.readFileSync("../../data/data.json", "utf-8");

    const fileModel =
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

    let dataAux = JSON.parse(fileModel);
    dataAux.push(fileModel);
    data = JSON.stringify(fileModel);

    fs.writeFileSync("../../data/data.json", data, "utf-8");
}