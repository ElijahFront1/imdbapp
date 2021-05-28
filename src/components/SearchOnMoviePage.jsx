import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';

function SearchOnMoviePage(props) {
    return (
        <InputGroup className="search-on-movie-page"
            style={{
                borderRadius: 30,
                background: 'white',
                backgroundColor: '#1B1919',
            }}>
            <InputGroup.Append>
                <Button variant="primary"
                    style={{
                        borderTopLeftRadius: 30,
                        borderBottomLeftRadius: 30,
                        width: '1.5rem',
                        paddingLeft: '1.3rem',
                        fontSize: '0.9rem',
                        backgroundColor: '#1B1919',
                        border: 'none',
                    }}>
                    <Search style={{ color: '#5F5F5F ' }} />
                </Button>
            </InputGroup.Append>
            <FormControl
                style={{
                    background: 'rgba(0, 0, 0, 0)',
                    border: "none",
                    color: '#FEFEFE',
                }}
                placeholder="Type here smth..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
        </InputGroup>
    )
}

export default SearchOnMoviePage
