
const firebaseConfig = {
  apiKey: "AIzaSyBExbceuED5PMbIG3jP8UllYqU7ns0xLjM",
  authDomain: "ziadlogin-88ae1.firebaseapp.com",
  projectId: "ziadlogin-88ae1",
  storageBucket: "ziadlogin-88ae1.appspot.com",
  messagingSenderId: "1081887375817",
  appId: "1:1081887375817:web:338147f18a18e244216818",
  measurementId: "G-GX1G5GSM56"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("userEmail").textContent = "Logged in as " + user.email;
    loadScores();
  } else {
    window.location.href = "index.html";
  }
});

function logout() {
  auth.signOut();
}

function updateScore(team, amount) {
  const ref = db.collection("scores").doc(team);
  ref.get().then(doc => {
    const current = doc.exists ? doc.data().points : 0;
    ref.set({ points: current + amount });
  });
}

function loadScores() {
  const ziadRef = db.collection("scores").doc("ziad");
  const hazemRef = db.collection("scores").doc("hazem");

  ziadRef.onSnapshot(doc => {
    document.getElementById("ziadScore").textContent = doc.exists ? doc.data().points : 0;
  });

  hazemRef.onSnapshot(doc => {
    document.getElementById("hazemScore").textContent = doc.exists ? doc.data().points : 0;
  });
}
