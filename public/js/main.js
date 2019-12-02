class Boss {
    constructor(nom, pV, pointAtt) {
        this.nom = nom;
        this.pV = pV;
        this.pointAtt = pointAtt;
    }
    poser(question, sol) {
        if (this.pV < (this.pV * 20 / 100)) {
            let essai = 3;

            let rep = prompt(question);
            while (essai > 0 && !rep.toLowerCase().includes(sol)) {
                essai--;
                if (essai > 0) {
                    alert("Faux! Recommencez!");
                    rep =prompt(question);
                }
            }
            if (rep.includes(sol)) {
                alert("Bravo ! Vous avez vaincu le boss !");
                return true
            } else {
                alert("Dommage ! Vous avez échoué.");
                return true
            }
        }
        return false;
    }
}
let sauron = new Boss("Sauron", 500, 300);
let chronos = new Boss("Chronos", 500, 300);
let lilith = new Boss("Lilith", 500, 300);

let guerrier = {
    nom: '',
    pV: 0,
    pointAtt: 0,
    pointRage: 0,
    attaque() {
        this.pointAtt *= 1.4;
        this.pV *= 0.75;
    },
    defense() {
        this.pV *= 2.5;
        this.pointAtt *= 0.5;
    },
    rage() {
        rage++;
        if (rage == 4) {
            alert(`${this.nom} est entré en rage !!!`);
            this.pointAtt *= 1.5;
        }
        if (rage < 4) {
            this.pointAtt /= 1.5;
            rage %= 4;
        }
    }
}
let nbMana = [7, 9, 11];
let r = Math.floor(Math.random() * nbMana.length);
nbMana = nbMana[r];
let mage = {
    nom: '',
    pV: 0,
    pointAtt: 0,
    mana: nbMana,
    attaque() {
        this.pointAtt *= 1.4;
        this.pV *= 0.75;
    },
    defense() {
        this.pV *= 2.5;
        this.pointAtt *= 0.5;
    },
    recharge() {
        if (this.mana < 0) {
            this.mana = 7;
            return false
        } else if (this.mana <= 1) {
            this.mana += 7;
            return false;
        }
    }
}

let nbFleches = [7, 8, 9, 10, 11];
r = Math.floor(Math.random() * nbFleches.length);
nbFleches = nbFleches[r];
let archer = {
    nom: '',
    pV: 0,
    pointAtt: 0,
    fleche: nbFleches,
    attaque() {
        this.pointAtt *= 1.4;
        this.pV *= 0.75;
    },
    defense() {
        this.pV *= 2.5;
        this.pointAtt *= 0.5;
    },
    recharge() {
        if (this.fleche < 0) {
            this.fleche = 6;
        } else if (this.fleche == 1) {
            this.fleche += 6;
        }
    }
}

let listBoss = [sauron, chronos, lilith];
let question = ["Que donne Math.round(Math.abs(-50.555556)) ?", "Quel est le plat préféré de la coding 10 ?", "Quel est la marque de Pc la plus bruyante ?"];
let sol = ["51", "sushi", "hp"]
r = Math.floor(Math.random() * listBoss.length);
let boss = listBoss[r];

alert(`${boss.nom} est le Boss`);
// do {
//     guerrier.nom = prompt("Veuillez nommer le guerrier.");
//     mage.nom = prompt("Veuillez nommer le mage.");
//     archer.nom = prompt("Veuillez nommer l'archer.");
// } while (guerrier.nom.length == 0, mage.nom.length == 0, archer.nom.length == 0)

while (guerrier.nom.length == 0, mage.nom.length == 0, archer.nom.length == 0) {
    guerrier.nom = prompt("Veuillez nommer le guerrier.");
    mage.nom = prompt("Veuillez nommer le mage.");
    archer.nom = prompt("Veuillez nommer l'archer.");
}

let totalPv = 300;
let totalAtt = 300;

alert("Vous avez 300 points en Pv et 300 en Attaque. Veuillez les distribuer entre vos héros.");
alert(`${guerrier.nom} le guerrier`);

if (totalPv > 0) {
    guerrier.pV = prompt(`Combien de points sur ${totalPv} voulez-vous lui assigner en PV ? `);
    totalPv -= guerrier.pV;
}
if (totalAtt > 0) {
    guerrier.pointAtt = prompt(`Combien de points sur ${totalAtt} voulez-vous lui assigner en attaque?`);
    totalAtt -= guerrier.pointAtt;
}
alert(`${guerrier.nom} le guerrier  PV : ${guerrier.pV}  PA : ${guerrier.pointAtt}`);
alert(`${mage.nom} le mage`);

if (totalPv > 0) {
    mage.pV = prompt(`Combien de points sur ${totalPv} voulez-vous lui assigner en PV ? `);
    totalPv -= mage.pV;
}
if (totalAtt > 0) {
    mage.pointAtt = prompt(`Combien de points sur ${totalAtt} voulez-vous lui assigner en attaque?`);
    totalAtt -= mage.pointAtt;
}
alert(`${mage.nom} le mage  PV : ${mage.pV}  PA : ${mage.pointAtt} Mana : ${mage.mana}`);
alert(`${archer.nom} le archer`);
if (totalPv > 0) {
    archer.pV = prompt(`Combien de points sur ${totalPv} voulez-vous lui assigner en PV ? `);
    totalPv -= archer.pV;
}
if (totalAtt > 0) {
    archer.pointAtt = prompt(`Combien de points sur ${totalAtt}. voulez-vous lui assigner en attaque?`);
    totalAtt -= archer.pointAtt;
}
alert(`${archer.nom} l'archer  PV : ${archer.pV}  PA : ${archer.pointAtt} nbFlèches : ${archer.fleche}`);

alert("Que la bataille commence !");

let tour = 0;
let listHero = [guerrier, mage, archer];
let posture = 'normale';
listHero.forEach(elem => {
    posture = prompt(`Veuillez choisir un posture parmi celle-ci pour ${elem.nom}: normale/attaque/defense`);
    if (posture.toLowerCase() == 'attaque') {
        elem.attaque();
    } else if (posture.toLowerCase() == 'defense') {
        elem.defense();
    }
});
do {
    alert("Tour n°" + tour);
    alert(`${boss.nom} a ${boss.pV} points de vie`);
    alert("Tour du Joueur");


    if (estVie(guerrier)) {
        alert(`${guerrier.nom} le guerrier attaque de ${guerrier.pointAtt} points`);
        boss.pV -= guerrier.pointAtt;
        alert(`${boss.nom} a ${boss.pV} points de vie`);
    }
    if (mage.mana > 2) {
        alert(`${mage.nom} le mage attaque de ${mage.pointAtt} points`);
        mage.mana -= 2;
        boss.pV -= mage.pointAtt;
    } else {
        alert(`${mage.nom} le mage n'a pas assez de point de mana`)
    }

    alert(`${boss.nom} a ${boss.pV} points de vie`);
    if (archer.fleche > 2) {
        alert(`${archer.nom} l'archer attaque de ${archer.pointAtt} points`);
        archer.fleche -= 2;
        boss.pV -= archer.pointAtt;
    } else {
        alert(`${archer.nom} l'archer n'a pas assez de fleche`)
    }

    alert(`${boss.nom} a ${boss.pV} points de vie`);
    r = Math.floor(Math.random() * listHero.length);
    console.log(`${boss.nom} attaque ${listHero[r].nom} de ${boss.pointAtt}`);
    listHero[r].pV -= boss.pointAtt;
    console.log(`${listHero[r].nom} a ${listHero[r].pV} points de vie.`);

    tour++;
} while (boss.poser(question[r].toLowerCase(), sol[r].toLowerCase()) == false && listHero.length > 0);
if (listHero.length == 0) {
    alert('Tous les héros sont Ko. Vous avez échouez');
}

function estVie(hero) {
    if (hero.pV > 0) {
        return true;
    } else {
        if (listHero.includes(hero)) {
            listHero.splice(listHero.indexOf(hero), 1);
            console.log(`${hero.nom} est mort!`);
        }
        return false;
    }
}