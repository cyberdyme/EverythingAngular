export interface AppState {
  readonly tutorial: TutorialState[];
  readonly books: BookState[];
}

export interface BookState {
  id: number;
  title: string;
}

export interface TutorialState {
  name: string;
  url: string;
}



