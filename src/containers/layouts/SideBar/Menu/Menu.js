import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = (props) => {
    return (
        <Container>
            <MenuLink title="Dashboard" icon={'home'} href="/" active={props.sidebar === 'dashboard' ? true : ""} />
            <MenuLink title="Product" icon={'file-multiple'} href="/products" active={props.sidebar === 'products' ? true : ""} />
            <MenuLink title="User" icon={'gift'} href="/users" active={props.sidebar === 'users' ? true : ""} />
            <MenuLink title="Role" icon={'bank'} href="/roles" active={props.sidebar === 'roles' ? true : ""} />
            <MenuLink title="Settings" icon={'cog'} />
        </Container>
    )
}

export default Menu
