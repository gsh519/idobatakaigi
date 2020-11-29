import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB_xMh9M46zyI2wv908chu02FneKd5bM_8",
  authDomain: "chatbot-56c1e.firebaseapp.com",
  databaseURL: "https://chatbot-56c1e.firebaseio.com",
  projectId: "chatbot-56c1e",
  storageBucket: "chatbot-56c1e.appspot.com",
  messagingSenderId: "809493037035",
  appId: "1:809493037035:web:3d333c50e5e4f68fc023ae"
};

firebase.initializeApp(firebaseConfig);
const database =  firebase.database();
const messageRef = database.ref('messages')

export const pushMessage = ({name, text}) => {
  messageRef.push({name, text});
}