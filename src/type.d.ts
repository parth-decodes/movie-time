export interface Genres {
    id: number,
    name: string
  }
  
  export interface CurrentMovie {
    movieBanner?: string,
    moviePoster?: string,
    movieTitle?: string,
    plot?: string,
    genres?: Genres[],
    rating?: number,
    directors?: string[],
  }
  
  export interface CurrentMovieContext {
    currentMovie?: CurrentMovie;
    fetchCurrentMovie: (id: number) => Promise<void>;
  }