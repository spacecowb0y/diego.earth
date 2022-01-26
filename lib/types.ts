export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};
export type Sleep = {
  efficiency: number;
};
export type Steps = {
  total: number;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
  albumImageUrl: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

export type GitHub = {
  stars: number;
};
