import React from "react";
import { FOOTER } from "../constants/icon-svg";
import { LOGO } from "../constants";


const Footer: React.FC = () => {
    
    return (
        <footer className="bg-[#4097FF] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-around items-center gap-10">
                    <div className="w-48">
                        <img src={LOGO} alt="Logo Blu Azur" />
                    </div>
                    <div className="font-mulish">
                        <h3 className="font-bold text-lg mb-4">Contactez-nous</h3>
                        <ul className="space-y-3">
                            {FOOTER.map((item, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <item.icon />
                                    <a href={item.href} className="hover:underline">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#2161AE]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 font-mulish text-center text-sm">
                    <p>© Tous droits réservés à Blu Azur</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;