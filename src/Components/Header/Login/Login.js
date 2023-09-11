import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/galaxy-logo.png";
import { MdClose } from 'react-icons/md';
import './Login.scss';
import Register from '../Register/Register';
import swal from "sweetalert";
import { connect } from 'react-redux';
const Login = (props) => {
    const [modalRegister, setModalRegister] = useState(false)
    const handleRegister = () => {
        setModalRegister(!modalRegister)
    }
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

 

    const handleSubmit = () => {
  
        if(mail && password){
            fetch('https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/user/Login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Email": mail,
                "Password": password
            })
        })
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('email', mail)
                    localStorage.setItem('login', true)
                    swal({
                        title: "Đăng nhập thành công",
                        text: "Xin chào " + mail,
                        icon: "success",
                        button: "OK",
                    });
                    props.actionToggleLogin()
                }
                else {
                    swal({
                        title: "Mật khẩu hoặc tài khoản không hợp lệ !",
                        icon: "error",
                        button: "OK",
                    });
                }
            })
        }
        else{
            swal({
                title: "Không được để trống Email và Password !",
                icon: "error",
                button: "OK",
            });
        }
    }
    return (
        <div className="modal">
            <div onClick={props.onClick} className="overlay"></div>
            <div className='form-modal onClick={handleLogin} '>
                <div className="modal-content">
                    <Link to="/" ><img className='w-80 m-auto py-5' src={logo} alt="logo" /></Link>
                    {
                        modalRegister ? <Register onClick={handleRegister} /> : <>
                            <div className='text-sm'>
                                Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.
                            </div>
                            <div className="formSocial">
                                <form className="formLogin">
                                    <div >
                                        <input
                                            className='my-2 h-10 rounded-lg px-2 truncate border-solid border w-full'
                                            name="Email"
                                            type='email'
                                            placeholder="Email"
                                            onChange={(e) => setMail([e.target.name] = e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className='my-2 h-10 rounded-lg px-2 truncate border-solid border w-full'
                                            name="Password"
                                            type="password"
                                            placeholder="Mật khẩu"
                                            onChange={(e) => setPassword([e.target.name] = e.target.value)}
                                        />
                                    </div>
                                    <div >
                                        <span className='text-orange-500 hover:opacity-90'> Quên mật khẩu ?</span>
                                    </div>
                                    <div>
                                        <div className='text-center my-3'>
                                            <button type="button" onClick={handleSubmit} className='bg-orange-500 text-white font-medium px-3 py-2 rounded-lg text-lg hover:opacity-90'>Đăng nhập</button>
                                        </div>
                                    </div>
                                    <div >
                                        Bạn chưa có tài khoản?
                                        <span className='text-orange-500 hover:opacity-90' onClick={handleRegister} > Đăng kí</span>
                                    </div>

                                </form>
                            </div>
                        </>
                    }
                    <button className="close-modal font-medium text-orange-500 text-2xl hover:opacity-90" onClick={props.onClick}>
                        <MdClose />
                    </button>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    modalLogin: state.modalLoginManage
})

const mapDispatchToProps = (dispatch) => ({
    actionToggleLogin: () => dispatch({ type: "TOGGLE_LOGIN" }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
