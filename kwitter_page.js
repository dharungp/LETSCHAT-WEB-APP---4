user_name = localStorage.getItem("user_name");
document.getElementById("User").innerHTML = "Welcome "+user_name+" !";

user_name = localStorage.getItem("room_name");
document.getElementById("room").innerHTML = "Your are in  "+user_name+" !";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjx7f3Zgylu8o3I0Zh8gY8PVo1Y5uhh7o",
    authDomain: "twitter-da0d3.firebaseapp.com",
    databaseURL: "https://twitter-da0d3-default-rtdb.firebaseio.com",
    projectId: "twitter-da0d3",
    storageBucket: "twitter-da0d3.appspot.com",
    messagingSenderId: "383636186966",
    appId: "1:383636186966:web:e940de991977ff312b18f7"
  };

function logout() {
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  };

function back() {
    localStorage.removeItem("room_name");
    window.location.replace("chat_room.html");
};
function Send(){
    message = document.getElementById("text_input").value;
    firebaseConfig.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("input").innerHTML = "";
    
}