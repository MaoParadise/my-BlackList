import React, { useContext } from 'react';
import '../styles/Character-Information.css';
import useSummoners from '../hooks/useSummoners';
import RankedEmblems from '../components/ranked-emblems';
import ProfileIcons from '../components/profile-icons';
import GlobalContext from '../context/globalContext';


const CharacterInformation = () => {

    let i = 0;
    const { selectSummoner, selectToxicity} = useContext(GlobalContext);
    const { summoners, getMasteryPool,getMaxLeague, matchess,whoWining,championList } = useSummoners(selectSummoner);
    

    return (
        <div className='principal-information' >
            <div className='summoner-closeness'>
                {
                    whoWining(summoners)
                    // (summoners && matchess)
                    // ? whoWin(matchess, summoners ).map(match => {
                    //     return <div className='summoner-matches'>
                    //                 <img src={`${process.env.REACT_APP_PUBLIC_URL}/publicAssets/champion/${championList[match.champion].image.full}`} alt="" />
                    //                 <p>{ (match.win)? 'VICTORIA' :'DERROTA'}</p>
                    //             </div>
                    // })
                    // : ''
                }       
            </div>
           
            <div className="toxic-summoner">
                {
                   (selectToxicity >= 0 && selectToxicity < 35)
                     ? <div className="safe-logo"><i className="fas fa-first-aid"></i> <p> Safe </p></div>
                     : (selectToxicity >= 35 && selectToxicity < 65)
                        ? <div className='warning-logo'> <i className="fas fa-exclamation-triangle"></i> <p> Warning </p> </div>
                        : (selectToxicity >= 65 && selectToxicity <= 100)
                            ? <div className='toxic-logo'> <i className="fas fa-radiation-alt"></i> <p> Radioactive </p> </div> 
                            : ''
                }
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
                <h3 className='toxic-lvl'> { selectToxicity } % </h3>
            </div>
            <div className='summoner-league'>
                <h1> League </h1>
                { (summoners.league && summoners.league.length > 0)
                ? getMaxLeague(summoners.league).map(league => {
                    return  <div className='summoner-league-information' key={league.tier}>
                               
                                <RankedEmblems props={league.tier} />
                                <p> Division : { league.rank } </p>
                                <p className='queue' >{ 
                                    (league.queue === 'RANKED_SOLO_5x5')
                                    ? 'SoloQ'.toUpperCase()
                                    : 'Flex'.toUpperCase()
                                }</p>
                            </div> 
                 })
                : <h3> 'NO LEAGUE INFORMATION' </h3> 
                }      
                                
            </div>
        </div>
    );
}

export default CharacterInformation;
