import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { setUserInfo, clearUserInfo } from "../redux/reducer";
import { addUser, getUser } from "./firestore";
import { handleImageUpload } from "./imageUtils";

// Функція для реєстрації користувача
export const registerDB = async (
  { email, password, login, fileName, imageFile, dirName },
  dispatch
) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credentials.user;

    let imageUrl;

    if (fileName && imageFile) {
      imageUrl = await handleImageUpload(
        user.uid,
        imageFile,
        fileName,
        dirName,
        dispatch
      );
    }

    await addUser(user.uid, {
      email: user.email || "",
      uid: user.uid,
      login,
      avatar: imageUrl || "",
    });

    dispatch(
      setUserInfo({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        login,
        avatar: imageUrl,
      })
    );
  } catch (error) {
    console.log("SIGNUP ERROR:", error);
  }
};

// Функція для логіну користувача та збереження його в Redux
export const loginDB = async ({ email, password }, dispatch) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const userDB = await getUser(credentials.user.uid);

    dispatch(
      setUserInfo({
        ...userDB,
        email,
        uid: userDB?.uid,
      })
    );

    return credentials.user;
  } catch (error) {
    throw error;
  }
};

// Функція для логауту
export const logoutDB = async (dispatch) => {
  try {
    await signOut(auth);
    // Очистити інформацію про користувача у Redux
    dispatch(clearUserInfo());
  } catch (error) {
    console.error("Logout error:", error);
  }
};
