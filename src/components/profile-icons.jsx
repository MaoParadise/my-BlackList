import React from 'react';


const ProfileIcons = ({props}) => {

    let profileImage = '';

    (props)
    ? profileImage = `${process.env.REACT_APP_PUBLIC_URL}/publicAssets/profileicon/${props}.png`
    : profileImage = `${process.env.REACT_APP_PUBLIC_URL}/publicAssets/profileicon/0.png`

    return (
        <img className='summoner-logo' src={profileImage} alt='summonerLogo' />
    );
}

export default ProfileIcons;