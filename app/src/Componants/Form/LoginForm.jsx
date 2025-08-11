import { useState } from 'react';
import db from '../Json/db.json';
// import { FaLock, FaUser } from "react-icons/fa6";
import './Form.css'
import { ToastContainer, Toast } from 'react-bootstrap';

function LoginForm(){
    const{users} = db

    const [data, setData] = useState({
        username: '', 
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
        if(!data.username.trim()){
            errors.username = 'Username is required.';
        }else if(data.username.length < 4){
            errors.username = 'Username must be at least 4 characters.';
        }

        if(!data.password.trim()){
            errors.password = 'Password is required!';
        }else if(data.password.length < 8){
            errors.password = 'Password must be at least 8 charaters.'
        }
        return errors;
    }

    const loginCheck = () => {
        console.log(users);
        console.log(data);
        
        const userCheck = users.find(
            user => user.username === data.username && user.password === data.password
        );
        console.log(userCheck);
        
        if(userCheck){
            // alert("successfully!")
            const newToast = {
                flag: true,
                subtitle: 'Success message', 
                title: 'After 5 seconds, you will go to the home page',
                type: 'success',
            }
            setToast(newToast);
        }else{
            // alert("error happens!")
            const newToast = {
                flag: true,
                subtitle: 'Error message', 
                title: 'You entered the username/password incorrectly.',
                type: 'error',
            }
            setToast(newToast);
        }
    }

    return(
        <div className='formCont'>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <div className="input-box">
                        <input onChange={handleChange} type="text" name="username" value={data.username} placeholder="Username" />
                        {/* <FaUser className='icons'/> */}
                        {errors.username && (<span className="error-msg">{errors.username}</span>)}
                    </div>

                    <div className="input-box">
                        <input onChange={handleChange} type="password" name="password" value={data.password} placeholder="Password" />
                        {/* <FaLock className='icons'/> */}
                        {errors.password && (<span className="error-msg">{errors.password}</span>)}
                    </div>

                    <div className="forgot">
                        <label><input onChange={handleChange} type="checkbox" name="remmberMe" />Remmber me</label>
                        <a href="#" target="_self">Forgot passwor?</a>
                    </div>

                    <button type="submit">Login</button>
                    
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