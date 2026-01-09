// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmzhUisS_zdOVayCmXZEo-GoEuq53dAtk",
  authDomain: "halilcorporation.firebaseapp.com",
  projectId: "halilcorporation",
  storageBucket: "halilcorporation.firebasestorage.app",
  messagingSenderId: "985191669956",
  appId: "1:985191669956:web:fd8454656e44640a2fe991",
  measurementId: "G-J9CWV3GHHD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.querySelector(".btn-login");
const registerBtn = document.querySelector(".btn-register");
const googleBtn = document.querySelector(".btn-google");

// LOGIN
loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if(email && password){
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Logged in:", user.email);
            // Redirect to main dashboard
            window.location.href = "main.html";
        })
        .catch((error) => {
            alert(error.message);
        });
    } else {
        alert("Enter email and password!");
    }
});

// REGISTER
registerBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if(email && password){
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Registered successfully!");
            window.location.href = "main.html";
        })
        .catch((error) => {
            alert(error.message);
        });
    } else {
        alert("Enter email and password!");
    }
});

// GOOGLE LOGIN
googleBtn.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then((result) => {
        const user = result.user;
        console.log("Google login:", user.email);
        window.location.href = "main.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});

// CHECK LOGIN STATE
auth.onAuthStateChanged((user) => {
    if(user){
        console.log("User is already logged in:", user.email);
        // Optional: redirect if already logged in
        // window.location.href = "main.html";
    }
});
