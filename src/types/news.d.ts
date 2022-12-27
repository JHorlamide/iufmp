export type NewsType = {
  _id: string;
  image: Array<any>;
  headLine: string;
  date: Date;
  details: string;
  _createdAt: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export type EventsType = {
  _id: string;
  date: string;
  image: Array<any>;
  eventName: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
};
