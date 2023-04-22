import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
  writeBatch,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "finalreact-45021.firebaseapp.com",
  projectId: "finalreact-45021",
  storageBucket: "finalreact-45021.appspot.com",
  messagingSenderId: "570104844719",
  appId: "1:570104844719:web:fd14080a3c9b76f646df5a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems() {
  try {
    const productsRef = collection(db, "products");
    const q = query(productsRef, orderBy("index"));
    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;
    const docsData = documents.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return docsData;
  } catch (error) {
    alert(`Ocurrió un error: ${error}.`);
    throw new Error("Ocurrio un Error:");
  }
}

export async function getItem(idURL) {
  try {
    const productRef = doc(db, "products", idURL);
    const productSnap = await getDoc(productRef);
    // Amamos al .exists()
    if (productSnap.exists()) {
      return { id: productSnap.id, ...productSnap.data() };
    } else {
      return { index: -1 };
    }
  } catch (error) {
    alert(`Ocurrió un error: ${error}.`);
    throw new Error("Ocurrio un Error:");
  }
}

export async function getItemsCateg(categURL) {
  try {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("cat", "==", categURL));
    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;
    const docsData = documents.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return docsData;
  } catch (error) {
    alert(`Ocurrió un error: ${error}.`);
    throw new Error("Ocurrio un Error:");
  }
}

export async function getItemsGen(genURL, categURL) {
  try {
    const productsRef = collection(db, "products");
    const q = query(
      productsRef,
      where("gen", "==", genURL),
      where("cat", "==", categURL)
    );
    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;
    const docsData = documents.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return docsData;
  } catch (error) {
    alert(`Ocurrio un Error: ${error}.`);
    throw new Error("Ocurrio un Error:");
  }
}

export async function createOrder(order) {
  const ordersRef = collection(db, "orders");
  const orderId = await addDoc(ordersRef, order);
  return orderId;
}

export async function createMessage(contactInfo) {
  const ordersRef = collection(db, "messages");
  const messageId = await addDoc(ordersRef, contactInfo);
  return messageId;
}

export async function updateStock(order) {
  const productRef = collection(db, "products");

  const batch = writeBatch(db);
  let item, productDoc, product;
  for (item of order.items) {
    let { id, count } = item;
    productDoc = doc(productRef, id);
    product = await getDoc(productDoc);
    let newStock = product.data().stock - count;
    if (newStock <= 0) {
      alert(`No queda stock del producto ${id}.`);
      throw new Error(`No queda stock del producto ${id}.`);
    } else {
      batch.update(productDoc, { stock: newStock });
    }
  }
  await batch.commit();
}
