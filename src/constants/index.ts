import type { CardData } from "../types";

// Navigation
export const NAV_ITEMS = [
  { id: "apropos", label: "À propos" },
  { id: "localisation", label: "Localisation" },
  { id: "activites", label: "Activités" },
];

// Logos et backgrounds
import LOGO_IMG from "../assets/logo.png";
export const LOGO = LOGO_IMG;

import BACKGROUND_HOME from "../assets/images/background_home.webp";
import BACKGROUND_SAINT from "../assets/images/background_saint.webp";
import BACKGROUND_DISCOVERY from "../assets/images/background_discovery.webp";
import BACKGROUND_TOURISME from "../assets/images/background_tourisme.webp";
import BACKGROUND_COLLAGE from "../assets/images/collage.webp";
import BACKGROUND_RESERVATION from "../assets/images/background_reservation.webp";

export const BACKGROUND_HOME_IMAGE = BACKGROUND_HOME;
export const BACKGROUND_SAINT_IMAGE = BACKGROUND_SAINT;
export const BACKGROUND_DISCOVERY_IMAGE = BACKGROUND_DISCOVERY;
export const BACKGROUND_TOURISME_IMAGE = BACKGROUND_TOURISME;
export const BACKGROUND_COLLAGE_IMAGE = BACKGROUND_COLLAGE;
export const BACKGROUND_RESERVATION_IMAGE = BACKGROUND_RESERVATION;

// Carrousel images
import HOME_IMG1 from "../assets/images/residence-pierre-vacances-la-corniche-d-or1.webp";
import HOME_IMG2 from "../assets/images/images.webp";
import HOME_IMG3 from "../assets/images/AAA_175110_43.webp";
import HOME_IMG4 from "../assets/images/imag.webp";

export const HOME_IMAGES = [HOME_IMG1, HOME_IMG2, HOME_IMG3, HOME_IMG4];

// Appartement images
import APP_IMG1 from "../assets/images/Salon - 2e chambre.webp";
import APP_IMG2 from "../assets/images/Cuisine.webp";
import APP_IMG3 from "../assets/images/df928538d1a4bda5081606a8e08e6816437791c6.webp";
import APP_IMG4 from "../assets/images/images (2).webp";

export const APARTMENT_IMAGES = [APP_IMG1, APP_IMG2, APP_IMG3, APP_IMG4];

// Tourism cards
import STPAUL_IMG from "../assets/images/StPaulDeVence2.webp";
import SPORT_IMG from "../assets/images/LaRouteNationale5.webp";
import GOURMAND_IMG from "../assets/images/FayenceTourettesSeillans22.webp";
import FAMILLE_IMG from "../assets/images/PortGrimaudCiteLacustre33.webp";
import NATURE_IMG from "../assets/images/CapDramont2.webp";

export const TOURISM_DATA_TOP: CardData[] = [
  {
    id: '1',
    title: 'Un patrimoine culturel d\'exception',
    description: 'Du Picos au Cotentin, la Côte d\'Azur à toujours été une terre d\'inspiration pour les artistes...',
    imageUrl: STPAUL_IMG,
    links: [
      { text: 'Le Festival de Cannes', url: '#' },
      { text: 'Carnaval de Nice', url: '#' },
      { text: 'Fête du Citron', url: '#' }
    ],
    variant: 'wide'
  },
  {
    id: '2',
    title: 'Le sport au rythme de la Méditerranée',
    description: 'Du Grand Prix de F1 de Monaco aux jardins de Turquie...',
    imageUrl: SPORT_IMG,
    links: [
      { text: 'Grand prix de Monaco', url: '#' },
      { text: 'Ironman France - Nice', url: '#' },
      { text: 'Marathon des Alpes-Maritimes', url: '#' },
      { text: 'Régates de Saint-Tropez', url: '#' }
    ],
    variant: 'wide'
  }
];

export const TOURISM_DATA_BOTTOM: CardData[] = [
  {
    id: '3',
    title: 'Une destination gourmande et authentique',
    description: 'Les marchés provençaux dévoilent des saveurs du terroir...',
    imageUrl: GOURMAND_IMG,
    buttonText: 'Consulter la liste des meilleurs restaurants',
    variant: 'default'
  },
  {
    id: '4',
    title: 'Des expériences inoubliables en famille',
    description: 'Entre villages pittoresques, marchés publics animés et escapades...',
    imageUrl: FAMILLE_IMG,
    variant: 'default'
  },
  {
    id: '5',
    title: 'L\'évasion en pleine nature',
    description: 'Le Massif de l\'Estérel déploie ses roches rouges entre ciel et mer...',
    imageUrl: NATURE_IMG,
    links: [
      { text: 'Grand Canyon du Verdon', url: '#' }
    ],
    buttonText: 'Consulter la liste des roches phédoges',
    variant: 'default'
  }
];
