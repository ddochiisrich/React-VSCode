import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

export default function BoardWriteFormPage() {

	const [values, setValues] = useState({
		writer: "",
		title: "",
		pass: "",
		content: ""
	});

	const navigate = useNavigate();

	const validate = (e) => {

		const errors = {
			writer: "",
		pass: "",
		title: "",
		content: "" 
		}

		if(!values.writer) {
			errors.writer = "작성자를 입력하세요"
		}
		if(!values.title) {
			errors.title = "제목을 입력하세요"
		}
		if(!values.pass) {
			errors.pass = "비밀번호를 입력하세요"
		}
		if(!values.content) {
			errors.content = "내용을 입력하세요"
		}
		return errors;
	}

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
		console.log("change : ", {...values, [e.target.name]: [e.target.value]})
	}

	const [errors, setErrors] = useState({
		writer: "",
		pass: "",
		title: "",
		content: "" 
	})

	const handleSubmit = async (e) => {
		e.preventDefault();
		// 유효성 검사 - alert();
		// validate 이용
		const errors = validate();
		setErrors(errors);

		if(Object.values(errors).some(v => v)){
			console.log(errors);
			return;
		}
		
		// 유효성 검사가 정상적으로 모두 통과되면 axios를 이용해서
		// 백엔드 서버에 데이터를 전송 - 통신이 정상적으로 완료되면
		// navigate를 이용해서 게시 글 리스트로 라우팅 되도록 구현
		await axios.post("http://localhost:3010/writeBoard", values)
		.then((res) => {
			navigate("/boardList", {replace:"true"});
		})
		.catch((err) => {
			console.log(err);
		});
		console.log("폼 데이터 전송");  
	}

  return(
    // Content
    			<div className="row my-5" id="global-content">
				<div className="col-10 offset-1">
					<div className="row text-center">
						<div className="col">
							<h2 className="fs-3 fw-bold">게시 글 쓰기</h2>
						</div>
					</div> 
					<form name="writeForm" action="writeBoard" id="writeForm" 
						className="row g-3 border-primary" method="post"  onSubmit={handleSubmit}>
							<div className="col-4 offset-md-2">
								<label htmlFor="writer" className="form-label">글쓴이</label>
								<input type="text" className="form-control" name="writer" id="writer" 
									placeholder="작성자를 입력해 주세요" value={values.writer} onChange={handleChange}/>
									{ errors.writer && <p className="text-danger p-1 m-0">{errors.writer}</p>}
							</div>
							<div className="col-4 ">
								<label htmlFor="pass" className="form-label">비밀번호</label>
								<input type="password" className="form-control" name="pass" id="pass" value={values.pass} onChange={handleChange}/>
								{ errors.pass && <p className="text-danger p-1 m-0">{errors.pass}</p>}
							</div>
							<div className="col-8 offset-md-2">
								<label htmlFor="title" className="form-label">제 목</label>
								<input type="text" className="form-control" name="title"  id="title" value={values.title} onChange={handleChange}/>
								{ errors.title && <p className="text-danger p-1 m-0">{errors.title}</p>}
							</div>
							<div className="col-8 offset-md-2">
								<label htmlFor="content" className="form-label">내 용</label>
								<textarea className="form-control" name="content" id="content" rows="10" value={values.content} onChange={handleChange}/>
								{ errors.content && <p className="text-danger p-1 m-0">{errors.content}</p>}
							</div>	
							<div className="col-8 offset-md-2 text-center mt-5">
							 <input type="submit" value="등록하기" className="btn btn-primary"/>
								&nbsp;&nbsp;<Link to="/boardList" className="btn btn-primary">목록보기</Link>
							</div>	
					</form>
        </div>
      </div>
  );
}