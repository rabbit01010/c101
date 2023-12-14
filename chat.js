// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBikClTGAe6Mg_5Dsx2AdIAdcy1qddQhl8",
    authDomain: "c100-c4567.firebaseapp.com",
    databaseURL: "https://c100-c4567-default-rtdb.firebaseio.com",
    projectId: "c100-c4567",
    storageBucket: "c100-c4567.appspot.com",
    messagingSenderId: "889198451174",
    appId: "1:889198451174:web:5fc5c313a54bec34599e27"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



