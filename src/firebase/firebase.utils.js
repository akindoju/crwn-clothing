import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBeYe5pwJAuwpNXpW45a5dPPojPDqpSKsI',
  authDomain: 'crwn-db-49ac6.firebaseapp.com',
  databaseURL: 'https://crwn-db-49ac6.firebaseio.com',
  projectId: 'crwn-db-49ac6',
  storageBucket: 'crwn-db-49ac6.appspot.com',
  messagingSenderId: '841134974864',
  appId: '1:841134974864:web:8696515c7ce417dc957515',
  measurementId: 'G-764XPY488J',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating  user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
