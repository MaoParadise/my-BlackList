import React from 'react';
import '../styles/Character-Information.css';
import useSummoners from '../hooks/useSummoners';
import RankedEmblems from '../components/ranked-emblems';
import ProfileIcons from '../components/profile-icons';
const CharacterInformation = () => {

    const { summoners, getMasteryPool } = useSummoners('Windstyleee');

    return (
        <div className='principal-information' >
            <div className='summoner-closeness'>
                <h4> Closeness </h4>
                <h1> Highly risk </h1>
                
            </div>
           
            <div className="toxic-summoner">
                <ProfileIcons props={summoners.profileIconId} />
                <h3> { summoners.name } </h3>
                <div className='toxic-mastery'>
                    {
                        
                        (summoners.mastery)
                        ? getMasteryPool(3).map(mastery => {
                            return <div className='champ-box' key={mastery.id}>
                                        <img src={`${process.env.REACT_APP_PUBLIC_URL}/publicAssets/champion/${mastery.image.full}`} alt="" />
                                        <p>{mastery.name}</p>
                                    </div>
                        })
                        : <p> No Masteries </p>
                    }
                </div>
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
