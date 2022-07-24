// import { useRef, useState, useEffect, } from 'react';
// // import useAuth from '../../hooks/useAuth';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';



// import axios from 'axios';
// const LOGIN_URL = 'http://localhost:3500/api/auth/login';

// export default function Login({setToken}) {
    
//     // const {setAuth} =useAuth();
//     const navigate = useNavigate()
//     // const location = useLocation()
//     // const from = location.state?.from?.pathname || "/"


//     const emailRef = useRef();
//     const errRef = useRef();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errMsg, setErrMsg] = useState('');


//     useEffect(() => {
//         emailRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [email, password])

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(LOGIN_URL,
//                 JSON.stringify({ email, password }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: false
//                 }
//             );
//             console.log(response.data)
              
//             // const username = response.data.username
//             const accessToken = response.data.token;
//             // const roles = response.data.roles;
//             setToken({ accessToken});
//             setEmail('');
//             setPassword('');
//             navigate('/')
//         } catch (err) {
//           console.log(err)
//             if (!err.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response.status === 400) {
//                 setErrMsg('Missing email or Password');
//             } else if (err.response.status === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
//     }

//     return (
//         <>
          
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Sign In</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="email">email:</label>
//                         <input
//                             type="text"
//                             id="email"
//                             ref={emailRef}
//                             autoComplete="off"
//                             onChange={(e) => setEmail(e.target.value)}
//                             value={email}
//                             required
//                         />

//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPassword(e.target.value)}
//                             value={password}
//                             required
//                         />
//                         <button>Sign In</button>
//                     </form>
//                     <p>
//                         Need an Account?<br />
//                         <span className="line">
//                             <Link to="/register">register here</Link>
//                         </span>
//                     </p>
//                 </section>
          
//         </>
//     )
// }
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }


