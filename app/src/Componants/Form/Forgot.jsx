import { useNavigate } from 'react-router-dom';
import './Form.css'
import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa6';
import { Toast, ToastContainer } from 'react-bootstrap';
import axios from 'axios';

function Forgot(){
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: '', 
        password: '',
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
            updateUser()
        }
    };
    const validation = (data) => {
        const errors = {};
        
        if (!data.email.trim()) {
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

    const updateUser = async () => {
        try{
        const response = await axios.get(`http://localhost:5000/users`)
        const users = response.data
        const checkUser = users.find((u) => u.email == data.email)
        
        if(checkUser){
            
            axios.put(`http://localhost:5000/users/${checkUser.id}`, data)
            navigate('/login')
        }
        else{
            const newToast = {
                flag: true, 
                subtitle: 'Error message',
                title: 'Not found this email',
                type: 'error'
            }
            setToast(newToast)
        }
        }catch(e){
            console.log(e.message);
        }
    }


    return(
            <div className='formCont'>
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <h1>Forgot password</h1>
    
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

                        <div className="input-box">
                            <input onChange={handleChange} type="password" name="confirmPass" value={data.confirmPass} placeholder="confirm password" />
                            <FaLock className='icons'/>
                            {errors.confirmPass && (<span className="error-msg">{errors.confirmPass}</span>)}
                        </div>
                        
    
                        <button type="submit">Update</button>

                        <div className="link">
                            <p>Don't have an account? <a href="/register" target="_self">Register</a></p>
                        </div>

                        <div className="link">
                        <p><a href="/login" target="_self">Back to login</a></p>
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
export default Forgot