import styled from 'styled-components'

export const Container = styled.div`
    background-color: #5636D3;
    width: 100%;
    height: 30%;

    .logo {
        margin-top: 32px;
        margin-left: 1px;
    }

    .Header {
        display: flex;
        width: 100%;
        height: 60px;
        position: absolute;
        justify-content: space-between;
        padding: 0 160px;
    }

    .Header div {
        display: flex;
        align-items: center;
        width: 250px;
        justify-content: space-between;
    }

    .btnCadastrar {
        color: #FFFFFF;
    }

    .btnCadastrar i {
        width: 14px;
        color: #FFFFFF;
    }

    .Cards {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 160px;
    }

    button {
        margin-top: 32px;
        outline: none;
        border: none;
        background: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover {
        color: #CCCCCC;
    }
`