import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { userRef } from 'react';

const config = {
    apiKey: "AIzaSyAV7_9hp6jvHCkCxf6aaYd3vevxr4ofQ2E",
    authDomain: "crwn-db-ba3d2.firebaseapp.com",
    projectId: "crwn-db-ba3d2",
    storageBucket: "crwn-db-ba3d2.appspot.com",
    messagingSenderId: "1061824329751",
    appId: "1:1061824329751:web:d1dcc4da208e64ab9e0452",
    measurementId: "G-8WN7JM8L5V"
  };

  firebase.initializeApp(config);

  
  export const createUserProfileDocument =async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef =firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    
    return userRef;
  }
  
  
  export const addCollectionAndDocuments = async (collectionKey , objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef,obj);
    });
  return await batch.commit();
  }




  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc=>{
      const {title,items} = doc.data();

      return{
        routeName: encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    });
    return transformedCollection.reduce((accumulator , collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator
    },{})
  }
  



  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;