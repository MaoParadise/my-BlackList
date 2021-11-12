import React, { useContext } from 'react';
import '../styles/side-left-list.css';
import GlobalContext from '../context/globalContext';

const SideLeftList = () => {

    const { listSummoner, setSummonerSelected } = useContext(GlobalContext);

    return (
        <div className='list-container'>
            <ul className="list">
                {
                    listSummoner.map(summoner => (
                        <li key={summoner.SummonerName} onClick={ () => setSummonerSelected(summoner.SummonerName) }> {summoner.SummonerName} </li>
                    ))
                }
            </ul>
           
        </div>
    );
}

export default SideLeftList;
