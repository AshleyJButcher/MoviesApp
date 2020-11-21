import React from 'react'

const Movie = ({ name, year }) => {
    return (
        <div className="">
            <div className="card" style={{ maxWidth: "10rem" }}>

                <p>{name}</p>
                <p>{year}</p>
            </div>
        </div>

    )
}

export default Movie
