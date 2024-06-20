import { useState, useEffect } from 'react';
import axios from 'axios';

import BoardListTable from '../components/BoardListTable.js';

const BoardListPage = () => {

  const [boardList, setBoardList] = useState([]);

  const getBaordList = async() => {
    const res = await axios.get("http://localhost:3010/");
    console.log(res.data);
    setBoardList(res.data)
  }


  
  useEffect(() => {
    getBaordList();
  }, []);

  return(
    <>
      <BoardListTable bList={boardList}/>
    </>
  );
  
}

export default BoardListPage;