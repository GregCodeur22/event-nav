// Créer un événément au scroll
const navigation = document.getElementById("navbar");
let current;

window.addEventListener("scroll", () => {
  if (current > window.scrollY) {
    navigation.style.top = "0";
  } else {
    navigation.style.top = "-60px";
  }
  current = window.scrollY;
});

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
