import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { baseState, currentUser } from "modules/atoms/Index";
import 'firebase/auth'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,


} from "firebase/auth";
import { auth } from "../../firebase";

export const useLogin = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [user, setUser] = useRecoilState(currentUser)
    const [error, setError] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [database, setDatabase] = useRecoilState(baseState);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {

                setUser({
                    state: true, user: user.email
                })
            } else {
                setUser({ state: false, user: "" })
            }
        });
        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = async (rememberMe: boolean) => {
        if (rememberMe) {
            setPersistence(auth, browserLocalPersistence).then(() => {
                signInWithPopup(auth, provider)
                    .then((userCredential) => {

                        setUser({ state: true, user: userCredential.user.email })

                    })
                    .catch((error) => {

                        const errorMessage = error.message;
                        setError(errorMessage)

                    })
            })
        } else {
            setPersistence(auth, browserSessionPersistence).then(() => {
                signInWithPopup(auth, provider)
                    .then((userCredential) => {

                        setUser({ state: true, user: userCredential.user.email })

                    })
                    .catch((error) => {

                        const errorMessage = error.message;
                        setError(errorMessage)

                    })
            })

        }
    }

    const passwordResetLink = async (userEmail: string) => {
        sendPasswordResetEmail(auth, userEmail)
            .then(res => { })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)

            });

    }
    const signUp = async (email: string, password: string, rememberMe: boolean) => {
        if (rememberMe) {
            setPersistence(auth, browserLocalPersistence).then(() => {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {

                        setUser({ state: true, user: userCredential.user.email })

                    })
                    .catch((error) => {

                        const errorMessage = error.message;
                        setError(errorMessage)

                    })
            })
        } else {
            setPersistence(auth, browserSessionPersistence).then(() => {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {

                        setUser({ state: true, user: userCredential.user.email })

                    })
                    .catch((error) => {

                        const errorMessage = error.message;
                        setError(errorMessage)

                    })
            })
        }

    }
    const logIn = async (email: string, password: string, rememberMe: boolean) => {
        if (rememberMe) {
            setPersistence(auth, browserLocalPersistence).then(() => {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {

                        setUser({ state: true, user: userCredential.user.email })

                    })
                    .catch((error) => {

                        const errorMessage = error.message;
                        setError(errorMessage)

                    })
            })
        } else {
            setPersistence(auth, browserSessionPersistence).then(() => {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {

                        setUser({ state: true, user: userCredential.user.email })

                    })
                    .catch((error) => {

                        const errorMessage = error.message;
                        setError(errorMessage)

                    })
            })
        }



    }
    const logOut = async () => {
        setDatabase([]);
        setUser({ state: false, user: null })
        signOut(auth).then(() => {



        })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)


            });


    }
    return { signUp, logIn, logOut, error, signInWithGoogle, passwordResetLink }
};

