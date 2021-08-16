var firebaseConfig = {
    apiKey: "AIzaSyCJa4KX_sUke7c4_Ur-odqgOSxToYBi5n0",
    authDomain: "practice-activity-94.firebaseapp.com",
    projectId: "practice-activity-94",
    storageBucket: "practice-activity-94.appspot.com",
    messagingSenderId: "391378202645",
    appId: "1:391378202645:web:42a99dcc38e1872dafde1c",
    measurementId: "G-JQTKNT8W87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    var username = document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose:'adding user'
    });
}