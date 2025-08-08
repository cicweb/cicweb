// Your Firebase config
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

// Sign in with Google
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log("Signed in as:", result.user.displayName);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Login failed: " + error.message);
    });
}
