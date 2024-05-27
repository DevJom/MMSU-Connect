const Dropfile = () => {
    return (
        <div>
            <input 
                type="file" 
            />
            <div className="rounded-box border-base-300 text-base-content/30 flex h-72 flex-col items-center justify-center gap-6 border-2 border-dashed p-10 text-center [text-wrap:balance]">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="4"
                        y="10"
                        width="40"
                        height="30"
                        rx="2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></rect>
                    <path
                        d="M14 6V14"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                    ></path>
                    <path
                        d="M25 23L14 23"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                    ></path>
                    <path
                        d="M34 31L14 31"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                    ></path>
                    <path
                        d="M34 6V14"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                    ></path>
                </svg>
                <div>Headless UI + daisyUI component pack for Vue</div>
            </div>
        </div>
    );
};

export default Dropfile;
