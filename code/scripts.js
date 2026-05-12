/*
Proposta L – Gestore di stage e PCTO
Si vuole realizzare un sistema web per la gestione completa dei percorsi PCTO (Percorsi per le Competenze 
Trasversali e l'Orientamento) degli studenti, dalla ricerca dell'azienda ospitante fino alla rendicontazione 
finale delle ore svolte.
Il sistema dovrà coinvolgere tre tipologie di utenti: il coordinatore scolastico PCTO e lo studente.
Il coordinatore gestisce l'intero processo, il tutor aziendale valuta lo studente e conferma le ore, lo studente 
consulta la propria situazione e carica la documentazione richiesta.
Le funzionalità principali comprendono:

anagrafica delle aziende convenzionate con settore, sede, numero massimo di stagisti accettati contemporaneamente,
referente aziendale e storico delle convenzioni;
creazione del progetto formativo individuale per ogni studente con obiettivi, competenze attese, periodo e numero 
di ore previste;
registro presenze digitale: lo studente registra giornalmente le ore svolte,
caricamento documenti: convenzione firmata, progetto formativo, relazione finale dello studente;
monitoraggio in tempo reale del monte ore per ogni studente con indicazione delle ore mancanti al raggiungimento 
del minimo richiesto;
report per il coordinatore con riepilogo per classe dello stato di avanzamento di tutti gli studenti;
alerting automatico per studenti in ritardo rispetto al calendario previsto.

Il sistema dovrà archiviare i dati per anno scolastico mantenendo lo storico consultabile negli anni successivi,
in vista dell'integrazione con una base di dati relazionale al quinto anno.
*/

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

function companiesInfo()
{
    let sector = ""
    let location = ""
    let maxStudents = 0
    let referent = ""
    let history = ""
}

function courseInfo()
{
    let achievement = ""
    let skill = ""
    let workingPeriod = ""
    const hourCountTotal = 150
    let hourCount = 0
}

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