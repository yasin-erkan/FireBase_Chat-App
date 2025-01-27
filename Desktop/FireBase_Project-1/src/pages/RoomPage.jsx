

const RoomPage = () => {

  const handleSubmit=(e)=>{
    e.preventDefault()
  }}
  return (
    <div className="wrapper">

      <form onSubmit={handleSubmit}
        className="bg-whit  text-darkgray p-[50px_60px]  rounded-[10px] 
    flex flex-col gap-10 text-center w-[80vw] maw-w-[400pxs]"
      >
        <h1> </h1>
        <p> Which room would you like to login</p>

        <input type="text" placeholder="" required />

        <button>Login room</button>

        <button>Sing out</button>
      </form>
    </div>
  );
};

export default RoomPage;
