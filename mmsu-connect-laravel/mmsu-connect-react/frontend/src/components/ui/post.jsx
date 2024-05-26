const Post = () => {
    const userType = 'student'

    const renderReplies = () => {
        return (
            <ul>
                <li>
                    <p className="font-bold">Jomar Lazaro</p>
                    <p>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                        ></svg>
                        Jomar is always most pogi of all time. GOAT!!!
                    </p>
                    <ul>
                        <li>
                            <p className="font-bold">Clinton Visaya</p>
                            <p>
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                ></svg>
                                As always bro, you made to the highest level of poginess.
                            </p>
                        </li>
                    </ul>
                </li>

                <li>
                    <p className="font-bold">Gabriel Adajar</p>
                    <p>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                        ></svg>
                        king lang si paulo
                    </p>
                </li>
            </ul>
        );
    };

    return (
        <>
            <ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full">
                <li>
                    <details open>
                        <summary>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                                />
                            </svg>
                            Reply
                        </summary>
                        {userType === 'student' ? (
                            <ul>
                                {renderReplies()}
                            </ul>
                        ) : userType === 'teacher' ? (
                            <ul>
                                {renderReplies()}
                            </ul>
                        ) : (
                            <p>Admin view goes here</p>
                        )}
                    </details>
                </li>
            </ul>
        </>
    );
};

export default Post;
