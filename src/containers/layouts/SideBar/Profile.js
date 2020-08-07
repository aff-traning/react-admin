import React from 'react'
import styled from 'styled-components'
import Image from '../../../assets/img/avatar.png'

const Container = styled.div`
    margin-top: 5rem;
`

const ProfileImg = styled.img`
    height: 5rem;
    width: 100px;
    height: 100px;
    border-radius: 50%;
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`

const Profile = () => {
    return (
        <Container>
            <ProfileImg src={Image} />
            <ProfileName>Ly Truong</ProfileName>
        </Container>
    )
}

export default Profile
