import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAngleRight,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="main">
      <header className="header-container">
        <nav className="nav-container">
          <div className="logo-container">
            <a href="/" className="logo">
              <img src="img/logo.png" alt="logo"></img>
            </a>
          </div>

          <ul className="nav__menu">
            <li className="nav__home presentation">
              <a href="/">홈</a>
            </li>
            <li className="nav__search">
              <a href="/">탐색</a>

              <div className="overlay-container none">
                <div className="sales-menu">
                  <a href="/">
                    <span>영업</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>기업영업</span>
                  </a>
                  <a href="/">
                    <span>외부영업</span>
                  </a>
                  <a href="/">
                    <span>영업 관리자</span>
                  </a>
                  <a href="/">
                    <span>기술 영업</span>
                  </a>
                  <a href="/">
                    <span>주요고객사 담당자</span>
                  </a>
                  <a href="/">
                    <span>솔루션 컨설턴트</span>
                  </a>
                  <a href="/">
                    <span>해외영업</span>
                  </a>
                  <a href="/">
                    <span>더보기</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </div>
                <div className="media-menu">
                  <a href="/">
                    <span>미디어</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>콘텐츠 크리에이터</span>
                  </a>
                  <a href="/">
                    <span>PD</span>
                  </a>
                  <a href="/">
                    <span>영상 편집가</span>
                  </a>
                  <a href="/">
                    <span>에디터</span>
                  </a>
                  <a href="/">
                    <span>비디오 제작</span>
                  </a>
                  <a href="/">
                    <span>작가</span>
                  </a>
                  <a href="/">
                    <span>출판 기획자</span>
                  </a>
                  <a href="/">
                    <span>더보기</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </div>
                <div className="hr-menu">
                  <a href="/">
                    <span>인사</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>인사담당</span>
                  </a>
                  <a href="/">
                    <span>리크루터</span>
                  </a>
                  <a href="/">
                    <span>조직문화</span>
                  </a>
                  <a href="/">
                    <span>평가보상</span>
                  </a>
                  <a href="/">
                    <span>헤드헌터</span>
                  </a>
                  <a href="/">
                    <span>HRD</span>
                  </a>
                  <a href="/">
                    <span>HRBP</span>
                  </a>
                  <a href="/">
                    <span>더보기</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </div>
                <div className="game-menu">
                  <a href="/">
                    <span>게임 제작</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>게임 기획자</span>
                  </a>
                  <a href="/">
                    <span>게임 그래픽 디자이너</span>
                  </a>
                  <a href="/">
                    <span>모바일 게임 개발자</span>
                  </a>
                  <a href="/">
                    <span>게임 클라이언트 개발자</span>
                  </a>
                  <a href="/">
                    <span>게임 아티스트</span>
                  </a>
                  <a href="/">
                    <span>유니티 개발자</span>
                  </a>
                  <a href="/">
                    <span>게임 서버 개발자</span>
                  </a>
                  <a href="/">
                    <span>더보기</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </div>
                <div className="finance-menu">
                  <a href="/">
                    <span>금융</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>회계담당</span>
                  </a>
                  <a href="/">
                    <span>재무 담당자</span>
                  </a>
                  <a href="/">
                    <span>IR</span>
                  </a>
                  <a href="/">
                    <span>투자 증권</span>
                  </a>
                  <a href="/">
                    <span>재무 분석가</span>
                  </a>
                  <a href="/">
                    <span>애널리스트</span>
                  </a>
                  <a href="/">
                    <span>내부통제 담당자</span>
                  </a>
                  <a href="/">
                    <span>더보기</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </div>
                <div className="etc-menu">
                  <a href="/">
                    <span>엔지니어링·설계</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>물류·무역</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>제조·생산</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>의료·제약 바이오</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>교육</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>법률·법집행기관</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>식·음료</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>건설·시설</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                  <a href="/">
                    <span>공공·복지</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </div>
              </div>
            </li>
            <li className="nav__career">
              <a href="/">커리어 성장</a>
            </li>
            <li className="nav__salary none">
              <a href="/">직군별 연봉</a>
            </li>
            <li className="nav__resume none">
              <a href="/">이력서</a>
            </li>
            <li className="nav__matchup none">
              <a href="/">매치업</a>
            </li>
            <li className="nav__freelancer none">
              <a href="/">프리랜서</a>
            </li>
          </ul>

          <aside className="side-container">
            <ul className="side__menu">
              <li className="search-icon">
                <button>
                  <FontAwesomeIcon icon={faSearch} className="icon" />
                </button>
              </li>
              <li className="bell-icon none">
                <button>
                  <FontAwesomeIcon icon={faBell} className="icon" />
                </button>
              </li>
              <li className="profile-icon none">
                <button>
                  <img src="img/profile.jpg" alt="profile"></img>
                </button>
              </li>
              <li className="menu-toggle-icon presentation">
                <button>
                  <FontAwesomeIcon icon={faBars} className="icon" />
                </button>
              </li>
              <li className="service-icon none first">
                <button className="side__service">
                  <a href="/">기업 서비스</a>
                </button>
              </li>
            </ul>
          </aside>
          <aside className="toggle-side-bar">
            <a href="/">홈</a>
            <a href="/">탐색하기</a>
          </aside>
        </nav>
      </header>
      <section>
        내용
        <FontAwesomeIcon icon={faCoffee} />
      </section>
    </div>
  );
}

export default App;
