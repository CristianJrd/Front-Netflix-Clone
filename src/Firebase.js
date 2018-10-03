import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAA1rVdoKCrOFwadZkQuUDwqyf4DCDEpYY",
    authDomain: "cc23-project.firebaseapp.com",
    databaseURL: "https://cc23-project.firebaseio.com",
    projectId: "cc23-project",
    storageBucket: "cc23-project.appspot.com",
    messagingSenderId: "175168951854"
  }

  export default firebase.initializeApp(config)