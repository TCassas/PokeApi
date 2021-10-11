import React from 'react'

const Search = (props)  => {
    return (
        <form onSubmit={ props.submit }>
            <label>Search</label>
            <input
                type="text"
                onChange={ props.change }
            />
        </form>
    )
}

export default Search