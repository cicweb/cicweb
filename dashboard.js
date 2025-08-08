// Firebase config (again, needed here too)
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

// Check if user is logged in
auth.onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});

// Realtime score updates
function listenForScores() {
  db.collection("scores").doc("ziad").onSnapshot((doc) => {
    document.getElementById("ziadScore").textContent = doc.exists ? doc.data().score : 0;
  });

  db.collection("scores").doc("hazem").onSnapshot((doc) => {
    document.getElementById("hazemScore").textContent = doc.exists ? doc.data().score : 0;
  });
}

// Update score
function updateScore(team, change) {
  const ref = db.collection("scores").doc(team);
  ref.get().then((doc) => {
    const current = doc.exists ? doc.data().score : 0;
    ref.set({ score: current + change });
  });
}

function signOut() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// Start listeners
listenForScores();
