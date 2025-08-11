import './Form.css'
import { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import db from '../Json/db.json';
import { Toast, ToastContainer } from 'react-bootstrap';

function RegisterForm(){
    const{users} = db

    const [data, setData] = useState({
        username: '',
        email: '', 
        password: '',
        confirmPass: ''
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
            // console.log('successfully!');
            addUser()
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

        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }

        if (data.confirmPass !== data.password) {
            errors.confirmPass = 'Passwords do not match';
        }
        return errors;
    }

    const addUser = () => {
        const findUser = users.find(user => user.username === data.username)
        // console.log(findUser);
        if(findUser){
            const newToast = {
                flag: true, 
                subtitle: 'Error message',
                title: 'This username already has an account.',
                type: 'error'
            }
            setToast(newToast)
        }else{
            // add user in json file
            users.push(data);
            const newToast = {
                flag: true,
                subtitle: 'Success message', 
                title: 'After 5 seconds, you will go to the home page',
                type: 'success',
            }
            setToast(newToast)
        }
    }

    return(
        <div className='formCont'>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>

                    <div className="input-box">
                        <input onChange={handleChange} type="text" name="username" value={data.username} placeholder="Username" />
                        {/* <FaUser className='icons'/> */}
                        {errors.username && (<span className="error-msg">{errors.username}</span>)}
                    </div>

                    <div className="input-box">
                        <input onChange={handleChange} type="text" name="email" value={data.email} placeholder="Email" />
                        {/* <MdEmail className='icons'/> */}
                        {errors.email && (<span className="error-msg">{errors.email}</span>)}
                    </div>

                    <div className="input-box">
                        <input onChange={handleChange} type="password" name="password" value={data.password} placeholder="Password" />
                        {/* <FaLock className='icons'/> */}
                        {errors.password && (<span className="error-msg">{errors.password}</span>)}
                    </div>

                    <div className="input-box">
                        <input onChange={handleChange} type="password" name="confirmPass" value={data.confirmPass} placeholder="confirm password" />
                        {/* <FaLock className='icons'/> */}
                        {errors.confirmPass && (<span className="error-msg">{errors.confirmPass}</span>)}
                    </div>

                    <button type="submit">Register</button>
                    
                    <div className="link">
                        <p>Already have an account? <a href="/login" target="_self">Login</a></p>
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

export default RegisterForm