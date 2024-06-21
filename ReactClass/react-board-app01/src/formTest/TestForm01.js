import { useState } from 'react';

export default function TestForm01(){

  const [values, setValues] = useState({
    name: "",
    birth: "",
    grade: "",
    tellMe: ""
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const [ errors, setErrors ] = useState({
    name: "",
    birth: "",
    grade: "",
    tellMe: ""
  });

  const validate = () => {

    const errors = {}

    if(!values.name) {
      errors.name = "이름을 입력하세요";

    }
    if(!values.birth) {
      errors.birth = "생일을 입력하세요";

    }
    if(!values.grade) {
      errors.grade = "학년을 입력하세요";

    }
    if(!values.tellMe) {
      errors.tellMe = "자기소개를 입력하세요";

    }
    return errors;

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors);

    // ["이름을 입력하세요", "", "", ""]
    console.log(["", "1", undefined].some(v => v))
    if(Object.values(errors).some(v => v)){
      console.log(errors);
      return false;
    }

    // Axios를 이용해 폼 데이터를 백엔드 서버에 전송
    console.log("submit : ", "폼 전송")
  }

 
  return(
    <div className="row my-5" id="global-content">
      <div className="col-10 offset-1">
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <input type="text" name="name" className='form-control' onChange={handleChange}/>
              {errors.name && <span className="text-danger">{errors.name}</span>}
            <input type="date" name="birth" className='form-control' onChange={handleChange}/>
              {errors.birth && <span className="text-danger">{errors.birth}</span>}
          </div>
          <div className="my-3">
            <select name="grade" className='form-select' onChange={handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
              {errors.grade && <span className="text-danger">{errors.grade}</span>}
          </div>
          <div className="my-3">
            <textarea name="tellMe" className='form-control' onChange={handleChange} />
              {errors.tellMe && <span className="text-danger">{errors.tellMe}</span>}
          </div>
          <input type="submit" value="등록하기" />
        </form>
      </div>
    </div>
  );
}