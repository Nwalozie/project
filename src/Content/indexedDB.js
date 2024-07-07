import { openDB } from 'idb';
import {CryptoJS} from 'crypto-js'

const DB_NAME = 'redux-store';
const STORE_NAME = 'state';

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    db.createObjectStore(STORE_NAME);
  },
});

export const saveStateToIndexedDB = async (state) => {
  try {
    const db = await dbPromise;
    const tx = db.transaction(STORE_NAME, 'readwrite');
    await tx.objectStore(STORE_NAME).put(state, 'state');
    await tx.done;
    console.log("State saved to IndexedDB:", state);
  } catch (error) {
    console.log("Error saving state to IndexedDB:", error);
  }
};

export const loadStateFromIndexedDB = async () => {
  try {
    const db = await dbPromise;
    const tx = db.transaction(STORE_NAME, 'readonly');
    const state = await tx.objectStore(STORE_NAME).get('state');
    await tx.done;
    console.log("State loaded from IndexedDB:", state);
    return state || {};
  } catch (error) {
    console.log("Error loading state from IndexedDB:", error);
    return {};
  }
};
