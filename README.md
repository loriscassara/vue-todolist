DESCRIZIONE:
Creare una web application che mostri una lista di cose da fare.
Ogni attività sarà rappresentata da un oggetto con due proprietà:
- text: una stringa che indica il testo del ToDo
- done: un booleano (true/false) che indica se il ToDo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni ToDo, visualizzandone il testo.
Se la proprietà "done" è uguale a true, visualizzare il testo del ToDo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item una "X": cliccando su di essa, il ToDo viene rimosso dalla lista.
MILESTONE 3

Predisporre un input testuale e un pulsante "aggiungi". Cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo oggetto ToDo, che quindi viene aggiunto alla lista dei ToDo.
BONUS:
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il ToDo alla lista (v. documentazione)
Cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)