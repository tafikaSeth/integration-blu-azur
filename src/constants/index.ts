import type { CardData } from "../types";

export const NAV_ITEMS = [
  { id: "apropos", label: "À propos" },
  { id: "localisation", label: "Localisation" },
  { id: "activites", label: "Activités" },
];

export const LOGO = "src/assets/logo.png";

export const BACKGROUND_HOME_IMAGE = "src/assets/images/background_home.webp";
export const BACKGROUND_SAINT_IMAGE = "src/assets/images/background_saint.webp";
export const BACKGROUND_DISCOVERY_IMAGE = "src/assets/images/background_discovery.webp";
export const BACKGROUND_COLLAGE_IMAGE = "src/assets/images/collage.webp";
export const BACKGROUND_RESRVATION_IMAGE = "src/assets/images/background_reservation.webp";

export const HOME_IMAGES = [
  "src/assets/images/residence-pierre-vacances-la-corniche-d-or1.webp",
  "src/assets/images/images.webp",
  "src/assets/images/AAA_175110_43.webp",
  "src/assets/images/imag.webp",
];

export const APARTMENT_IMAGES = [
  "src/assets/images/Salon - 2e chambre.webp",
  "src/assets/images/Cuisine.webp",
  "src/assets/images/df928538d1a4bda5081606a8e08e6816437791c6.webp",
  "src/assets/images/images (2).webp",
];

export const TOURISM_DATA_TOP: CardData[] = [
  {
    id: '1',
    title: 'Un patrimoine culturel d\'exception',
    description: 'Du Picos au Cotentin, la Côte d\'Azur à toujours été une terre d\'inspiration pour les artistes. Découvrez les nombreux sites historiques jalonnant la région, offrant un voyage au cœur de l\'art et de l\'histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.',
    imageUrl: 'src/assets/images/StPaulDeVence2.webp',
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
    description: 'Du Grand Prix de F1 de Monaco aux jardins de Turquie, en passant par le Marathon des Alpes-Maritimes, la région offre un rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d\'aventure.',
    imageUrl: 'src/assets/images/LaRouteNationale5.webp',
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
    description: 'Les marchés provençaux dévoilent des saveurs du terroir : tomates anciennes, huile d\'olive et spécialités méditerranéennes. Vignerons passionnés et restaurateurs mettent offrent une expérience gastronomique unique. Les produits du terroir s\'accordent dans un cadre enchanteur.',
    imageUrl: 'src/assets/images/FayenceTourettesSeillans22.webp',
    buttonText: 'Consulter la liste des meilleurs restaurants',
    variant: 'default'
  },
  {
    id: '4',
    title: 'Des expériences inoubliables en famille',
    description: 'Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose une multitude d\'activités adaptées à tous les âges. La diversité des activités en plein air fait de la région une destination prisée par les amoureux de découvertes et d\'aventures en famille.',
    imageUrl: 'src/assets/images/PortGrimaudCiteLacustre33.webp',
    variant: 'default'
  },
  {
    id: '5',
    title: 'L\'évasion en pleine nature',
    description: 'Le Massif de l\'Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s\'imprégner d\'un environnement préservé, véritable havre de paix loin de la foule.',
    imageUrl: 'src/assets/images/CapDramont2.webp',
    links: [
      { text: 'Grand Canyon du Verdon', url: '#' }
    ],
    buttonText: 'Consulter la liste des roches phédoges',
    variant: 'default'
  }
];



