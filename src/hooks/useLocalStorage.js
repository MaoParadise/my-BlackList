import React from "react";

const useLocalStorage = (itemList, initialList) =>{

    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        try{
          const localStorageItem = localStorage.getItem(itemList);
          let parsedItem;
        
          if(!localStorageItem){ 
        
            localStorage.setItem(itemList, JSON.stringify(initialList));
            parsedItem = initialList;
        
          }else{
        
            parsedItem = JSON.parse(localStorageItem);
        
          }

          setList(parsedItem);
        }catch(error){
          console.log(error);
        }

    }, [itemList, initialList]);
    
  
  
    const saveList = (newItemList) => {
      try{
        const stringifiedItem = JSON.stringify(newItemList);
        setList(newItemList);
        localStorage.setItem(itemList, stringifiedItem);
      }catch(error){
        console.log(error);
      }
    }
  
    return {
      list,
      setList,
      saveList
    };
  
  }

  export { useLocalStorage }