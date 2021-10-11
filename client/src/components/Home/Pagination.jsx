import React from 'react'
import styled from 'styled-components'

const Pagination = (props) => {
    return (
        <PaginationComponent>
            <button
                onClick={props.handlePaginate.prev}
                disabled={props.offset === 0}
            >
                anterior
            </button>
            <div>{(props.offset / 20) + 1}</div>
            <button
                onClick={props.handlePaginate.next}
                disabled={props.offset === props.maxOffset || props.loading}
            >
                siguiente
            </button>
        </PaginationComponent>
    )
}

const PaginationComponent = styled.div`
    display: grid;
    grid-template-columns: 100px 100px 100px;

    div {
        text-align: center;
    }
`

export default Pagination