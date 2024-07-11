import { openDB } from 'idb';
import CryptoJS from 'crypto-js';

const DB_NAME = 'redux-store';
const STORE_NAME = 'state';
const SECRET_KEY = 'your-secret-key';

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      const store = db.createObjectStore(STORE_NAME, { keyPath: 'email' });
      store.createIndex('by_email', 'email', { unique: true });
    }
  },
});

const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

const decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export const saveStateToIndexedDB = async (email, state) => {
  try {
    const db = await dbPromise;
    const encryptedState = encryptData(state);
    const tx = db.transaction(STORE_NAME, 'readwrite');
    await tx.objectStore(STORE_NAME).put({ email, data: encryptedState });
    await tx.done;
    console.log("State saved to IndexedDB for user:", email);
  } catch (error) {
    console.error("Error saving state to IndexedDB:", error);
  }
};

export const loadStateFromIndexedDB = async (email) => {
  try {
    const db = await dbPromise;
    const tx = db.transaction(STORE_NAME, 'readonly');
    const record = await tx.objectStore(STORE_NAME).get(email);
    await tx.done;
    if (record) {
      const decryptedState = decryptData(record.data);
      console.log("State loaded from IndexedDB for user:", email);
      return decryptedState;
    } else {
      console.log("No state found for user:", email);
      return {};
    }
  } catch (error) {
    console.error("Error loading state from IndexedDB:", error);
    return {};
  }
};
