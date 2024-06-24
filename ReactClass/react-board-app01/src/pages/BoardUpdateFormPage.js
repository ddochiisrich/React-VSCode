import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";

export default function BoardUpdateFormPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const no = searchParams.get("no");

  const [board, setBoard] = useState({
    no: "",
    writer: "",
    title: "",
    pass: "",
    content: "",
  });

  // no에 해당하는 게시글을 읽어와 폼에 출력
  const getBoard = async() => {
    const res = await axios.get(`http://localhost:3010/boardDetail?no=${no}`);
    res.data.pass="";
    setBoard(res.data);
  }

  useEffect(() => {
    getBoard();
  }, []);

  const navigate = useNavigate();

  const [inputed, setInputed] = useState({
    writer: false,
    title: false,
    pass: false,
    content: false,
  });

  const handleBlur = (e) => {
    setInputed({ ...inputed, [e.target.name]: true });
  };

  const validate = useCallback((e) => {
    const errors = {
      writer: "",
      pass: "",
      title: "",
      content: "",
    };

    if (!board.writer) {
      errors.writer = "작성자를 입력하세요";
    }
    if (!board.title) {
      errors.title = "제목을 입력하세요";
    }
    if (!board.pass) {
      errors.pass = "비밀번호를 입력하세요";
    }
    if (!board.content) {
      errors.content = "내용을 입력하세요";
    }
    return errors;
  }, [board]);

	useEffect(() => {
		const errors = validate();
		setErrors(errors);
	}, [validate])

  const handleChange = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
    console.log("change : ", { ...board, [e.target.name]: [e.target.value] });
  };

  const [errors, setErrors] = useState({
    writer: "",
    pass: "",
    title: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

		setInputed({
			writer: true,
			pass:true,
			title: true,
			content: true
		})

    // 유효성 검사 - alert();
    // validate 이용
    const errors = validate();
    setErrors(errors);

    if (Object.values(errors).some((v) => v)) {
      console.log(errors);
      return;
    }

    // 유효성 검사가 정상적으로 모두 통과되면 axios를 이용해서
    // 백엔드 서버에 데이터를 전송 - 통신이 정상적으로 완료되면
    // navigate를 이용해서 게시 글 리스트로 라우팅 되도록 구현
    await axios
      .post("http://localhost:3010/update", board)
      .then((res) => {
        console.log(res);
        // 비번이 틀린경우
        if(! res.data.result){
          alert("비밀번호가 틀림");
          return
        }
        // 비번이 맞는경우
        navigate("/boardList", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("폼 데이터 전송");
  };

  return (
    // Content
    <div className="row my-5" id="global-content">
      <div className="col-10 offset-1">
        <div className="row text-center">
          <div className="col">
            <h2 className="fs-3 fw-bold">게시 글 수정하기</h2>
          </div>
        </div>
        <form
          name="writeForm"
          action="writeBoard"
          id="writeForm"
          className="row g-3 border-primary"
          method="post"
          onSubmit={handleSubmit}
					
        >
          <div className="col-4 offset-md-2">
            <label htmlFor="writer" className="form-label">
              글쓴이
            </label>
            <input
              type="text"
              className="form-control"
              name="writer"
              id="writer"
              placeholder="작성자를 입력해 주세요"
              value={board.writer}
              onChange={handleChange}
							onBlur={ handleBlur }
            />
            {inputed.writer && errors.writer && (
              <p className="text-danger p-1 m-0">{errors.writer}</p>
            )}
          </div>
          <div className="col-4 ">
            <label htmlFor="pass" className="form-label">
              비밀번호
            </label>
            <input
              type="password"
              className="form-control"
              name="pass"
              id="pass"
              value={board.pass}
              onChange={handleChange}
							onBlur={ handleBlur }
            />
            {inputed.pass && errors.pass && (
              <p className="text-danger p-1 m-0">{errors.pass}</p>
            )}
          </div>
          <div className="col-8 offset-md-2">
            <label htmlFor="title" className="form-label">
              제 목
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={board.title}
              onChange={handleChange}
							onBlur={ handleBlur }
            />
            {inputed.title && errors.title && (
              <p className="text-danger p-1 m-0">{errors.title}</p>
            )}
          </div>
          <div className="col-8 offset-md-2">
            <label htmlFor="content" className="form-label">
              내 용
            </label>
            <textarea
              className="form-control"
              name="content"
              id="content"
              rows="10"
              value={board.content}
              onChange={handleChange}
							onBlur={ handleBlur }
            />
            {inputed.content && errors.content && (
              <p className="text-danger p-1 m-0">{errors.content}</p>
            )}
          </div>
          <div className="col-8 offset-md-2 text-center mt-5">
            <input type="submit" value="수정하기" className="btn btn-primary" />
            &nbsp;&nbsp;
            <Link to="/boardList" className="btn btn-primary">
              목록보기
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
