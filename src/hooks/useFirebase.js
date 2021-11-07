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
  updateProfile,
  getIdToken
} from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false)
  const [token, setToken] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // sign in with google pop up
  const singInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        setError("")
        saveUser(user.email, user.displayName, "PUT")
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
        //  save user to mongodb
        saveUser(email, name, 'POST')
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
          setError(error.message)
        });
        history.replace("/");
        window.location.reload();
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
        getIdToken(user)
          .then(idToken => {
            setToken(idToken);
          })
      }
      else {
        setUser({})
      }
      setIsLoading(false)
    })

    return () => unsubscribe;
  }, [])
  //function of save user to mongodb
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  // filter a user if he/she is a admin
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user?.email])
  return {
    user,
    error,
    isLoading,
    admin,
    token,
    setUser,
    registerUser,
    logOutUser,
    LogInUser,
    singInWithGoogle
  };
}
export default useFirebase;