import React from "react";
import CustomButton from "../components/ui/button";


const LocationSection: React.FC = () => {

    return (
        <div>
            <section className="w-full max-w-7xl mx-auto p-4 sm:p-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-mulish sm:text-4xl text-gray-800">
                                Où se trouve Blu Azur à
                                <span className="block font-mulish font-bold mt-1">
                                    Saint-Raphaël ?
                                </span>
                            </h2>
                            <div className="mt-8 text-left">
                                <p className="font-bold font-mulish text-justify leading-relaxed mb-5">
                                    Blu Azur est idéalement situé entre Saint-Tropez et Cannes,
                                    au cœur de l'une des plus belles stations balnéaires de France.
                                    Nos appartements se trouvent dans un domaine privé sécurisé, entouré
                                    de verdure, à quelques minutes à pied de la plage sablonneuse de Santa
                                    Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence
                                    permet un accès facile aux boutiques, restaurants et animations locales. Une station
                                    d'arrêt d'autobus est située à la sortie du site, facilitant les déplacements, et une
                                    boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.
                                </p>
                                <CustomButton label="Comment s'y rendre ?" color="#4097FF" />
                            </div>
                        </div>
                        <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden">
                            <iframe
                                title="Localisation Blu Azur"
                                src={`https://maps.google.com/maps?q=43.42901,6.75789&hl=fr&z=15&output=embed`}
                                width="100%"
                                height="100%"
                                className="border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationSection;