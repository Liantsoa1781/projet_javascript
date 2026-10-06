let bouton_pierre = document.getElementById("pierre");
let bouton_feuille = document.getElementById("feuille");
let bouton_ciseaux = document.getElementById("ciseaux");

let choix_possible = ["pierre", "feuille", "ciseaux"];


let choix_ordi = document.getElementById("choix_ordinateur");
let resultat = document.getElementById("resultat");


let choix_utilisateur;
let choix_ordinateur;
let nb_aleatoire;

bouton_pierre.addEventListener("click", function(){
    choix_utilisateur = choix_possible[0];

    nb_aleatoire = Math.round(Math.random()*2);
    choix_ordinateur = choix_possible[nb_aleatoire];
    choix_ordi.value = choix_ordinateur;
    // console.log("il a choisi " + choix_utilisateur)

    if(choix_ordinateur == choix_utilisateur){
        resultat.innerText = "Egalité!";
    }else if(choix_ordinateur == choix_possible[1]){
        resultat.innerText = "L'ordinateur a gagné!";
    }else{
        resultat.innerText = "Vous avez gagné!";
    }

});

bouton_feuille.addEventListener("click", function(){
    choix_utilisateur = choix_possible[1];
    
    nb_aleatoire = Math.round(Math.random()*2);
    choix_ordinateur = choix_possible[nb_aleatoire];
    choix_ordi.value = choix_ordinateur;
    // console.log("il a choisi " + choix_utilisateur)

    if(choix_ordinateur == choix_utilisateur){
        resultat.innerText = "Egalité!";
    }else if(choix_ordinateur == choix_possible[2]){
        resultat.innerText = "L'ordinateur a gagné!";
    }else{
        resultat.innerText = "Vous avez gagné!";
    }

});

bouton_ciseaux.addEventListener("click", function(){
    choix_utilisateur = choix_possible[2];

    nb_aleatoire = Math.round(Math.random()*2);
    choix_ordinateur = choix_possible[nb_aleatoire];
    choix_ordi.value = choix_ordinateur;
    // console.log("il a choisi " + choix_utilisateur)

    if(choix_ordinateur == choix_utilisateur){
        resultat.innerText = "Egalité!";
    }else if(choix_ordinateur == choix_possible[0]){
        resultat.innerText = "L'ordinateur a gagné!";
    }else{
        resultat.innerText = "Vous avez gagné!";
    }

});



