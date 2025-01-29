import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "./../firebase/index";

const LoginPage = () => {
  //sign-in with google
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res.user))
      .catch((err) => console.log("Please, sign-in!,err"));
  };

  return (
    <div className="wrapper">
      <div className=" box h-[450px] flex flex-col justify-center items-center gap-[50px] ">
        <h1 className="text-4xl"> Chat Room</h1>
        <p className="text-gray-400">Sign-in to continue</p>

        <button
          className="flex gap-8 items-center border p-2 px-4 rounded-md shadow-lg  border-gray-300 hover:bg-gray-100 transition cursor-pointer "
          onClick={handleLogin}
        >
          <img src="/public/google.png" alt="google" className="w-[30px]" />

          <span>Sign-up with Google account</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
