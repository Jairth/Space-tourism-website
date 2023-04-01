export interface Data {
  destinations: Destination[];
  crew:         Crew[];
  technology:   Technology[];
}

export interface Crew {
  name:   string;
  images: string;
  role:   string;
  bio:    string;
}

export interface Destination {
  name:        string;
  images:      string;
  description: string;
  distance:    string;
  travel:      string;
}

export interface Technology {
  name:        string;
  images:      Images;
  description: string;
}

export interface Images {
  portrait:  string;
  landscape: string;
}

export interface Fondos {
  [key: string]: string;
}


export interface Crew {
  name:string;
  images:string;
  bio:string;
  role:string;
}
