import { useState, useCallback } from 'react';
import demoList from '../utils/demoList.json';
import useSummoners from './useSummoners';

const useList = () => {
    const [summonerSearch, setSummonerSearch] = useState('');
    const [listSummoner, setListSummoner] = useState(demoList);
    const [selectSummoner, setSelectSummoner] = useState('');
    const [selectToxicity, setSelectToxicity] = useState(0);
    const { getInformation } = useSummoners(selectSummoner);


    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const handleSearch = useCallback((event) => {
        setSummonerSearch(event.target.value);
        document.getElementById('status-button').classList.remove('status-button-error');
        document.getElementById('status-button').classList.remove('status-button-success');
        setSuccess(false);
        setError(false);
    }, []);

    const addSummoner = async (summonerName) => {
        let check = false;
        setIsLoading(true);
        check = await checkSummoner(summonerName);
        setIsLoading(false);
        if(check){
            setListSummoner([...listSummoner, {
                SummonerName: summonerName,
            }])
            setSuccess(true);
            setError(false);    
        }else{
            console.log('el summoner no se encontro');
            setSuccess(false);
            setError(true);
        }
         
            
    }

    const checkSummoner = async (summonerName) => {
        if(await getInformation(summonerName)) {
            return false;
        }else{
            return true;   
        }
    }

    const removeSummoner = (summonerName) => {
        const newList = listSummoner.filter(summoner => summoner.SummonerName !== summonerName);
        setListSummoner(newList);
    }

    const setSummonerSelected = (summonerName, toxicitylvl) =>{
        
        setSelectSummoner(summonerName);

        setSelectToxicity(toxicitylvl);
    }


    return{
        listSummoner,
        addSummoner,
        removeSummoner,
        selectSummoner,
        setSummonerSelected,
        summonerSearch,
        setSummonerSearch,
        handleSearch,
        checkSummoner,
        isLoading,
        error,
        success,
        selectToxicity
    }
}

export default useList;