import { auth } from "./firebase";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import ChatPage from "./pages/ChatPage";
import Loader from "./components/Loader";

const App = () => {
  const [user, setUser] = useState(undefined);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    //it updates whenever the user state changes
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    // stop listening when the user log-out
    return () => unsub();
  }, []);

  //if data of the user haven't rendered yet...
  if (user === undefined) {
    return <Loader />;
  }

  //if user haven't log in yet...
  if (user === null) {
    return <LoginPage />;
  }

  // if the user logged-in and chose a room
  if (room) return <ChatPage room={room} setRoom={setRoom} />;

  //if s/he signed-in but did not choose a room
  return <RoomPage setRoom={setRoom} />;
};

export default App;

//!Notes

/*Oturumu acik olan kullnicinin verilerini alma:
1- Auth nesnesi icinden (auth.currentUser): elde edilen verileri karana basarken sorun ysayabilirz
2- "onAuthStateChanged" methodu( daha garanti)=> kullanici stattus her degistihginde gunceller
*/
