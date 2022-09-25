import React, { FC } from "react";
import styles from "./MovieOfTheWeek.module.css";
import { Link } from "react-router-dom";
import { useCurrentMovieContext } from "./contexts";
import useScrollToTop from "../hooks/useScrollToTop";

import { Oval } from 'react-loader-spinner';

interface movieOftheWeek {
  id: number;
  title: string;
  overview: string;
  movieBanner: string;
}

interface YourComponentProps {
  movieOfTheWeek: movieOftheWeek;
  isLoading: boolean
  errorMsg: string | null;
}

const MovieOfTheWeekBanner = ({ movieOfTheWeek, isLoading, errorMsg }: YourComponentProps) => {
  const { fetchCurrentMovie } = useCurrentMovieContext();
  const scrollToTop = useScrollToTop();

  return (
    <div className={styles.popularMovie}>
      {isLoading ? <Oval
        height={80}
        width={80}
        color="#db0000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#831010"
        strokeWidth={2}
        strokeWidthSecondary={2}
      /> : <>
        <img
          src={`https://image.tmdb.org/t/p/original${movieOfTheWeek.movieBanner}`}
          className={styles.img}
          alt={errorMsg || `${movieOfTheWeek.movieBanner} banner`}
        />
        <div className={styles.HeaderHeadline}>
          <h1 className={styles.MovieOfTheWeek}>Movie Of The week</h1>
        </div>
        {errorMsg || <div className={styles.movieInfo}>
          <h2 className={styles.HeaderMovieName}>{movieOfTheWeek.title}</h2>
          <p className={styles.HeaderParagraph}>{movieOfTheWeek.overview}</p>
          <Link to="/detail">
            <button
              className={styles.HeaderButton}
              onClick={() => { fetchCurrentMovie(movieOfTheWeek.id); scrollToTop(); }}
            >
              See Detail
            </button>
          </Link>
        </div>}
      </>}
    </div>
  );
};

export default MovieOfTheWeekBanner;
