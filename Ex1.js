// 1. Classe Voiture
class Voiture {
    constructor(modele, marque, annee, type, carburant) {
      this.modele = modele;
      this.marque = marque;
      this.annee = annee;
      this.type = type;
      this.carburant = carburant;
    }
  }

  // 2.liste de voitures
  let listeVoitures = [
    new Voiture("Fiesta", "Ford", 2019, "Citadine", "Essence"),
    new Voiture("Focus", "Ford", 2020, "Berline", "Diesel"),
    new Voiture("Tucson", "Hyundai", 2021, "SUV", "Diesel"),
    new Voiture("i30", "Hyundai", 2018, "Berline", "Essence")
  ];
  
  // 3.heritage 
  class Hyundai extends Voiture {
    constructor(modele, annee, type, carburant, serie, hybride) {
      super(modele, "Hyundai", annee, type, carburant);
      this.serie = serie;
      this.hybride = hybride;
    }
    
    alarmer() {
      return `L'alarme de la Hyundai ${this.modele} série ${this.serie} est activée !`;
    }
  }
  
  class Ford extends Voiture {
    constructor(modele, annee, type, carburant, options) {
      super(modele, "Ford", annee, type, carburant);
      this.options = options || [];
    }
  }
  
  // Creation d'objets 
  let hyundaiTucson = new Hyundai("Tucson", 2021, "SUV", "Diesel", "Premium", true);
  let hyundaiKona = new Hyundai("Kona", 2020, "SUV", "Essence", "Trend", false);
  let fordFiesta = new Ford("Fiesta", 2019, "Citadine", "Essence", ["GPS", "Bluetooth"]);
  let fordMustang = new Ford("Mustang", 2023, "Sportive", "Essence", ["Cuir", "Toit ouvrant"]);
  
  // Ajout 
  listeVoitures.push(hyundaiTucson, hyundaiKona, fordFiesta, fordMustang);
  
  // 4.Tri des voitures 
  listeVoitures.sort((a, b) => a.annee - b.annee);
  
  // Affichage 
  console.log("Liste des voitures triées par année (ordre croissant):");
  listeVoitures.forEach(voiture => {
    let details = `${voiture.marque} ${voiture.modele} (${voiture.annee}) - ${voiture.type}, ${voiture.carburant}`;
    
    // Ajout des details selon le type de voiture
    if (voiture instanceof Hyundai) {
      details += `, Série: ${voiture.serie}, Hybride: ${voiture.hybride ? "Oui" : "Non"}`;
    } else if (voiture instanceof Ford) {
      details += `, Options: ${voiture.options.join(", ")}`;
    }
    
    console.log(details);
  });
  
  // Test de la méthode alarmer pour une voiture Hyundai
  console.log(hyundaiTucson.alarmer());