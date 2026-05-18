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
    };

    // converte in JSON
    const jsonString = JSON.stringify(fileModel, null, 2);

    // crea il file
    const blob = new Blob([jsonString], { type: "application/json" });

    // crea link download
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "data.json";

    // avvia download
    link.click();
}