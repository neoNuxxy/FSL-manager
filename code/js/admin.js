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

    catch(err)
    {
        alert("The information inserted is invalid!")
        return
    }

    saveFile()
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
    
    catch(err)
    {
        alert("The information inserted is invalid!")
        return
    }

    saveFile()
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
    
    // converte in JSON
    const jsonString = JSON.stringify(fileModel, null, 2);

    // crea il file
    const blob = new Blob([jsonString], { type: "application/json" });

    // crea link download
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "teacher_data.json";

    // avvia download
    link.click();
}

function showPage(page, el) {
  document.getElementById('page-stage').style.display = 'none';
  document.getElementById('page-skills').style.display = 'none';
  document.getElementById('page-' + page).style.display = 'block';

  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.classList.remove('active');
  });
  el.classList.add('active');
}