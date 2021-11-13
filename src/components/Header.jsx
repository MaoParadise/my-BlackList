import React, { useContext } from 'react';
import '../styles/Header.css';
import GlobalContext from '../context/globalContext'

const Header = () => {

    const {summonerSearch, addSummoner, handleSearch, isLoading, error, success} = useContext(GlobalContext);

    return (
        <nav className="Navbar">
            <input type="search" className='navbar-search' name="navbar-search" value={summonerSearch} onChange={handleSearch}/>
            <button className='addlist-button' onClick={ () => addSummoner(summonerSearch) }> Add to the Black List + </button>
            <button id='status-button' className={`status-button
                ${(error)
                        ? 'status-button-error'
                        : (success) 
                            ? 'status-button-success'
                            : '' }`
            }>
                
            {
                (isLoading)
                ? `searching...`
                : (error)
                    ? `Summoner Not Found`
                    : (success) 
                        ? `Summoner Founded`
                        : `Summoner Founded ?`
            }
            </button>
        </nav>
    );
}

export default Header;
