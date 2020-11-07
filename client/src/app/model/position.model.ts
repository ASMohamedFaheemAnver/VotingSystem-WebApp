export interface Position {
  _id: string;
  title: string;
  eligible_gender: string;
  eligible_year: number;
  to: {
    _id: string;
    name: string;
  };
}
