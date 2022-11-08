 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAiR9tNPI-vGd7eQujog_p-4TxDCYoCMzw",
  authDomain: "school-attendance-f4f45.firebaseapp.com",
  databaseURL: "https://school-attendance-f4f45-default-rtdb.firebaseio.com",
  projectId: "school-attendance-f4f45",
  storageBucket: "school-attendance-f4f45.appspot.com",
  messagingSenderId: "833345441067",
  appId: "1:833345441067:web:4281dd2f1c22b0b06c896e"
};
let app=firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  