import React from 'react';
import '../styles/Character-Information.css';
import summonerLogo from '../assets/defaultLogo.jpg';
import leagueSummoner from '../assets/leagueDefault.png';

const CharacterInformation = () => {
    return (
        <div className='principal-information' >
            <div className='summoner-closeness'>
                <h4> Closeness </h4>
                <h1> Highly risk </h1>
            </div>
            <div className="toxic-summoner">
                <img className="summoner-logo" src={summonerLogo} alt='summonerLogo' />
                <h3> Windstyleee </h3>
                <h2> TOXICITY </h2>
                <h1> 82% </h1>
            </div>
            <div className='summoner-league'>
                <h1> League </h1>
                <img className="league-summoner" src={leagueSummoner} alt="leagueSummoner" />
                <h4> Division : ∞ </h4>
            </div>
        </div>
    );
}

export default CharacterInformation;
