import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const RoomPage = ({ setRoom }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    //get input entry
    const room = e.target[0].value.toLowerCase();

    //update the room state
    setRoom(room);
  };

  // when you sign out
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="wrapper">
      <form
        onSubmit={handleSubmit}
        className="box rounded-[10px] 
    flex flex-col gap-10 text-center "
      >
        <h1 className="text-4xl">Chat Room </h1>
        <p className="text-gray-400"> Which room would you like to log-in</p>

        <input
          type="text"
          placeholder="Ex: haftasonu"
          required
          className="border border-gray-300 rounded-md shadow-lg p-2 px-4"
        />

        <button
          type="submit"
          className="bg-zinc-500 border border-gray-300 rounded-md p-2 text-white  hover:bg-zinc-600 transition curser-pointer"
        >
          Log-in
        </button>

        <button
          type="button"
          onClick={handleLogout}
          className="bg-red-500 border border-gray-300 rounded-md p-2 text-white  hover:bg-red-600 transition curser-pointer"
        >
          Sign-out
        </button>
      </form>
    </div>
  );
};

export default RoomPage;
