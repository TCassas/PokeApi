import React from 'react'

const List = (props) => {
    return (
        <section>
            <h1>List</h1>
            <ul>
                {props.pokemon.map(pokemon =>
                    <li key={pokemon.url}>{pokemon.name}</li>
                )}
            </ul>
        </section>
    )
}

export default List