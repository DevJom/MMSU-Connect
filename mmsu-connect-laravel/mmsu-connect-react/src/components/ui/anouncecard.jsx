const Anouncecard = () => {
    return (
        <>
            <div className="flex space-x-6">
                <div className="card lg:card-side bg-base-100 shadow-xl w-[500px] m-4">
                    <figure>
                        <img
                            src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/306084609_459121432916819_6579443268732639908_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGgqRo7AUaGEYZSjBwpJG7Oxcxmmk2VqhvFzGaaTZWqGzmADp_UjcwwY94f-noidNkmQLvXeXYVMLL7uqOmv820&_nc_ohc=HkbezpXolBIQ7kNvgHiRoJz&_nc_ht=scontent.fmnl17-1.fna&oh=00_AYBOuM3fKH6Tiwonm-WIIeUhwVnkdozDUBUg0GqwU6-CHQ&oe=6657F3E4"
                            alt="Album"
                            className="object-cover w-full h-full"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            New Anouncement is released!
                        </h2>
                        <p>Click the view button to read.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View</button>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl w-[500px] m-4">
                    <figure>
                        <img
                            src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/306084609_459121432916819_6579443268732639908_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGgqRo7AUaGEYZSjBwpJG7Oxcxmmk2VqhvFzGaaTZWqGzmADp_UjcwwY94f-noidNkmQLvXeXYVMLL7uqOmv820&_nc_ohc=HkbezpXolBIQ7kNvgHiRoJz&_nc_ht=scontent.fmnl17-1.fna&oh=00_AYBOuM3fKH6Tiwonm-WIIeUhwVnkdozDUBUg0GqwU6-CHQ&oe=6657F3E4"
                            alt="Album"
                            className="object-cover w-full h-full"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            New Anouncement is released!
                        </h2>
                        <p>Click the view button to read.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Anouncecard;
