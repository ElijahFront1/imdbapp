import React from 'react'

function imdbRateBlock({ imdbRating }) {
    return (
        <span style={{
            minHeight: '1.6rem',
            display: 'inline-block',
            minWidth: '4.4rem',
            color: 'black',
            fontWeight: 900,
            fontSize: '0.7rem',
            backgroundColor: '#FAC539',
            textAlign: 'center',
            borderRadius: 8,
            lineHeight: '1.7rem',
            borderRight: 'none',
        }}>
            IMDb {imdbRating}
        </span>
    )
}

export default imdbRateBlock
