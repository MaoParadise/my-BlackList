import { useState, useEffect } from 'react';
import champion from '../utils/champion.json';

const useSummoners = (SummonerName) => {

    const baseURL = process.env.REACT_APP_API_URL;
    const [summoners, setSummoners]= useState([]);

    
    const getInformation = async (SummonerName) => {
        if(SummonerName){
            let id = ''
            let summoner = '';
            await fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SummonerName}?api_key=${baseURL}`)
                .then(response => response.json())
                .then(data => {
                    id = data.id;
                    summoner = data;
                    setSummoners(data); 
                    
                })
            await fetch(`https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${baseURL}`)
                .then(response => response.json())
                .then(data => {
                    let league = data;
                    summoner = {...summoner, league};
                })
            await fetch(`https://la2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${baseURL}`)
                .then(response => response.json())
                .then(data => {
                    let mastery = data;
                    console.log({...summoner, mastery});
                    setSummoners({...summoner, mastery})
                })
        }
    }

    

    useEffect(  () => { // se puede usar useEffect para hacer request a una api 
        getInformation(SummonerName);
    }, [SummonerName])


    const getMasteryPool = (limit) => {
        let pool = [];
        if(summoners.mastery){
            summoners.mastery.forEach(element => {
                pool.push({
                    'id' : element.championId,
                    'name': champion[element.championId].id,
                    'image': champion[element.championId].image,
                });
            });
            return pool.slice(0, limit);
        }else{
            return [];
        }
    }

  



    return {
        getMasteryPool,
        summoners
    }

}

export default useSummoners;