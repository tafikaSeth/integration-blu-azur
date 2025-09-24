import React from "react";
import CardEndroit from "../components/ui/card-endroit";
import { SAINT_RAPHAEL_DATA } from "../constants/data-saint-raphael-section";
import { BACKGROUND_SAINT_IMAGE } from "../constants";


const SaintRaphaelSection: React.FC = () => {

    return (
        <section
            id="activites"
            className="relative text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${BACKGROUND_SAINT_IMAGE})` }}
        >
            <div className="relative z-10 container mx-auto text-center">
                <h1>
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-mulish font-normal mb-4">
                        Saint Raphaël, l'endroit parfait pour
                    </span>
                    <br className="hidden sm:block" />
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-mulish font-bold mb-4">vivre la Côte d'Azur</span>
                </h1>
                <p className="max-w-3xl mx-auto mb-16 sm:mb-20 text-base lg:text-lg font-mulish">
                    Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages,
                    Saint-Raphaël est une destination de rêve. Entre mer turquoise et rochers
                    rouges de l'Estérel, elle offre un cadre idyllique pour la détente et l'aventure.
                </p>

                <div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16 lg:gap-y-20 mb-16 sm:mb-20
                    max-w-6xl xl:max-w-7xl mx-auto
                ">
                    {SAINT_RAPHAEL_DATA.map((card, index) => (
                        <CardEndroit key={index} icon={card.icon} title={card.title} />
                    ))}
                </div>
                <p className="max-w-4xl font-mulish mx-auto text-base lg:text-lg">
                    Flânez sur la Promenade des Bains, explorez les criques secrètes ou partez en mer depuis son port de plaisance. Saint-Raphaël, c'est la Côte d'Azur dans toute sa splendeur !
                </p>

            </div>
        </section>
    );
};

export default SaintRaphaelSection;