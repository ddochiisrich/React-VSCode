import axios from 'axios';
import { useState, useEffect } from 'react';
import BoardListTable from '../components/BoardListTable.js';

function BoardListPage() {
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    const res = await axios.get('http://localhost:3010/');
    setBoardList(res.data);
  };

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <>
      {/* <!-- content --> */}
      <div className="row my-5" id="global-content">
        <div className="col-10 offset-1">
          <div className="row text-center">
            <div className="col">
              <h2 className="fs-3 fw-bold">게시 글 리스트</h2>
            </div>
          </div>
          <form
            name="searchForm"
            id="searchForm"
            action="#"
            className="row justify-content-center my-3"
          >
            <div className="col-auto">
              <select name="type" className="form-select">
                <option value="title">제목</option>
                <option value="writer">작성자</option>
                <option value="content">내용</option>
              </select>
            </div>
            <div className="col-4">
              <input type="text" name="keyword" className="form-control" />
            </div>
            <div className="col-auto">
              <input type="submit" value="검 색" className="btn btn-primary" />
            </div>
          </form>
          <div className="row">
            <div className="col text-end">
              <a href="#" className="btn btn-outline-success">
                글쓰기
              </a>
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <table className="table">
                <thead>
                  <tr className="table-dark">
                    <th>NO</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {boardList.map((board, index) => (
                    <tr key={index}>
                      <td>{board.no}</td>
                      <td>{board.title}</td>
                      <td>{board.writer}</td>
                      <td>{board.reg_date}</td>
                      <td>{board.read_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default BoardListPage;
