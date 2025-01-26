import Link from "next/link";


const Footer = () => {
    return (
        <section className="section container flex flex-col items-center justify-center ">
            <div className="flex flex-col sm:flex-row items-center justify-center ">
                <ul className=" flex flex-col sm:flex-row  mt-2 ">
                    <li className="m-4  p-1  rounded hover:text-teal-700  ">
                        <Link
                            href="https://twitter.com/ratnesh_maurya_"
                            title="Follow Ratnesh Maurya on Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button flex flex-row  hover:text-teal-700"
                        >
                            <span className="icon ">
                                <svg
                                    className="mr-2"
                                    width="24"
                                    height="24"
                                    stroke="CurrentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                >
                                    <title>Twitter</title>
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </span>
                            <span>Twitter</span>
                        </Link>
                    </li>
                    <li className=" m-4 p-1  rounded hover:text-teal-700  ">
                        <Link
                            href="https://linkedin.com/in/ratnesh-maurya"
                            title="Follow Ratnesh Maurya on LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button flex flex-row"
                        >
                            <span className="icon">
                                <svg
                                    className="mr-2"
                                    width="24"
                                    height="24"
                                    stroke="CurrentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                >
                                    <title>LinkedIn</title>
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </span>
                            <span>LinkedIn</span>
                        </Link>
                    </li>
                    <li className="m-4 p-1 rounded hover:text-teal-700">
                        <Link
                            href="https://github.com/ratnesh-maurya"
                            title="Follow Ratnesh Maurya on GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button flex flex-row"
                        >
                            <span className="icon">
                                <svg
                                    className="mr-2"
                                    width="24"
                                    height="24"
                                    stroke="CurrentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                >
                                    <title>GitHub</title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </span>
                            <span>GitHub </span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="columns has-text-centered mb-2 ml-4">
                <p className=""> © Ratnesh Maurya, {new Date().getFullYear()}</p>
            </div>
        </section>
    );
};

export default Footer;
