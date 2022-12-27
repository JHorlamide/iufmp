export interface CardProps {
  id?: number;
  image: string;
  title: string;
  firstList: string;
  secondList: string;
  thirdList: string;
  style?: string;
}

export interface ICardProps {
  id: string;
  image: any | string | undefined;
  date: string;
  headLine: string;
  details: string;
}

export interface RecentCardProps {
  id: string;
  image: any | string | undefined;
  date: string;
  headLine: string;
  details: string;
  imgWidthHeight?: string;
}
