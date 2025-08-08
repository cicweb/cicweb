
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

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      console.error(error.message);
    });
}

auth.onAuthStateChanged(user => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});
