import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { getListSupplier } from '../../../../actions/product'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    // const dispatch = useDispatch();
    // const accessToken = 'Bearer ' + useSelector(state => state.auth.accessToken);
    // const listSupplier = async () => dispatch(getListSupplier({ keyword: null, sorting: 'name', skipCount: 0, maxResultCount: 12, accessToken: accessToken }));

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
