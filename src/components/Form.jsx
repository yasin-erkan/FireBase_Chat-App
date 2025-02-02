import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "./../firebase";

const Form = ({ room }) => {
  const [text, setText] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //if message content does not exists, cancel!
    if (text.trim() === "") return;

    // have reference of database
    const collectionRef = collection(db, "messages");

    // add data to the related collection
    await addDoc(collectionRef, {
      text,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    //clear form after sending
    setText("");
    setIsOpen(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 border border-gray-200 shadow-lg flex justify-center gap-3"
    >
      <input
        type="text"
        placeholder="Write your message.."
        className="border border-gray-200 shadow-sm p-2 px-4 rounded-md w-1/2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="relative">
        <div className="absolute top-[-470px] right-[-140px]">
          <EmojiPicker
            open={isOpen}
            onEmojiClick={(e) => setText(text + e.emoji)}
          />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="btn text-base"
        >
          😀
        </button>
      </div>

      <button type="submit" className="btn">
        Send
      </button>
    </form>
  );
};

export default Form;
