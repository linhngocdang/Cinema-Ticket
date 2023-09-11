import React, { useState } from 'react'
import swal from "sweetalert";
const Register = ({ onClick }) => {

    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = () => {
        console.log(name, password, email);
        fetch('https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/user/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Email": email,
                "Name": name,
                "Password": password,
                "Role": "string"
            })
        })
            .then(res => {
                if (res.status === 200) {
                    swal({
                        title: "Đăng kí thành công",
                        icon: "success",
                        button: "OK",
                    });
                }
                else {
                    swal({
                        title: "Thông tin không hợp lệ!",
                        icon: "warning",
                        button: "OK",
                    });
                }
            })
    }

    return (
        <div className=''>
            <div className="formSocial">
                <form className="formLogin">
                    <div className=''>
                        <input
                            className='my-2 h-10 rounded-lg px-2 truncate border-solid border w-full'
                            name="Name"
                            placeholder="Họ tên"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='my-2 h-10 rounded-lg px-2 truncate border-solid border w-full'
                            name="Email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className='my-2 h-10 rounded-lg px-2 truncate border-solid border w-full'
                            name="Password"
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <div className='text-center my-3'>
                            <button type="button" onClick={handleSubmit} className='bg-orange-500 text-white font-medium px-3 py-2 rounded-lg text-lg hover:opacity-90'>Đăng kí</button>
                        </div>
                    </div>

                    <div >
                        Bạn đã có tài khoản?
                        <span className='text-orange-500 hover:opacity-90' onClick={onClick}> Đăng nhập</span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register;
