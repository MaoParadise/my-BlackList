import { useState, useEffect } from 'react';

const useSummoners = (SummonerName) => {

    const [summoners, setSummoners]= useState([]);

    
    const getInformation = async (SummonerName) => {
        let id = ''
        let summoner = ''
        await fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SummonerName}?api_key=RGAPI-60927491-eb4a-45a7-94a4-58b056d612d4`)
            .then(response => response.json())
            .then(data => {
                id = data.id;
                summoner = data;
                setSummoners(data); 
                
            })
        await fetch(`https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=RGAPI-60927491-eb4a-45a7-94a4-58b056d612d4`)
            .then(response => response.json())
            .then(data => {
                let league = data
                console.log({...summoner, league})
                setSummoners({...summoner, league})
            })
    }


    useEffect(  () => { // se puede usar useEffect para hacer request a una api 
        getInformation(SummonerName);
    }, [SummonerName])


    return {
        summoners
    }

}

export default useSummoners;