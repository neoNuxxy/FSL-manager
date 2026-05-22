function presence()
{
    let sign = ""
    let hourDone = 0
}

function documentLoad()
{
    let signedAgreement = ""
    let trainingProject = ""
    let finalReport = ""
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