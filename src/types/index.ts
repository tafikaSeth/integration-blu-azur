export interface CardData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  links?: Array<{
    text: string;
    url: string;
  }>;
  buttonText?: string;
  variant?: 'default' | 'wide' | 'tall';
}

export type ButtonProps = {
  label: string;
  color?: string;
  bg?: string;
  onClick?: () => void;
  className?: string;
};

export type CarouselProps = {
    images: string[];
    visibleSlides?: number;
    height?: number;
};

export interface TouristCardProps {
  data: CardData;
  className?: string;
}