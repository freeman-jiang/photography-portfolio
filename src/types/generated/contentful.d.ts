// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

export interface IContactFields {
  /** text */
  text: string;

  /** link */
  link: string;
}

export interface IContact extends Entry<IContactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "contact";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IContactListFields {
  /** items */
  items: IContact[];

  /** name */
  name?: string | undefined;
}

export interface IContactList extends Entry<IContactListFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "contactList";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IInterestFields {
  /** name */
  name: string;

  /** link */
  link?: string | undefined;
}

export interface IInterest extends Entry<IInterestFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "interest";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IInterestListFields {
  /** items */
  items: IInterest[];

  /** name */
  name: string;
}

export interface IInterestList extends Entry<IInterestListFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "interestList";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPhotoFields {
  /** image */
  image: Asset;

  /** title */
  title: string;

  /** description */
  description?: string | undefined;

  /** location */
  location: string;

  /** coordinates */
  coordinates: { lat: number; lon: number };

  /** date */
  date?: string | undefined;

  /** tags */
  tags?: ("people" | "places" | "things")[] | undefined;

  /** theme */
  theme?: ("dark" | "light")[] | undefined;
}

export interface IPhoto extends Entry<IPhotoFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "photo";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPhotoListFields {
  /** photos */
  photos: IPhoto[];

  /** name */
  name?: string | undefined;
}

export interface IPhotoList extends Entry<IPhotoListFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "photoList";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPositionFields {
  /** role */
  role: string;

  /** companyName */
  companyName: string;

  /** companyUrl */
  companyUrl: string;

  /** description */
  description?: string | undefined;

  /** isFounder */
  isFounder: boolean;
}

export interface IPosition extends Entry<IPositionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "position";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPositionListFields {
  /** listName */
  listName: string;

  /** currentPositions */
  currentPositions?: IPosition[] | undefined;

  /** pastPositions */
  pastPositions: IPosition[];
}

export interface IPositionList extends Entry<IPositionListFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "positionList";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProjectFields {
  /** name */
  name: string;

  /** badgeName */
  badgeName?: string | undefined;

  /** badgeUrl */
  badgeUrl?: string | undefined;

  /** description */
  description: string;

  /** image */
  image: Asset;

  /** demoUrl */
  demoUrl?: string | undefined;

  /** githubUrl */
  githubUrl?: string | undefined;

  /** technologies */
  technologies?: string | undefined;

  /** notes */
  notes?: string | undefined;
}

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "project";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProjectListFields {
  /** listName */
  listName: string;

  /** projects */
  projects: IProject[];
}

export interface IProjectList extends Entry<IProjectListFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "projectList";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "contact"
  | "contactList"
  | "interest"
  | "interestList"
  | "photo"
  | "photoList"
  | "position"
  | "positionList"
  | "project"
  | "projectList";

export type IEntry =
  | IContact
  | IContactList
  | IInterest
  | IInterestList
  | IPhoto
  | IPhotoList
  | IPosition
  | IPositionList
  | IProject
  | IProjectList;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
