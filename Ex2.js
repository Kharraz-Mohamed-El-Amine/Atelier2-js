// 1. Creation des objets 
function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
    
    this.etudier = function() {
        console.log(this.prenom + " " + this.nom + " est en train d'étudier.");
    };
}

function Professeur(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;
    
    this.enseigner = function() {
        console.log("Le professeur " + this.nom + " est en train d'enseigner.");
    };
}

let etudiants = [
    new Etudiant("Dupont", "Marie", 20, "CNE123"),
    new Etudiant("Ahmed", "Ali", 22, "CNE456"),
    new Etudiant("Dupont", "Jean", 19, "CNE789"),
    new Etudiant("Benani", "Sara", 21, "CNE321")
];

// 3. Tri 
etudiants.sort(function(a, b) {
    if (a.nom < b.nom) return -1;
    if (a.nom > b.nom) return 1;
    
    if (a.prenom < b.prenom) return -1;
    if (a.prenom > b.prenom) return 1;
    
    return a.age - b.age;
});

console.log("Liste des étudiants triés :");
etudiants.forEach(function(etudiant) {
    console.log(etudiant.nom + " " + etudiant.prenom + ", " + etudiant.age + " ans");
});

etudiants[0].etudier();

let prof = new Professeur("Alaoui", 45, "CIN123");
prof.enseigner();