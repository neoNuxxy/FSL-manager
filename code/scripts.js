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
    let nameAdmin = "teacher"
    let nameUser = "student"

    let passAdmin = "admin"
    let passUser = "user"

    try
    {
        if(document.getElementById("txtInputUser").value == nameAdmin && document.getElementById("txtInputPass").value == passAdmin)
        {
            admin = true
            alert("Welcome teacher")
        }

        else if(document.getElementById("txtInputUser").value == nameUser && document.getElementById("txtInputPass").value == passUser)
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
}
    

function companiesInfo()
{
    let sector = ""
    let location = ""
    let maxStudents = 0
    let referent = ""
    let history = ""
}

