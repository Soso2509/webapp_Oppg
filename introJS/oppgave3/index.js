// TODO: Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
let wrongCount = 0;
let wordPosition = 0;
let wordCounter = 0;

// TODO: Lag en liste med ulike ord
const words = ['one piece', 'luffy', 'zoro', 'nami', 'usopp', 'sanji', 'vivi', 'chopper', 'robin', 'franky','brook', 'jimbei'];

// TODO: Hent ut HTML #ider og knappen
const word = document.getElementById("word");
const wrongs = document.getElementById("wrongs");
const letter = document.getElementById("letter");
const btn = document.querySelector("button");

// TODO: Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
const fixWord = () => {
    word.innerHTML = words[wordCounter] || "Ingen ord igjen";
  };

// TODO: Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene
const changeWord = () => {
    wordPosition = 0;
    wordCounter++;
    fixWord();
  };

// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkPosition = (word, position,letter) => {
    return word[position] === letter;
  };

// TODO: Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordCorrect = (word, position) => {
    return position === word.length;
  };

// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
const keyUp = ({ key }) => {
    const word = words[wordCounter];
    if(checkPosition(word, wordPosition, key)) {
      wordPosition++
      if(wordCorrect(word,wordPosition)) {
        changeWord();
      }
    } else {
      wrongCount++
    }
    update(key);
  };

// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet
const update = (key) => {
    if(words[wordCounter]) {
        wrongs.innerHTML = wrongCount;
        letter.innerHTML = key;
        word.innerHTML = `<span class="green"> ${words[wordCounter].slice(
        0,
        wordPosition
        )} </span> ${words[wordCounter].slice(wordPosition)}`;
    }
    };

// TODO: Lytt til keyup på window
window.addEventListener('keyup', keyUp);

// TODO: Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven
btn.addEventListener("click", () => {
    //Fjerne at knappen blir disabled
      //btn.disabled = true;
    //legger dette inn slik at knappen blir noe som en reset knapp
      wordCounter = 0;
      wrongCount = 0;

    fixWord();
  });