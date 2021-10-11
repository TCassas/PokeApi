import { useState, useEffect } from 'react'
import Axios from 'axios'

const HomeLogic = () => {
    const [search, setSearch] = useState("")
    const [offset, setOffset] = useState(0)
    const [pokeArray, setPokeArray] = useState([{}])
    const [maxOffset, setMaxoffset] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetch = async(offset) => {
            const data = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)    
            const response = await formatPokeRequest(data.data)

            setPokeArray(response)
            setMaxoffset(data.data.count / 20)
        }

        fetch(offset)
    }, [offset])

    const handleSearch = async(e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(search !== "") {
            try {
                const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${search}/`)   
                data.name !== "" && setPokeArray([{ name: data.species.name, types: data.types}])
            } catch (error) {
                console.log(error)
            }
        } else {
            const response = await fetchData(offset)

            setPokeArray(response)
        }
    }

    const pagination = {
        next: async() => {
            setLoading(true)
            setOffset(offset + 20)
            const data = await fetchData(offset)
            setLoading(false)
            return data
        },
        prev: async() => {
            if(offset - 20 >= 0) {
                setOffset(offset - 20)
                const data = await fetchData(offset)
            
                return data
            }
        }
    }

    return { search, handleSearch, pokeArray, handleSubmit, pagination, offset, maxOffset, loading }
}

const fetchData = async(offset) => {
    const data = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    
    const response = await formatPokeRequest(data.data)

    return response
}

const formatPokeRequest = async(req) => {
    const { results } = req
    const pokeArray = []

    for(let pokemon of results) {
        const data = await formatPoke(pokemon)
        pokeArray.push(data)
    }

    return pokeArray
}

const formatPoke = async(pokemon) => {
    const { data } = await Axios.get(pokemon.url)
        
    return { name: pokemon.name, types: data.types }
}

export default HomeLogic