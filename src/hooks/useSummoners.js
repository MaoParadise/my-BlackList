import { useState, useEffect, useCallback } from 'react';
import champion from '../utils/champion.json';

const useSummoners = (SummonerName) => {

    const championList = champion;
    const baseURL = process.env.REACT_APP_API_URL;
    const [summoners, setSummoners]= useState([]);
    const [matchess, setMatches ] = useState([]);
    const [whoWin, setWhoWin] = useState([]);

    const getInformation = useCallback( async (SummonerName) => {
        try {
            setWhoWin([]);
            if (SummonerName) {
                let id = '';
                let puuid = '';
                let summoner = '';
                await fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SummonerName}?api_key=${baseURL}`)
                    .then(response => response.json())
                    .then(data => {
                        id = data.id;
                        puuid = data.puuid;
                        summoner = data;
                        setSummoners(data);

                    })
                await fetch(`https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${baseURL}`)
                    .then(response => response.json())
                    .then(data => {
                        let league = data;
                        summoner = {
                            ...summoner,
                            league
                        };
                    })
                await fetch(`https://la2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${baseURL}`)
                    .then(response => response.json())
                    .then(data => {
                        let mastery = data;
                        console.log({
                            ...summoner,
                            mastery
                        })
                        setSummoners({
                            ...summoner,
                            mastery
                        })
                    })
                await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${baseURL}`)
                    .then(response => response.json())
                    .then(data => {
                        let matchIds = data;
                        let matches = [];
                        matchIds.forEach((matchId) => {
                            fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${baseURL}`)
                                .then(response => response.json())
                                .then(data => {
                                    let match = data;
                                    matches.push(match);
                                    let who = [];
                                    console.log('--------------');
                                    if(matches[0] && matches[1] && matches[2] && matches[3] && matches[4]) {
                                        let match1, match2, match3, match4, match5;
                                        match1 = matches[0].info.participants.filter(participant => (participant.puuid === puuid));
                                        match2 = matches[1].info.participants.filter(participant => (participant.puuid === puuid));
                                        match3 = matches[2].info.participants.filter(participant => (participant.puuid === puuid));
                                        match4 = matches[3].info.participants.filter(participant => (participant.puuid === puuid));
                                        match5 = matches[4].info.participants.filter(participant => (participant.puuid === puuid));

                                        who = [
                                            {
                                                'champion': match1[0].championId,
                                                'win': match1[0].win
                                            },
                                            {
                                                'champion': match2[0].championId,
                                                'win': match2[0].win
                                            },
                                            {
                                                'champion': match3[0].championId,
                                                'win': match3[0].win
                                            },
                                            {
                                                'champion': match4[0].championId,
                                                'win': match4[0].win
                                            },
                                            {
                                                'champion': match5[0].championId,
                                                'win': match5[0].win
                                            }
                                        ]

                                        setWhoWin(
                                            who
                                        );
                                        
                                    }



                                    setMatches([
                                        ...matches,
                                        match
                                    ])
                                    
                                })       
                        });
                    })
                
                    
            }
        } catch (error) {
            return true;
        }

    },[baseURL])

    useEffect(  () => { // se puede usar useEffect para hacer request a una api 
        getInformation(SummonerName);
    }, [SummonerName, getInformation])


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

    const getMaxLeague = (league) => {
        let numbertier;
        let numbertier2;

        try{

            if(league[0] && !league[1]){
                return [{
                    tier: league[0].tier,
                    queue: league[0].queueType,
                    rank: league[0].rank,
                    }];
            }

            switch (league[0].tier) {
                case 'BRONZE':
                    numbertier = 1;
                    break;
                case 'SILVER':
                    numbertier = 2;
                    break;
                case 'GOLD':
                    numbertier = 3;
                    break;
                case 'PLATINUM':
                    numbertier = 4;
                    break;
                case 'DIAMOND':
                    numbertier = 5;
                    break;
                case 'MASTER':
                    numbertier = 6;
                    break;
                case 'GRANDMASTER':
                    numbertier = 7;
                    break;
                case 'CHALLENGER':
                    numbertier = 8;
                    break;
                default:
                    numbertier = 0;
                    break;
            }
    
            switch (league[1].tier) {
                case 'BRONZE':
                    numbertier2 = 1;
                    break;
                case 'SILVER':
                    numbertier2 = 2;
                    break;
                case 'GOLD':
                    numbertier2 = 3;
                    break;
                case 'PLATINUM':
                    numbertier2 = 4;
                    break;
                case 'DIAMOND':
                    numbertier2 = 5;
                    break;
                case 'MASTER':
                    numbertier2 = 6;
                    break;
                case 'GRANDMASTER':
                    numbertier2 = 7;
                    break;
                case 'CHALLENGER':
                    numbertier2 = 8;
                    break;
                default:
                    numbertier2 = 0;
                    break;
            }

    
            if (numbertier > numbertier2) {
                return [{
                    tier: league[0].tier,
                    queue: league[0].queueType,
                    rank: league[0].rank,
                    }];
            } else if (numbertier < numbertier2) {
                return [{
                        tier: league[1].tier,
                    queue: league[1].queueType,
                    rank: league[1].rank,
                    }];
            } else if (numbertier === numbertier2) {
                if (league[0].queueType === 'RANKED_SOLO_5x5') {
                    return [{
                        tier: league[0].tier,
                        queue: league[0].queueType,
                        rank: league[1].rank,
                    }];
                } else {
                    return [{
                        tier: league[1].tier,
                        queue: league[1].queueType,
                        rank: league[1].rank,
                    }];
                }
            }
        }catch(error){
            console.log(error);
            return [];
        }

        
    }


    return {
        getInformation,
        getMasteryPool,
        getMaxLeague,
        summoners,
        matchess,
        whoWin,
        championList
    }

}

export default useSummoners;