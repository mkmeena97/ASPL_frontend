// utils/db.js (create this file if needed)
import { openDB } from 'idb';

const DB_NAME = 'UserFormDB';
const STORE_NAME = 'users';

export async function getAllUsers() {
  const db = await openDB(DB_NAME, 1);
  return await db.getAll(STORE_NAME);
}

export async function saveUser(data) {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    }
  });
  await db.add(STORE_NAME, data);
}
