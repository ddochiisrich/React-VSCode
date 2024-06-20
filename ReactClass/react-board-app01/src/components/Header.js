export default function Header() {
  return(
    <>
      {/* header */}
  		<div className="row border-bottom border-primary">
  			<div className="col-4">
  				<p><img src="https://via.placeholder.com/200x100" /></p>
  			</div>
  			<div className="col-8">
  				<div className="row">
  					<div className="col">
  						<ul className="nav justify-content-end">
  							<li className="nav-item">
  								<a className="nav-link" href="#">로그인</a>
  							</li>
  							<li className="nav-item">
  								<a className="nav-link" href="#">게시 글 리스트</a>
  							</li>
  							<li className="nav-item">
  								<a className="nav-link" href="#">회원가입</a>
  							</li>
  							<li className="nav-item">
  								<a className="nav-link" href="#">주문/배송조회</a>
  							</li>
  							<li className="nav-item">
  								<a className="nav-link" href="#">고객센터</a>
  							</li>
  						</ul>
  					</div>
  				</div>
  				<div className="row">
  					<div className="col text-end">로그인시 인사말 출력</div>
  				</div>
  			</div>
  		</div>
    </>
  );
}