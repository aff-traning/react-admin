import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Dashboard" icon={'home'} href="/" active />
            <MenuLink title="Product" icon={'file-multiple'} href="/products" />
            <MenuLink title="User" icon={'gift'}  href="users" />
            <MenuLink title="Role" icon={'bank'} href="roles" />
            <MenuLink title="Settings" icon={'cog'} />
        </Container>
    )
}

export default Menu
