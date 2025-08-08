const Footer = () => {
    return (
        <footer className="bg-[#DBDCC4] text-[#33643F] px-4 md:px-20 py-10 w-full">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Column 1: Logo and Contact */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-[0.3em]">AMRUTAM</h1>
                    <h2 className="text-lg md:text-2xl font-semibold mt-6 mb-3 text-[#33643F]">Get in touch</h2>
                    <p className="text-[#4C4C4C] mb-1 font-semibold">support@amrutam.global</p>
                    <p className="text-[#4C4C4C] mb-1 font-semibold">
                        Amrutam Pharmaceuticals Pvt Ltd.,<br />
                        chitragupt ganj, Nai Sadak, Lashkar,<br />
                        Gwalior – 474001
                    </p>
                    <p className="text-[#4C4C4C] mt-2 font-semibold">+91 9713171999</p>
                </div>

                {/* Column 2: Information Links */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg md:text-2xl font-bold mb-3 text-[#33643F]">Information</h2>
                    <ul className="text-[#4C4C4C] space-y-2 font-semibold">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Privacy Policy for Mobile App</a></li>
                        <li><a href="#">Shipping and Return Policy</a></li>
                        <li><a href="#">International Delivery</a></li>
                        <li><a href="#">For Business, Hotels and Resorts</a></li>
                    </ul>
                </div>

                {/* Column 3: Social Media Icons */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold mb-4 text-[#33643F] md:text-2xl">Follow Us</h2>
                    <div className="flex space-x-3 justify-center md:justify-start">
                        {['./facebook.svg', './instagram.svg', './youtube.svg', './twitter.svg', './linkedin.svg', './pinterest.svg'].map((icon) => (
                            <a
                                key={icon}
                                href="#"
                                className="w-9 h-9 rounded-full text-white flex items-center justify-center text-lg"
                            >
                                <img src={icon} alt="" className="w-full h-auto" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
