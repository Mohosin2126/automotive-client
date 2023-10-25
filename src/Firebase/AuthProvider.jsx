import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    
   
    
    
    const [user, setUser] = useState(null); 
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)     
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    

    const googleSignIn=(value)=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect (()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
          
               setUser(currentUser)
               setLoading(false)
           })
           return ()=>{
               unSubscribe();
           }
        },[])
        const logOut=()=>{
            setLoading(true)
            return signOut(auth)
        }

    const authInfo = {
        user,
       createUser,
       signInUser,
       googleSignIn,
       loading,
       logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
