import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  updateDoc,
  getDocs,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../config";
import { handleImageUpload } from "./imageUtils";

// Функція для додавання документа до колекції
export const addUser = async (userId, userData) => {
  try {
    await setDoc(doc(db, "users", userId), userData);
    console.log("User added:", userId);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

// Функція для отримання документа з колекції
export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

// Функція для запису даних користувача у Firestore
export const updateUserInFirestore = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", uid), data, { merge: true });
  } catch (error) {
    console.error("Error saving user data to Firestore:", error);
  }
};

// Функція для додавання постів
export const addPost = async (userId, postData) => {
  try {
    console.log("postData", postData);
    const { imageFile, fileName, location, name } = postData;

    const postRef = await addDoc(collection(db, "posts"), {
      location,
      name,
      userId,
    });

    const postId = postRef.id;

    let imageUrl;

    if (fileName && imageFile) {
      imageUrl = await handleImageUpload(postId, imageFile, fileName, "posts");
    }

    await updateDoc(doc(db, "posts", postId), { imageUrl });
    console.log("Post added for user:", userId);
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

// Функція для отримання всіх постів
export const getAllPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));

    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });

    return posts;
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
};

// Функція для отримання постів конкретного користувача
export const getUserPosts = async (userId) => {
  try {
    const q = query(collection(db, "posts"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });

    return posts;
  } catch (error) {
    console.error("Error getting user posts:", error);
    return [];
  }
};

// Функція для додавання коментаря до поста
export const addCommentToPost = async (comments) => {
  const { postId, userId, text } = comments;
  try {
    const commentsRef = collection(db, "posts", postId, "comments");

    const timestamp = new Date("2024-11-06T03:23:01+02:00");
    const formattedDate = formatDateWithMonthName(timestamp);

    const docRef = await addDoc(commentsRef, {
      userId,
      text,
      timestamp: formattedDate,
    });

    console.log("Comment added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding comment:", error);
  }
};

// Функція для отримання коментарів до поста
export const getCommentsForPost = async (postId) => {
  try {
    const commentsRef = collection(db, "posts", postId, "comments");
    const commentsQuery = query(commentsRef, orderBy("timestamp"));
    const querySnapshot = await getDocs(commentsQuery);

    const comments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return comments;
  } catch (error) {
    console.error("Error getting comments:", error);
    return [];
  }
};

// Форматування дати з назвою місяця
const formatDateWithMonthName = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[monthIndex];
  return `${day} ${monthName} ${year} | ${hours}:${minutes}`;
};
