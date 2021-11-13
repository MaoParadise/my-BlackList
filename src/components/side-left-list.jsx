import React, { useContext } from 'react';
import '../styles/side-left-list.css';
import GlobalContext from '../context/globalContext';

const SideLeftList = () => {

    const { listSummoner, setSummonerSelected,removeSummoner } = useContext(GlobalContext);

    return (
        <div className='list-container'>
            <ul className="list">
                {
                    listSummoner.map(summoner => (
                        <li className='list-summoners' key={summoner.SummonerName} >
                            <div onClick={ () => setSummonerSelected(summoner.SummonerName) } >{summoner.SummonerName}</div>
                            <button onClick={ () => removeSummoner(summoner.SummonerName) } > <span className="material-icons-round"> cancel </span> </button>
                        </li>
                    ))
                }
            </ul>
           
        </div>
    );
}

export default SideLeftList;
