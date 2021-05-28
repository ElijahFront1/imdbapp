import React, { useEffect, useState } from 'react'
import { fetchSimilarMovieData } from '../api/api';
import '../styles/components/similar.scss'
import ImdbRateBlock from './ImdbRateBlock';

function Similar({ imdbID }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchSimilarMovieData(imdbID).then((response) => {
            setMovie(response)
        })
    }, [])

    return (
        <div className="similar"
            style={{
                marginRight: '1rem', // !
                marginBottom: '1rem', // !
                borderRadius: 15,
                maxWidth: 260,
                maxHeight: 382,
                cursor: 'default',
                overflow: 'hidden'
            }}>
            <img src={movie.Poster}
                className="image"
                style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 382,
                    borderRadius: 15
                }}
            />
            <div>
                <div className="overlay"
                    style={{
                        borderRadius: 15,
                    }}>
                </div>
                <div className="content"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem',
                    }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <span style={{
                            fontWeight: 800,
                            fontSize: '1.2rem',
                        }}>
                            {movie.Title}
                        </span>
                        <span style={{
                            fontWeight: 400,
                            fontSize: '1rem',
                            paddingBottom: '.3rem',
                        }}>
                            <span className="genre">{movie.Genre}</span>
                            <span className="type-year">
                                <span>{movie.Type} </span>
                                <span>{movie.Year}</span>
                            </span>
                        </span>
                    </div>
                    <span className="plot"
                        style={{
                            fontWeight: 400,
                        }}>
                        {movie.Plot}
                    </span>
                    <span style={{
                        paddingTop: '1rem'
                    }}>
                        <ImdbRateBlock imdbRating={movie.imdbRating} />
                    </span>
                </div>
            </div>
        </div >
    )
}

export default Similar
