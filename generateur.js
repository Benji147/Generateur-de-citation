const sujetVehicules = new Array("Les voitures", "Les Camions", "Les motos","Les quads","Les tracteurs");
const verbeVehicules = new Array("polluent", "sentent", "roulent","éteignent","écrasent");
const complementVehicules = new Array("les pieds", "les mollets ", "les fleurs","les feux","la terre");
const sujetPersonnes = new Array("Les hommes", "Les enfants", "Les chiens","Les pompiers","Les femmes");
const verbePersonnes = new Array("allument", "sentent", "mordent","éteignent","écrasent");
const complementPersonnes = new Array("les mains", "les mollets", "les fleurs","les feux","les genoux");


class Citation {
  constructor(sujet, verbe, complement) {
    this.sujet = sujet;
    this.verbe = verbe;
    this.complement = complement;
  }

  afficher() {
    return `${this.sujet} ${this.verbe} ${this.complement}`;
  }

  
}

class Interaction {
    constructor() {
        console.log("Voici un générateur de citations aléatoires");
        console.log("");
        console.log("Menu :");
        console.log("");
        console.log("1 : Générer une ou des citation(s)");
        console.log("2 : Quitter");
    }
    choixCitations() {
        let choixMenu;
        let sortie;
        while (choixMenu !== "2") {
          choixMenu = prompt("Quel est votre choix ?");
          switch (choixMenu) {
            case "1" :
                console.log("");
                console.log("Thèmes disponibles :");
                console.log("");
                console.log("1 : Les véhicules");
                console.log("2 : Les personnes");
                console.log("3 : Sortir");
                let choixMenu2 = prompt("Sur quel thème voulez-vous les citations ?");
                switch (choixMenu2) {
                    case "1" :
                        this.genereCitations( sujetVehicules, verbeVehicules, complementVehicules);
                        return console.log("Merci et à bientôt!");
                        break;
                    case "2" :
                        this.genereCitations(sujetPersonnes, verbePersonnes, complementPersonnes);
                        return console.log("Merci et à bientôt!");
                        break;
                    case "3" :
                        return console.log("Merci et à bientôt!");
                        break;
                }
                break;
            case "2" :
                console.log("Merci et à bientôt!");
                break;
            default :
                console.log("Vous avez fait une erreur de saisie!! Recommencez svp.");
          }     
        }
    }
    
    genereCitations(sujet, verbe, complement) {
        let sortie;
        do {  
            let nbreCitation;
            nbreCitation = prompt("Combien de citation voulez-vous générer ?");
            if (nbreCitation >= 1 && nbreCitation <= 5) {
                console.log("");
                console.log("Citation(s) du jour :");
                console.log("");
                for (let i = 0; i < nbreCitation; i++) {
                    const result = new Citation(this.elementAleatoire(sujet), this.elementAleatoire(verbe), this.elementAleatoire(complement));
                    console.log(result.afficher());
                }
            }
            else {console.log("Vous devez choisir un nombre de citation entre 1 et 5");}
            sortie = confirm("Voulez-vous créer de nouvelle citation ?");
        } while (sortie === true);                   
    }
    
    entierAleatoire(maximum) {
        return Math.floor(Math.random()*maximum);
    }
    
    elementAleatoire(array) {
        return array[this.entierAleatoire(array.length)];
    }

}


let interaction = new Interaction();
interaction.choixCitations();