import { useContext, useEffect, useState } from 'react';
import { FaLock} from "react-icons/fa6";
import './Form.css'
import { ToastContainer, Toast } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { UserContext } from "../../context/UserContext";

function LoginForm(){
    const [apiData, setApiData] = useState({email: '', password: ''})
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext);
    const [data, setData] = useState({
        email: '', 
        password: ''
    });
    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data, [name]: value,
        });
    };

    const [toast, setToast] = useState({
        flag: false,
        subtitle: '',
        title: '',
        type: ''
    });

    const handleSubmit = (e) => {
        localStorage.clear()
        e.preventDefault();
        const newErrors = validation(data);
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0){
            loginCheck();
            console.log('successfully!');
        }else{
            ///////////errors 
            console.log('failed');            
        }
    };

    const validation = (data) => {
        const errors = {};
        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if(!data.password.trim()){
            errors.password = 'Password is required!';
        }else if(data.password.length < 8){
            errors.password = 'Password must be at least 8 charaters.'
        }
        return errors;
    }

    const loginCheck = async () => {
        try{
            const response = await axios.get(`http://localhost:3000/users`)
            setApiData(response.data)
            const users = response.data;
            const matchUser = users.find((user) => user.email == data.email && user.password == data.password)
            // console.log(matchUser);
            
            if(matchUser){
                // const newToast = {
                //     flag: true,
                //     subtitle: 'Success message', 
                //     title: 'After few seconds, you will go to the home page',
                //     type: 'success',
                // }
                // setToast(newToast);
                
                // const {username, email, admin} = matchUser;
                // localStorage.setItem("username",username)
                // localStorage.setItem("email", email)
                // localStorage.setItem("admin", admin)
                console.log(matchUser);
                localStorage.setItem("user", JSON.stringify(matchUser));
                setUser(JSON.stringify(matchUser));
                navigate('/', {replace: true})
            }else{
                const newToast = {
                    flag: true,
                    subtitle: 'Error message', 
                    title: 'You entered the email/password incorrectly.',
                    type: 'error',
                }
                setToast(newToast);
            }
        }catch(e){
            console.log(e.message)
        }
    }

    const guestUser = (e) => {
        e.preventDefault()
        const newToast = {
                flag: true,
                subtitle: 'Hint:', 
                title: `As a guest you cannot get all the features of the site.\n
                After few seconds, you will go to the home page.`,
                type: 'error',
            }
            setToast(newToast);
            // localStorage.setItem("username", "Guest")
            // localStorage.setItem("email", '')
            // localStorage.setItem("admin", false)
            localStorage.setItem("user", null);
            navigate('/', {replace: true})
    }

    return(
        <div className='formCont'>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <div className="input-box">
                        <input onChange={handleChange} type="text" name="email" value={data.email} placeholder="Email" />
                        <MdEmail className='icons'/>
                        {errors.email && (<span className="error-msg">{errors.email}</span>)}
                    </div>

                    <div className="input-box">
                        <input onChange={handleChange} type="password" name="password" value={data.password} placeholder="Password" />
                        <FaLock className='icons'/>
                        {errors.password && (<span className="error-msg">{errors.password}</span>)}
                    </div>

                    <div className="forgot">
                        <label><input onChange={handleChange} type="checkbox" name="remmberMe" />Remmber me</label>
                        <a href="/forgot" target="_self">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>
                    
                    <button onClick={guestUser}>Visit as a guest!</button>
                    
                    <div className="link">
                        <p>Don't have an account? <a href="/register" target="_self">Register</a></p>
                    </div>

                </form>
            </div>
            <div>
                <ToastContainer position="top-end" className="p-3">
                        <Toast show={toast.flag} onClose={() => setToast({flag: false})} delay={5000} autohide>
                            <Toast.Header className={toast.type}>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">{toast.subtitle}</strong>
                            </Toast.Header>
                            <Toast.Body>{toast.title}</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
        </div>
    );
}

export default LoginForm