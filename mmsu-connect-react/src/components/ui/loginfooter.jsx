export const LoginFooter = () => {
    return (
        <footer className="footer grid-rows-1 pl-80 pt-10 pb-10  text-lg bg-white text-green-700 border-t-4  border-t-amber-400 scrol">
            <nav>
                <h6 className="footer-title font-bold">Other Links</h6>
                <a className="link link-hover ">MMSU Opportunities</a>
                <a className="link link-hover">Downloads</a>
                <a className="link link-hover">Publication</a>
                <a className="link link-hover">Videos</a>
                <a className="link link-hover">Gallery</a>
            </nav>

            <nav>
                <h6 className="footer-title font-bold">Socials</h6>
                <a className="link link-hover">MMSU - Authorize Page</a>
                <a className="link link-hover">MMSU Library System</a>
                <a className="link link-hover">American Corner</a>
            </nav>

            <nav>
                <h6 className="footer-title font-bold">Quick Links</h6>
                <a className="link link-hover">CFAT</a>
                <a className="link link-hover">Student Portal</a>
                <a className="link link-hover">MMSU Data Privacy Notice</a>
                <a className="link link-hover">MVLE</a>
            </nav>
        </footer>
    );
};
