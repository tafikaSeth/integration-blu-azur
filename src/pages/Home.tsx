import React from "react";
import SectionWrapper from "../components/layouts/SectionWrapper";
import Caroussel from "../components/ui/carossel";
import CustomButton from "../components/ui/button";
import { SOCIAL_LINKS } from "../constants/icon-svg";
import { BACKGROUND_HOME_IMAGE, HOME_IMAGES } from "../constants";
import useResponsive from "../hooks/useResponsive";
import LazySection from "../components/ui/lazy-section";


const AppartementSection = React.lazy(() => import("./Apartment"));
const SaintRaphaelSection = React.lazy(() => import("./SaintRaphaelSection"));
const LocationSection = React.lazy(() => import("./LocationSection"));
const DiscoverySection = React.lazy(() => import("./DiscoverySection"));
const TouristSection = React.lazy(() => import("./TouristSection"));
const ReservationsSection = React.lazy(() => import("./ReservationSection"));

export default function Home() {

    const { isMobile } = useResponsive()

    return (
        <div className="overflow-x-hidden">
            <SectionWrapper fullWidth>
                <div id="home" className="w-full relative h-[100vh]">
                    <div
                        className="absolute w-full h-full object-cover"
                        style={{
                            backgroundImage: `url(${BACKGROUND_HOME_IMAGE})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    <div className="hidden absolute left-0 top-0 h-full w-[70px] lg:w-[90px] bg-blue-500/50 lg:flex lg:flex-col justify-between py-6">
                        <div className="flex flex-col items-center space-y-6 text-white absolute left-0 right-0 top-[70%] bottom-[70%]">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`${social.hoverClass} transition`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
                            <div className="max-w-2xl flex-1 text-center mt-15 lg:text-left text-white">
                                <h1 className="leading-snug">
                                    <span className="block text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-mulish font-bold">
                                        Votre évasion
                                    </span>
                                    <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mulish font-normal">
                                        sur la Côte d'Azur !
                                    </span>
                                </h1>

                                <p className="mb-3 md:mb-15 mt-4 text-sm sm:text-base md:text-lg font-mulish font-normal text-justify">
                                    Blu Azur vous invite à découvrir le charme de Saint-Raphaël,
                                    une destination d'exception nichée entre Cannes et Saint-Tropez.
                                    Nos appartements tout équipés, situés dans un domaine privé sécurisé,
                                    offrent un cadre verdoyant et paisible, à quelques pas de la marina de
                                    Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez
                                    d'un séjour alliant confort, sérénité et élégance au cœur de la Riviera française !
                                </p>
                                <CustomButton label="Réservez dès maintenant votre séjour !" />
                                <div className="lg:hidden w-full max-w-xs sm:max-w-sm mx-auto mt-6 mb-6">
                                    <Caroussel
                                        images={HOME_IMAGES}
                                        visibleSlides={isMobile ? 1 : 2}
                                    />
                                </div>
                                <div className="lg:hidden flex justify-center space-x-4 text-white">
                                    {SOCIAL_LINKS.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`${social.hoverClass} transition`}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden lg:block flex-1 max-w-xl relative left-0 md:left-90">
                                <Caroussel images={HOME_IMAGES} visibleSlides={2} />
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            <LazySection>
                <SectionWrapper fullWidth={false}>
                    <AppartementSection />
                </SectionWrapper>
            </LazySection>

            <LazySection>
                <SectionWrapper fullWidth>
                    <SaintRaphaelSection />
                </SectionWrapper>
            </LazySection>

            <LazySection>
                <LocationSection />
            </LazySection>

            <LazySection>
                <DiscoverySection />
            </LazySection>

            <LazySection>
                <TouristSection />
            </LazySection>

            <LazySection>
                <ReservationsSection />
            </LazySection>
        </div>
    );
}
