import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

function useAuthListener() {
    const [user, setUser] = useState<any>(
        JSON.parse(localStorage.getItem('authUser') || '{}')
    ) 
    const { firebase } = useContext(FirebaseContext)
    
    useEffect(() =>{
        const listener = firebase!.auth().onAuthStateChanged((authUser) =>{
            if(authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser))
                setUser(authUser)
            }else{
                localStorage.removeItem('authUser')
                setUser(null)
            }
        })
        return () => listener()
    }, [])
   return { user }
}

export default useAuthListener;