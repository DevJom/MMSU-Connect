const SideCard = () => {
    return (
        <div className="card mt-4 block md:hidden lg:block xl:block 2xl:block">
            <div className="card w-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideCard;
