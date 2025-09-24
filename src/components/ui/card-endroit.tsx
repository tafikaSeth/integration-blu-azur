import React from "react";


type CardProps = {
  icon: string;
  title: React.ReactNode;
};

const CardEndroit: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="
          flex items-center justify-center bg-white rounded-full 
          w-28 h-28 sm:w-32 sm:h-32  /* Taille du cercle pour mobile et desktop */
          shadow-lg mb-4"
      >
        <img
          src={icon}
          alt=""
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
        />
      </div>
      <h3 className="
        text-white fpont-mulish font-bold text-base leading-tight
        min-h-[3.75rem] /* Hauteur minimale pour 3 lignes de texte (env. 16px * 1.25 * 3 = 60px) */
        flex items-center justify-center /* Centre le texte verticalement dans cet espace */
      ">
        {title}
      </h3>
    </div>
  );
};

export default CardEndroit;