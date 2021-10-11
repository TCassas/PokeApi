import React from 'react'
import index from '../../components/Home/index'
import HomeLogic from '../../logic/Home/HomeLogic'

const Home = () => {
    const { List, Search, Pagination } = index
    const { search, handleSearch, pokeArray, handleSubmit, pagination, offset, maxOffset, loading } = HomeLogic()

    return (
        <section>
            <Search
                search={ search }
                change={ handleSearch }
                submit={ handleSubmit }
            />

            <List
                pokemon={ pokeArray }
            />

            {pokeArray.length >= 20 &&
                <Pagination
                    handlePaginate={ pagination }
                    offset={ offset }
                    maxOffset={ maxOffset }
                    loading={ loading }
                />
            }
        </section>
    )
}

export default Home