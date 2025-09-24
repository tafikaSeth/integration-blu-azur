import React from "react";
import CustomButton from "../components/ui/button";
import { BACKGROUND_RESERVATION_IMAGE } from "../constants";


const ReservationsSection: React.FC = () => {

    return (
        <section
            className="relative w-full bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${BACKGROUND_RESERVATION_IMAGE})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4097FF] via-blue-600/50 to-transparent"></div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[60vh] py-20">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-mulish font-bold mb-4">
                    Réservations
                </h2>
                <p className="max-w-2xl text-lg sm:text-xl font-light leading-relaxed font-mulish mb-8">
                    <strong className="font-bold">Offrez-vous un séjour inoubliable </strong>
                    dans l'un de nos appartements Blu Azur. Profitez d'un cadre exceptionnel,
                    entre confort, détente et découvertes, au cœur de Saint-Raphaël.
                </p>
                <CustomButton label="Réservez dès maintenant votre séjour !" bg="#4097FF" className="border-none"/>
            </div>
        </section>
    );
};

export default ReservationsSection;