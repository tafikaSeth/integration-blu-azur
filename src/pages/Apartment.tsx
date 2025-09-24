import Caroussel from "../components/ui/carossel"
import { APARTMENT_IMAGES } from "../constants";
import useResponsive from "../hooks/useResponsive";


const AppartementSection: React.FC = () => {

    const { isMobile } = useResponsive()

    return (
        <section className="relative py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="flex-1 w-full text-gray-900 order-last lg:order-first px-4 sm:px-6 md:px-0 max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mulish leading-snug">
                            Le confort et la sérénité d'un <strong>appartement privé</strong>
                        </h2>
                        <p className="mt-4 text-sm sm:text-base md:text-lg text-justify">
                            Blu Azur vous propose des appartements élégants et spacieux, conçus pour accueillir de 2 à 6 personnes.
                            Offrant un cadre confortable et moderne, ils sont parfaits pour une escapade détente ou un séjour prolongé.
                        </p>
                        <h3 className="mt-6 font-semibold text-xl sm:text-2xl md:text-3xl">
                            Les inclusions :
                        </h3>
                        <ul className="mt-2 list-disc list-inside space-y-1 text-sm sm:text-base md:text-lg">
                            <li>Stationnement privé</li>
                            <li>Piscine extérieure avec chaises longues</li>
                            <li>Linge de lit et serviettes</li>
                            <li>Télévision, téléphone et Wi-Fi (accès au salon)</li>
                            <li>Réfrigérateur, cuisinière, lave-vaisselle, vaisselle</li>
                            <li>Kit bébé: lit parapluie, chaise haute</li>
                            <li>
                                Autres commodités en prêt: jeux de société, livres,
                                raquettes et balles de ping-pong, sèche-cheveux, fer et
                                planche à repasser, adaptateur et cache-prises pour enfants
                            </li>
                        </ul>
                        <div className="lg:hidden w-full max-w-xs sm:max-w-sm mx-auto mt-8">
                            <Caroussel
                                images={APARTMENT_IMAGES}
                                visibleSlides={isMobile ? 1 : 2}
                                height={320}
                            />
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-1 w-full justify-center lg:justify-end bg-red-500">
                        <div className="w-full max-w-xl absolute top-0 right-0 md:top-15 md:-right-90">
                            <Caroussel images={APARTMENT_IMAGES} visibleSlides={2} height={520} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AppartementSection