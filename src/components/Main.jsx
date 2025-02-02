import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./../firebase/index";
import message from "./message";

const Main = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //reference of collection you want to subscribe
    const collectionRef = collection(db, "messages");

    //OnSnapshot method  that places a listener on the collection and passes the current data to the function as a data parameter for each update in the collection.

    const unsub = onSnapshot(collectionRef, (data) => {
      //I held the messages in an temporary array
      const temp = [];
      // I conveyed all data to the temporary array with forEach method
      data.docs.forEach((doc) => {
        temp.push(doc.data());
      });
      setMessages(temp);
    });
    return () => unsub();
  }, []);

  return (
    <main className="flex-1 p-5">
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Send your first message </p>
        </div>
      ) : (
        messages.map((i, key) => <message key={key} data={i} />)
      )}
    </main>
  );
};

export default Main;
