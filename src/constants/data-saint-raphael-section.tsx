import type { ReactNode } from "react";

import SWIMMING_ICON from "../assets/icons/swimming.png";
import VELO_ICON from "../assets/icons/velo.png";
import CASINO_ICON from "../assets/icons/casino.png";
import VILLAGE_ICON from "../assets/icons/village.png";
import GOLF_ICON from "../assets/icons/golf.png";
import MOUNTAINS_ICON from "../assets/icons/mountains.png";

export const SAINT_RAPHAEL_DATA: { icon: string; title: ReactNode }[] = [
  { icon: SWIMMING_ICON, title: <>Sports nautiques,<br />plongée, voile</> },
  { icon: VELO_ICON, title: <>Randonnées et vélo<br />dans l'Estérel</> },
  { icon: CASINO_ICON, title: <>Casino et vie<br />nocturne animée</> },
  { icon: VILLAGE_ICON, title: <>Villages perchés et<br />marchés provençaux</> },
  { icon: GOLF_ICON, title: <>Un paradis<br />pour les golfeurs</> },
  { icon: MOUNTAINS_ICON, title: <>Montagne<br />et vélo de route</> },
];
