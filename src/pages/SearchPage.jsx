import React, { useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import FindMovieCard from '../components/FindMovieCard';
import Search from '../components/Search';
import Video from '../video/background.mp4';
import '../styles/pages/search-page.scss'
import { fetchMovie } from '../api/api.js';

function SearchPage() {

    const [searchValue, setSearchValue] = useState('');
    const [movie, setMovie] = useState(true);
    const [isLoad, setLoad] = useState(false);

    const fetchMovieHandler = (searchValue) => {
        setLoad(true)
        fetchMovie(searchValue).then((response) => {
            setMovie(response)
            setLoad(false)
        })
    }

    return (
        <Row className="search-page" align="middle">
            <Col sm={{ span: 12 }} lg={{ span: 8, offset: 2 }}>
                <Row style={{
                    height: '100vh',
                }}>
                    <Col className="search-page__title"
                        style={{
                            color: '#FBFBFB',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                        }}>
                        <h1 style={{
                            fontWeight: 900,
                        }}>
                            Unlimited movies, TV shows, and more.
                        </h1>
                        <h3 style={{
                            fontWeight: 500,
                            paddingTop: '1.2rem',
                            paddingBottom: '3.1rem',
                        }}>
                            Watch anywhere. Cancel anytime.
                        </h3>
                    </Col>
                    <Col sm={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}
                        style={{
                            color: '#FBFBFB',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                        }}>
                        <Row style={{ justifyContent: 'center' }}>
                            {isLoad && <Spinner className="spinner"
                                as="span"
                                animation="border"
                                size="xs"
                                role="status"
                                aria-hidden="true"
                                style={{
                                    position: 'absolute',
                                    right: '-34px',
                                    top: '3px'
                                }}
                            />}
                            <Search
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                fetchMovieHandler={fetchMovieHandler}
                            />
                            {!!movie.Title && <FindMovieCard movie={movie} />}
                            {!movie && <span
                                style={{
                                    position: 'absolute',
                                    top: '4rem',
                                }}>
                                Sorry, could not find anything : (
                            </span>}
                        </Row>
                    </Col>
                </Row>
            </Col>
            <video
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1',
                }}>
                <source src={Video} type="video/mp4" />
            </video>
        </Row >
    )
}

export default SearchPage

