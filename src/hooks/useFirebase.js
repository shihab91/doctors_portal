import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import { set } from "date-fns/esm";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // sign in with google pop up
  const singInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
        setError("")
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }
  // register user with  email and password
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const newUser = { email, disPlayName: name }
        setUser(newUser);
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
          setError(error.message)
        });
        history.replace("/");
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  // signOut user 
  const logOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  // sing in user with email and password 
  const LogInUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        const user = userCredential.user;
        setUser(user)
        setError("");
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({})
      }
      setIsLoading(false)
    })

    return () => unsubscribe;
  }, [])

  return {
    user,
    error,
    isLoading,
    setUser,
    registerUser,
    logOutUser,
    LogInUser,
    singInWithGoogle
  };
}
export default useFirebase;