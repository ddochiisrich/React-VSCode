import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function BoardWriteFormPage() {

  const [values, setValues] = useState({
    writer: "",
    pass: "",
    title: "",
    content: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    console.log({ ...values, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    let msg = '';
    if (!values.writer) {
      msg = '작성자를 입력하세요';
      return [false, msg];
    }
    if (!values.pass) {
      msg = '비밀번호를 입력하세요';
      return [false, msg];
    }
    if (!values.title) {
      msg = '제목을 입력하세요';
      return [false, msg];
    }
    if (!values.content) {
      msg = '게시 글 내용을 입력하세요';
      return [false, msg];
    }
    return [true, msg];
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [isValid, msg] = validate();

    if (!isValid) {
      alert(msg);
      return;
    }

    
    await axios.post("http://localhost:3000/writeBoard", values)
			.then((res) => {
				navigate("/boardList", { replace: true });
			})
      .catch((error) => {
				console.log("error: ", error);
			})
    
  }

  return (
    <div className="row my-5" id="global-content">
      <div className="col-10 offset-1">
        <div className="row text-center">
          <div className="col">
            <h2 className="fs-3 fw-bold">게시 글 쓰기</h2>
          </div>
        </div>
        <form name="writeForm" action="writeBoard" id="writeForm"
          className="row g-3 border-primary" method="post"
          onSubmit={handleSubmit}>
          <div className="col-4 offset-md-2">
            <label htmlFor="writer" className="form-label">글쓴이</label>
            <input type="text" className="form-control" name="writer" id="writer"
              placeholder="작성자를 입력해 주세요" value={values.writer}
              onChange={handleChange} />
          </div>
          <div className="col-4 ">
            <label htmlFor="pass" className="form-label">비밀번호</label>
            <input type="password" className="form-control" name="pass" id="pass"
              value={values.pass} onChange={handleChange} />
          </div>
          <div className="col-8 offset-md-2">
            <label htmlFor="title" className="form-label">제 목</label>
            <input type="text" className="form-control" name="title" id="title"
              value={values.title} onChange={handleChange} />
          </div>
          <div className="col-8 offset-md-2">
            <label htmlFor="content" className="form-label">내 용</label>
            <textarea className="form-control" name="content" id="content" rows="10"
              value={values.content} onChange={handleChange} />
          </div>
          <div className="col-8 offset-md-2 text-center mt-5">
            <input type="submit" value="등록하기" className="btn btn-primary" />
            &nbsp;&nbsp;<Link to="/boardList" className="btn btn-primary">목록보기</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
