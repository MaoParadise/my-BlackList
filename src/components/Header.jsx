import React, { useContext } from 'react';
import '../styles/Header.css';
import GlobalContext from '../context/globalContext'

const Header = () => {

    const {summonerSearch, addSummoner, handleSearch} = useContext(GlobalContext);

    return (
        <nav className="Navbar">
            <input type="search" className='navbar-search' name="navbar-search" value={summonerSearch} onChange={handleSearch}/>
            <button className='addlist-button' onClick={ () => addSummoner(summonerSearch) }> Add to the Black List + </button>
            <button className='status-button' > Summoner Found ? </button>
        </nav>
    );
}

export default Header;
