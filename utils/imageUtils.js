import {
  getDownloadURL,
  ref,
  uploadBytes,
  getStorage,
  deleteObject,
} from "firebase/storage";
import uuid from "react-native-uuid";
import { storage } from "../config";
import { setAvatarPath } from "../redux/reducer";

// Завантажуємо зображення
export const handleImageUpload = async (
  userId,
  file,
  fileName,
  dirName,
  dispatch
) => {
  try {
    // Завантажуємо зображення
    const imageRef = await uploadImage(
      userId,
      file,
      fileName,
      dirName,
      dispatch
    );
    // Отримуємо URL завантаженого зображення
    const imageUrl = await getImageUrl(imageRef);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image and getting URL:", error);
  }
};

// Функція для отримання URL завантаженого зображення
export const getImageUrl = async (imageRef) => {
  const url = await getDownloadURL(imageRef);
  return url;
};

// Функція для завантаження зображення
export const uploadImage = async (
  userId,
  file,
  fileName,
  dirName,
  dispatch
) => {
  const imagePath = `${dirName}/${userId}/${fileName}-${uuid.v4()}`;
  if (dispatch) {
    dispatch(setAvatarPath(imagePath));
  }

  try {
    const imageRef = ref(storage, imagePath);
    await uploadBytes(imageRef, file);
    return imageRef;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Функція для видалення зображення
export const deleteImage = async (path) => {
  try {
    const storageInstance = getStorage(); // Отримуємо екземпляр сховища
    const imageRef = ref(storageInstance, path); // Створюємо посилання на зображення

    // Видаляємо файл
    await deleteObject(imageRef);
    console.log("Зображення видалено успішно");
  } catch (error) {
    console.error("Помилка під час видалення зображення:", error);
  }
};
