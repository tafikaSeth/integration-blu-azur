import React from "react";
import { BACKGROUND_COLLAGE_IMAGE, BACKGROUND_DISCOVERY_IMAGE } from "../constants";


const DiscoverySection: React.FC = () => {

    return (
        <div style={{ backgroundImage: `url(${BACKGROUND_DISCOVERY_IMAGE})` }} className="p-10">

            <section className="w-full max-w-7xl mx-auto p-4 sm:p-6">
                <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={BACKGROUND_COLLAGE_IMAGE}
                            alt="Collage d'images de Saint-Raphaël montrant des ruelles, des restaurants et des voiliers"
                            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                        />
                    </div>
                    <div className="text-center lg:text-left text-white ">
                        <h2>
                            <span className="text-3xl sm:text-4xl font-mulish">
                                Un point de départ idéal
                            </span>
                            <span className="block font-mulish font-bold text-4xl sm:text-5xl mt-1">
                                pour découvrir la Côte d'Azur !
                            </span>
                        </h2>
                        <p className="mt-6 text-base font-mulish text-justify lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l'Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d'aventures. Entre marchés provençaux, villages perchés et animations locales, l'art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DiscoverySection;