import { useState, useCallback } from 'react';
import demoList from '../utils/demoList.json';

const useList = () => {
    const [summonerSearch, setSummonerSearch] = useState('');
    const [listSummoner, setListSummoner] = useState(demoList);
    const [selectSummoner, setSelectSummoner] = useState('');


    const handleSearch = useCallback((event) => {
        setSummonerSearch(event.target.value);
    }, []);

    const addSummoner = (summonerName) => {
        setListSummoner([...listSummoner, {
            SummonerName: summonerName,
        }]);
    }

    const removeSummoner = (index) => {
        const newList = [...listSummoner];
        newList.splice(index, 1);
        setListSummoner(newList);
    }

    const setSummonerSelected = (summonerName) =>{
        setSelectSummoner(summonerName);
    }


    return{
        listSummoner,
        addSummoner,
        removeSummoner,
        selectSummoner,
        setSummonerSelected,
        summonerSearch,
        setSummonerSearch,
        handleSearch
    }
}

export default useList;