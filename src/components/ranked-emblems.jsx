import React from 'react';
import leagueSummoner from '../assets/leagueDefault.png';
import emblemBronze from '../assets/ranked-emblems/Emblem_Bronze.png';
import emblemSilver from '../assets/ranked-emblems/Emblem_Silver.png';
import emblemGold from '../assets/ranked-emblems/Emblem_Gold.png';
import emblemPlatinum from '../assets/ranked-emblems/Emblem_Platinum.png';
import emblemDiamond from '../assets/ranked-emblems/Emblem_Diamond.png';
import emblemMaster from '../assets/ranked-emblems/Emblem_Master.png';
import emblemGrandMaster from '../assets/ranked-emblems/Emblem_Grandmaster.png';
import emblemChallenger from '../assets/ranked-emblems/Emblem_Challenger.png';


// con un hook mostrar el mejor ranking de los dos ( por hacer)

const RankedEmblems = ({props}) => {
    let defaultImage = '';
    switch(props) {
        case 'BRONZE':
            defaultImage = emblemBronze
            break;
        case 'SILVER':
            defaultImage = emblemSilver
            break;
        case 'GOLD':
            defaultImage = emblemGold
            break;
        case 'PLATINUM':
            defaultImage = emblemPlatinum
            break;
        case 'DIAMOND':
            defaultImage = emblemDiamond
            break;
        case 'MASTER':
            defaultImage = emblemMaster
            break;
        case 'GRANDMASTER':
            defaultImage = emblemGrandMaster
            break;
        case 'CHALLENGER':
            defaultImage = emblemChallenger
            break;
        default:
            defaultImage = leagueSummoner;
    }
    return (
        <img className='league-summoner' src={defaultImage} alt={props} />
    );
}

export default RankedEmblems;
