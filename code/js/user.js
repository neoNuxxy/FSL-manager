function presence()
{
    let sign = ""
    let hourDone = 0

    try
    {
        sign = document.getElementById("txtSign").value
        hourDone = parseInt(document.getElementById("txtHourDone").value)
    }

    catch(err)
    {
        alert("The information inserted is invalid!")
        return
    }

    saveFile()
}

function documentLoad()
{
    let signedAgreement = ""
    let trainingProject = ""
    let finalReport = ""

    try
    {
        signedAgreement = document.getElementById("txtSignedAgreement").value
        trainingProject = document.getElementById("txtTrainingProject").value
        finalReport = document.getElementById("txtFinalReport").value
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
    const fileModel =
    {
        sign: document.getElementById("txtSign").value,
        hourDone: parseInt(document.getElementById("txtHourDone").value),

        signedAgreement: document.getElementById("txtSignedAgreement").value,
        trainingProject: document.getElementById("txtTrainingProject").value,
        finalReport: document.getElementById("txtFinalReport").value,
    }

    const jsonString = JSON.stringify(fileModel, null, 2)
    const blob = new Blob([jsonString], { type: "application/json" })
    const link = document.createElement("a")

    link.href = URL.createObjectURL(blob)
    link.download = "user_data.json"
    link.click()
}

function showPage(page, el)
{
    document.getElementById('page-dashboard').style.display = 'none'
    document.getElementById('page-documenti').style.display = 'none'
    document.getElementById('page-' + page).style.display = 'block'

    document.querySelectorAll('.sidebar-item').forEach(item => {
    item.classList.remove('active')
    })

    el.classList.add('active')
}