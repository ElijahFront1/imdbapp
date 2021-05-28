import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../styles/components/find-movie-card.scss'
import ImdbRateBlock from './ImdbRateBlock'

function FindMovieCard({ movie }) {
    return (
        <Col className="find-movie-card">
            <Row>
                <NavLink to={{ pathname: "/moviepage" }}
                    style={{
                        display: 'flex',
                        width: '100%',
                        textDecoration: 'none',
                    }}>
                    <Card
                        style={{
                            width: '100%',
                            borderRadius: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 15,
                            color: '#FEFEFE',
                            textAlign: 'left',
                        }}>
                        <Card.Img src={movie.Poster} style={{
                            width: 95,
                            height: 141,
                        }} />
                        <Card.Body>
                            <Card.Title style={{
                                fontSize: '1.2rem',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <span>{movie.Title}</span>
                                <ImdbRateBlock imdbRating={movie.imdbRating} />
                            </Card.Title>
                            <Card.Title className="find-movie-card__span-wrapper"
                                style={{
                                    fontSize: '0.7rem',
                                    color: '#FBFBFB',
                                }}>
                                <span>{movie.Type}</span>
                                <span>{movie.Genre}</span>
                                <span style={{ border: 'none' }}>{movie.Year}</span>
                            </Card.Title>
                            <Card.Text style={{
                                fontSize: '0.7rem',
                                paddingTop: '0.7rem',
                                borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                            }}>
                                <span style={{
                                    borderRight: '1px solid #fefefe',
                                    paddingRight: '0.6rem',
                                    marginRight: '0.6rem',
                                }}>{movie.Metascore}</span>
                                <span style={{ border: 'none' }}>{movie.Awards}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </NavLink>
            </Row>
        </Col >
    )
}

export default FindMovieCard
