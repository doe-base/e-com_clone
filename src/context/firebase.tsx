import { createContext } from "react";
import { Firestore } from "firebase/firestore";
import Firebase from 'firebase/compat/app';


interface ContextType {
    firebase: Firebase.app.App | null
    db: Firestore | null
}
export const FirebaseContext = createContext<ContextType>({firebase: null, db: null});
