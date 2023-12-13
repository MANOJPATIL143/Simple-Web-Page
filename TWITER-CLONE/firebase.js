import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAXm3p7Edy0PfWNCsWErl8dhp3kmGZnYZo",
    authDomain: "twitter-clone-268d7.firebaseapp.com",
    projectId: "twitter-clone-268d7",
    storageBucket: "twitter-clone-268d7.appspot.com",
    messagingSenderId: "1012273907975",
    appId: "1:1012273907975:web:1598afdeba3fcfe329dda2"
    databaseURl:"https://twitter-clone-268d7-default-rtdb.firebaseio.com/"
  };


  const app = initializeApp(firebaseConfig);

  export default firebaseApp
   