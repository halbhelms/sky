export type Group = {
  id: number;
  name: string;
  locations: number[];
}

export type View = {
  id: number;
  name: string;
  active: boolean = false;
}