const Developercard = () => {
  return (
    <>
      <div className="flex flex-row space-x-4 mt-4 mx-4">
        <div className="card w-[1000px] lg:card-side bg-base-100 shadow-xl">
          <figure className="w-[400px]">
            <img src="../public/image/clinton.jpg" alt="Album" />
          </figure>
          <div className="card-body pt-28">
            <h2 className="text-6xl font-bold">Cliton Visaya</h2>
            <h2 className="text-3xl">Back-end Developer</h2>
          </div>
        </div>

        <div className="card w-[1000px] lg:card-side bg-base-100 shadow-xl">
          <figure className="w-[400px]">
            <img src="../public/image/jomar.jpg" alt="Album" />
          </figure>
          <div className="card-body pt-28">
            <h2 className="text-6xl font-bold">Jomar Lazaro</h2>
            <h2 className="text-3xl">Front-end Developer</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 mt-4 mx-4">
        <div className="card w-[1000px] lg:card-side bg-base-100 shadow-xl">
          <figure className="w-[400px] h-[400px]">
            <img src="../public/image/gabriel.jpg" alt="Album" />
          </figure>
          <div className="card-body pt-24">
            <h2 className="text-6xl font-bold">
              Gabriel <br />
              Andrei Adajar
            </h2>
            <h2 className="text-3xl">Front-end Developer</h2>
          </div>
        </div>

        <div className="card w-[1000px] lg:card-side bg-base-100 shadow-xl">
          <figure className="w-[400px]">
            <img src="../public/image/derek.jpg" alt="Album" />
          </figure>
          <div className="card-body pt-24">
            <h2 className=" text-6xl font-bold">
              Derek <br />
              Luis Lagadon{" "}
            </h2>
            <h2 className=" text-3xl">UX and UI Designer</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developercard;
