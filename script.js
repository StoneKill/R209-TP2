const btnP = document.getElementById('P').addEventListener('click', () => { PFC("pierre") })
const btnF = document.getElementById('F').addEventListener('click', () => { PFC("feuille") })
const btnC = document.getElementById('C').addEventListener('click', () => { PFC("ciseaux") })

function PFC(selectionJoueur) {
    const choix = ['pierre', 'feuille', 'ciseaux'];
    let selectionRobot = choix[(Math.floor(Math.random() * choix.length))];

    if (selectionJoueur === selectionRobot) {
        result = "égalite";
    } else if (
        (selectionJoueur === "pierre" && selectionRobot === "ciseaux") ||
        (selectionJoueur === "feuille" && selectionRobot === "pierre") ||
        (selectionJoueur === "ciseaux" && selectionRobot === "feuille")
    ) {
        result = "gagné !";
    } else {
        result = "perdu :(";
    }

    document.querySelector('#result').innerHTML = `
     Tu as choisis ${selectionJoueur}<br>
     Le robot a choisi ${selectionRobot}<br>
     Donc tu as ${result}
     `
    return result
}