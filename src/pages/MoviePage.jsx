import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SearchOnMoviePage from '../components/SearchOnMoviePage'
import Similar from '../components/Similar'
import '../styles/pages/movie-page.scss'
import BigBtn from '../components/BigBtn';
import ImdbRateBlock from '../components/ImdbRateBlock'
import { fetchMovieById, fetchSimilarMoviesList, fetchTrailer } from '../api/api.js';
import { NavLink } from 'react-router-dom'


function MoviePage() {

    const [movie, setMovie] = useState([]);
    const [similarList, setSimilarList] = useState([]);
    const [trailerID, setTrailerID] = useState('');

    const fetcMovieByIdHandler = () => {
        fetchMovieById().then((response) => {
            setMovie(response, response.Poster = response.Poster.replace('SX300', ''))
        })
    }

    const fetchSimilarMoviesListHandler = () => {
        fetchSimilarMoviesList().then((response) => {
            setSimilarList(response.slice(0, 4))
        })
    }

    const fetchTrailerHandler = () => {
        fetchTrailer().then((response) => {
            setTrailerID(response.resource.videos[0].id.replace('/videoV2/vi', ''))
        })
    }

    useEffect(() => {
        fetcMovieByIdHandler()
        fetchSimilarMoviesListHandler()
        fetchTrailerHandler()
    }, [])

    return (
        <Row className="movie-page" style={{
            color: 'white',
            flexDirection: 'column'
        }}>
            <Col sm={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
                <Row className="movie-page__header-wrapper" style={{
                    justifyContent: 'space-between',
                    height: '5rem',
                    alignItems: 'center'
                }}>
                    <Col sm={{ span: 6 }}
                        className="movie-page__title"
                        style={{
                            fontWeight: 300,
                            fontSize: '1.2rem',
                            color: '#FEFEFE',
                        }}>
                        <NavLink to="/search" style={{
                            color: 'white',
                            textDecoration: 'none',
                        }}>
                            <span>Richbee Shows</span>
                        </NavLink>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 5 }}
                        className="movie-page__search">
                        <SearchOnMoviePage />
                    </Col>
                </Row>
            </Col>
            <Col style={{
                height: 810,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${movie.Poster})`,
            }}>
                <Row className="movie-page__movie-info-wrapper" style={{
                    zIndex: 1,
                }}>
                    <Col sm={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
                        <Row style={{
                            flexDirection: 'column',
                        }}>
                            <Col sm={{ span: 12 }} lg={{ span: 12 }}
                                className="movie-page__movie-info-wrapper__title">
                                <h1 className="movie-page__movie-title"
                                    style={{
                                        fontWeight: 900,
                                    }}>
                                    {movie.Title}
                                </h1>
                            </Col>
                            <Col sm={{ span: 12 }} lg={{ span: 12 }} className="movie-page__span-wrapper"
                                style={{
                                    paddingTop: '1rem'
                                }}>
                                <ImdbRateBlock imdbRating={movie.imdbRating} />
                                <span>{movie.Type}</span>
                                <span>{movie.Genre}</span>
                                <span style={{ border: 'none' }}>{movie.Year}</span>
                            </Col>
                            <Col sm={{ span: 12 }} lg={{ span: 5 }}
                                className="movie-page__movie-info-wrapper__btn">
                                {trailerID ?
                                    <a href={`https://www.imdb.com/video/vi${trailerID}`}
                                        target="_blank">
                                        <BigBtn text={'Watch trailer'} />
                                    </a>
                                    :
                                    <BigBtn text={'Watch'} />}
                            </Col>
                            <Col sm={{ span: 12 }} lg={{ span: 5 }}
                                className="movie-page__movie-info-wrapper__nominations"
                                style={{
                                    fontWeight: 600,
                                    marginTop: '2.5rem',
                                }}>
                                <span>
                                    {movie.Awards}
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row style={{ backgroundColor: '#E5E5E5' }}>
                    <Col sm={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
                        <Row style={{ flexDirection: 'column', color: '#323232' }}>
                            <Col sm={{ span: 12 }} lg={{ span: 8 }}
                                style={{
                                    fontWeight: 900,
                                    fontSize: '2.1rem',
                                    paddingTop: '3rem',
                                    lineHeight: '2.3rem',
                                }}>
                                <span>{`Watch ${movie.Title} on Richbee Shows`}</span>
                            </Col>
                            <Col sm={{ span: 12 }} lg={{ span: 8 }}
                                style={{
                                    fontWeight: 400,
                                    fontSize: '1.1rem',
                                    paddingTop: '1.5rem',
                                }}>
                                <span>
                                    {movie.Plot}
                                </span>
                            </Col>
                            <Col style={{
                                fontWeight: 900,
                                fontSize: '1.6rem',
                                paddingTop: '2rem',
                            }}>
                                <span>You may also like</span>
                            </Col>
                            <Col className="movie-page__similar-container"
                                style={{
                                    display: 'flex',
                                    marginTop: '1.2rem',
                                    marginBottom: '2rem',
                                    justifyContent: 'space-between'

                                }}>
                                {similarList && similarList.map(item => {
                                    return <Similar key={item}
                                        imdbID={item} />
                                })}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col style={{
                backgroundColor: '#111111',
                height: '4rem',
                lineHeight: '4rem',
                textAlign: 'center'
            }}>
                <span>Richbee Shows</span>
            </Col>
        </Row >
    )
}

export default MoviePage
