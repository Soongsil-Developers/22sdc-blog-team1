import React from "react";
import { Link } from "react-router-dom";

// <li> 테그에 있는 데이터들을 배열로 이동시킨후, map 내장함수를 이용해서 뿌려준다
// 로그인 했을떄랑 안했을때 보여지는게 다른데 그 부분을 배열로 표현 할 수 있는지.

// Login/Logout 시 Navbar의 내용 구분
// Login : Home / NewArticle / Settings / username
// Logout : Home / Sign in / Sign up

// Api 연동 X
// ->임의로 boolean 값을 state 변수에 넣어 사용 (UI로 확인하기 위해)
// True : login
// False : logout
// { user(state변수)? <>로그인했을때 네브바</> : <>로그인 안했을때 네브바</> }

const Navbar = ({ auth }) => {
  const notLoggedIn = ["Home", "Sign in", "Sign up"];
  const isLoggedIn = ["Home", "New Article", "Settings", "username"];

 

  
  return (
    <nav class="navbar navbar-light">
      <div class="container">
        <Link class="navbar-brand" to='/'>
          conduit
        </Link>

        <ul class="nav navbar-nav pull-xs-right">
          {auth ? (
            <div>
              <li class="nav-item">
                <Link class="nav-link active" to='/'>Home</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to='/editor'>
                  <i class="ion-compose"></i>&nbsp;New Article
              </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to='/settings'>
                  <i class="ion-compose"></i>&nbsp;Settings
              </Link>
              </li>
              <li className="nav-item">
                  <Link class="nav-link active" to='/a'>
                      username
                  </Link>
              </li>
            </div>
          ) : (
            <div>
              <li className="nav-item">
                  <Link class="nav-link active" to='/'>
                      Home
                  </Link>
              </li>
              <li className="nav-item">
                  <Link class="nav-link" to='/login'>
                      Sign in
                  </Link>
              </li>
              <li className="nav-item">
                  <Link class="nav-link" to='/register'>
                      Sign up
                  </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// {auth
//     ? isLoggedIn.map((data) => {
//         return (
//           <li class="nav-item">
//             <a class="nav-link active" href="">
//               {data}
//             </a>
//           </li>
//         );
//       })
//     : notLoggedIn.map((data) => {
//         return (
//           <li class="nav-item">
//             <a class="nav-link active" href="/login">
//               {data}
//             </a>
//           </li>
//         );
//       })}
