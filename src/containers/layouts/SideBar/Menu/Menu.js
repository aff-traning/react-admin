import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MenuLink from './MenuLink'
import styled from 'styled-components'
import { getListSupplier } from '../../../../actions/product'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    const viewPage = useSelector(state => state.view.view);

    return (
        <Container>
            <MenuLink title="Dashboard" icon={'home'} href="/" active={viewPage === 'dashboard' ? true : ""} />
            <MenuLink title="Product" icon={'file-multiple'} href="/products" active={viewPage === 'products' ? true : ""} />
            <MenuLink title="User" icon={'gift'} href="/users" active={viewPage === 'users' ? true : ""} />
            <MenuLink title="Role" icon={'bank'} href="/roles" active={viewPage === 'roles' ? true : ""} />
            <MenuLink title="Settings" icon={'cog'} />
        </Container>
    )
}

export default Menu
