

const Footer = () => {
    return (
        <section className="section container flex flex-col  bg-gray-100">
            <div className="columns has-text-centered mb-2 ml-4">
                <p className="mt-2"> © Ratnesh Maurya, {new Date().getFullYear()}</p>
            </div>
        </section>
    );
};

export default Footer;
