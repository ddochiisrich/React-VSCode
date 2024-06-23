export default function BoardWriteFormPage(){
  return(
    <div className="row my-5" id="global-content">
				<div className="col-10 offset-1">
					<form name="checkForm" id="checkForm">
						<input type="hidden" name="no" id="no" />
						<input type="hidden" name="pass" id="rPass" />
					</form>
					<div className="row text-center">
						<div className="col">
							<h2 className="fs-3 fw-bold">게시 글 쓰기</h2>
						</div>
					</div>
        </div>
      </div>
  )
}