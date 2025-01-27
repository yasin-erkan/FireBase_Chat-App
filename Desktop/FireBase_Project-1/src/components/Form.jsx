import { EmojiPicker } from "emoji-picker-react";
import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        placeholder="Write your message!"
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
          onClick={() => setIsOpen(!isOpen)}
          className="btn text-base"
        ></button>
      </div>
      <button
        type="submit"
        className="bg-black p-2 px-4 text-white text-sm rounded-md transition hover:bg-black/80"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
