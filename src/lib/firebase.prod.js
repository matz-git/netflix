import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// seeding the database
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDuvPOAhA8Gr1Y5prl_4DU1wdfJWr9KqsY",
    authDomain: "netflix-480d4.firebaseapp.com",
    projectId: "netflix-480d4",
    storageBucket: "netflix-480d4.appspot.com",
    messagingSenderId: "756825075133",
    appId: "1:756825075133:web:f43cad528fdf95273876d4"
};

const firebase = Firebase.initializeApp(config);
// seeding the database
// seedDatabase(firebase);

export { firebase };
