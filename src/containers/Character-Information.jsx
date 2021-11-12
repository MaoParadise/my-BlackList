import React from 'react';
import '../styles/Character-Information.css';
import useSummoners from '../hooks/useSummoners';
import RankedEmblems from '../components/ranked-emblems';
import ProfileIcons from '../components/profile-icons';
const CharacterInformation = () => {

    const { summoners, getMasteryPool,getChampionInformation } = useSummoners('jokêr');

    return (
        <div className='principal-information' >
            <div className='summoner-closeness'>
                <h4> Closeness </h4>
                <h1> Highly risk </h1>
                
            </div>
           
            <div className="toxic-summoner">
                <ProfileIcons props={summoners.profileIconId} />
                
                <h3> { summoners.name } </h3>
                <h3>
                    {
                        
                        (summoners.mastery)
                        ? getMasteryPool(3).map(mastery => {
                            return <div key={mastery.id}>
                                        <p>{mastery.name}</p>
                                    </div>
                        })
                        : <p> No Masteries </p>
                    }
                </h3>
                <h2> TOXICITY </h2>
                <h1> 82% </h1>
            </div>
            <div className='summoner-league'>
                <h1> League </h1>
                { (summoners.league)
                ? <RankedEmblems props={summoners.league[0].tier} /> 
                : ''
                }      
                <h4> Division : ∞ </h4>
            </div>
        </div>
    );
}

export default CharacterInformation;
