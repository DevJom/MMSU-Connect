const SideCard = () => {
  return (
    <div className="card mt-4">
      <div className="card w-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Popular</h2>
        </div>
        <a href="/post" className="">
          <div className="card w-auto bg-base-100 shadow-xl image-full m-4">
            <div className="card-body">
              <h2 className="card-title">User</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        </a>
      </div>

      <div className="divider"></div>

      <div className="card w-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Anouncement</h2>
        </div>
        <a href="/anouncement">
          <div className="card w-auto bg-base-100 shadow-xl image-full m-4">
            <div className="card-body">
              <h2 className="card-title">Anouncement</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        </a>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default SideCard;
