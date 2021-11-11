import React from 'react';
import '../styles/Character-Information.css';
import summonerLogo from '../assets/defaultLogo.jpg';
import useSummoners from '../hooks/useSummoners';
import RankedEmblems from '../components/ranked-emblems';
const CharacterInformation = () => {

    const { summoners } = useSummoners('Twitch The Skytt');

    return (
        <div className='principal-information' >
            <div className='summoner-closeness'>
                <h4> Closeness </h4>
                <h1> Highly risk </h1>
            </div>
            <div className="toxic-summoner">
                <img className="summoner-logo" src={summonerLogo} alt='summonerLogo' />
                <h3> { summoners.name } </h3>
                <h3>
                    {
                        ( summoners.league)
                        ? summoners.league.map(league => {
                            return <p>{league.tier} {league.rank} </p>
                        })
                        : 'Leagues not founded' 
                    }
                </h3>
                <h2> TOXICITY </h2>
                <h1> 82% </h1>
            </div>
            <div className='summoner-league'>
                <h1> League </h1>
                { (summoners.league) ? <RankedEmblems props={summoners.league[0].tier} /> : '' }      
                <h4> Division : ∞ </h4>
            </div>
        </div>
    );
}

export default CharacterInformation;
