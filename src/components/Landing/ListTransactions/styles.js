import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    top: 40px;
    margin-left: 12%;
    width: 76%;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: default;

    .content-table {
        margin: 20px 0px;
        border-spacing: 0 10px;
    }

    .content-table thead tr {
        text-align: left;
        color: #969CB2;
        font-weight: 400;
    }

    .content-table tbody tr {
        background-color: white;
    }

    .content-table td, .content-table th {
        padding: 10px 15px;
    }

    .price-positive {
        color: #12A454;
    }

    .price-negative {
        color: #E83F5B;
    }

    .date {
        color: #969CB2;
    }
`