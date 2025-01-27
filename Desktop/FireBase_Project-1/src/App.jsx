import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    //bring the current info whenever the user changes
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsub();
  }, []);

  //if the user didn't log-in
  if (!user) {
    return <LoginPage />;
  }

  //if he logs in
  return <RoomPage />;
}

export default App;
