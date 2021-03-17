import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDblIy9XnAwpBgWChGluAvUcYgRjIDR4SE",
  authDomain: "ex3-produits-38508.firebaseapp.com",
  projectId: "ex3-produits-38508",
  storageBucket: "ex3-produits-38508.appspot.com",
  messagingSenderId: "296430460558",
  appId: "1:296430460558:web:14f5c69a010bc47d6c73df",
  measurementId: "G-9ML100D1RT"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
export const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
