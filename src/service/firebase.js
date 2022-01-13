import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD37aCaVyjp46309PO6VSU3saaZLSw_lcU",
    authDomain: "pokemon-game-d3378.firebaseapp.com",
    databaseURL: "https://pokemon-game-d3378-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-d3378",
    storageBucket: "pokemon-game-d3378.appspot.com",
    messagingSenderId: "1000786599274",
    appId: "1:1000786599274:web:705420ebdda559e5391913"
  };

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSocket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    })
  }

  offPokemonSocket = () => {
    this.database.ref('pokemons').off();
  }

  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data);
  }
}

export default Firebase;