export type EntertainmentType = "series" | "movie" | "anime";

export type EntertainmentSelectorType = {
  type: EntertainmentType;
  title: string;
  actionLabel: string;
  imageSrc: string;
  backgroundSrc: string;
  isOpen: boolean | null;
  isHidden: boolean;
};

type EntertainmentData = {
  id: number;
  name?: string;
  title?: string;
  first_air_date?: string;
  release_date?: string;
  backdrop_path?: string;
};

export type GetRandomEntertainmentResponse = {
  results?: EntertainmentData[];
  total_pages?: number;
};
