import { useEffect, useState } from 'react';

import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import {
  baseState,
  currentUser,
  DbInterface,
  UserType,
} from 'modules/atoms/Index';
import 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  Unsubscribe,
} from 'firebase/auth';
import { auth } from '../../firebase';

export const useLogin: Function = () => {
  const setUser: SetterOrUpdater<UserType> = useSetRecoilState(currentUser);
  const [error, setError] = useState<string>('');
  const setDatabase: SetterOrUpdater<DbInterface[]> =
    useSetRecoilState(baseState);

  useEffect(() => {
    const unsubscribe: Unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);
  const provider: GoogleAuthProvider = new GoogleAuthProvider();

  const signInWithGoogle: Function = async (rememberMe: boolean) => {
    if (rememberMe) {
      setPersistence(auth, browserLocalPersistence).then(() => {
        signInWithPopup(auth, provider)
          .then(() => {
            setUser(true);
          })
          .catch((error: { message: string }) => {
            const errorMessage: string = error.message;
            setError(errorMessage);
          });
      });
    } else {
      setPersistence(auth, browserSessionPersistence).then(() => {
        signInWithPopup(auth, provider)
          .then(() => {
            setUser(true);
          })
          .catch((error: { message: string }) => {
            const errorMessage: string = error.message;
            setError(errorMessage);
          });
      });
    }
  };

  const passwordResetLink: Function = async (userEmail: string) => {
    sendPasswordResetEmail(auth, userEmail).catch(
      (error: { message: string }) => {
        const errorMessage: string = error.message;
        setError(errorMessage);
      }
    );
  };
  const signUp: Function = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    if (rememberMe) {
      setPersistence(auth, browserLocalPersistence).then(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            setUser(true);
          })
          .catch((error: { message: string }) => {
            const errorMessage: string = error.message;
            setError(errorMessage);
          });
      });
    } else {
      setPersistence(auth, browserSessionPersistence).then(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            setUser(true);
          })
          .catch((error: { message: string }) => {
            const errorMessage: string = error.message;
            setError(errorMessage);
          });
      });
    }
  };
  const logIn: Function = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    if (rememberMe) {
      setPersistence(auth, browserLocalPersistence).then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            setUser(true);
          })
          .catch((error: { message: string }) => {
            const errorMessage: string = error.message;
            setError(errorMessage);
          });
      });
    } else {
      setPersistence(auth, browserSessionPersistence).then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            setUser(true);
          })
          .catch((error: { message: string }) => {
            const errorMessage: string = error.message;
            setError(errorMessage);
          });
      });
    }
  };
  const logOut: Function = async () => {
    signOut(auth)
      .then(() => {
        setDatabase([]);
        setUser(false);
      })
      .catch((error: { message: string }) => {
        const errorMessage: string = error.message;
        setError(errorMessage);
      });
  };
  return { signUp, logIn, logOut, error, signInWithGoogle, passwordResetLink };
};
