import { useEffect, useState } from "react";
import CreateAccount from "./CreateAccount";
import { setToggle } from '../redux-toolkit/authSlice';
import { useSelector, useDispatch } from "react-redux";

const LoginForm = ({ form }) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const toggle = useSelector((state) => state.auth.toggle)
    const onUserChek = (e) => {
        setUserName(e.target.value)
    }

    const onPasswordChek = (e) => {
        setPassword(e.target.value)
    }

    const onToggle = () => {
        dispatch(setToggle(true))

    }
    useEffect(() => {

    }, [onToggle])


    const onLogin = (e) => {
        const validUser = form.find(item => item.username === username && item.password === password)
        const pendingRegistation = form.find(item => item.username !== username && item.password !== password)
        e.preventDefault();

        if (validUser) {
            alert("User Login Successfuly")
            setUserName('')
            setPassword('')
        } else if (pendingRegistation) {
            alert("Account Not Registred")
            setUserName('')
            setPassword('')
        } else {
            alert("Username and Password not match")
            setUserName('')
            setPassword('')
        }
    }

    return (
        <div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 w-50 mx-auto   ">
                <h1>Login Form </h1>

                <form className="form-control text-start ">
                    <label className="form-label" htmlFor="UserName"  >Username</label>

                    <input type="text" placeholder="Enter Your username" className="form-control" value={username} onChange={onUserChek} />
                    <label className="form-label" htmlFor="Password" >Password</label>

                    <input type="text" placeholder="Enter Your password" className="form-control" value={password} onChange={onPasswordChek} />
                    <button type="button" className="btn btn-primary mt-3" onClick={onLogin}> Login </button>
                    {!toggle && < button type="button" className="btn btn-primary mt-3" onClick={onToggle}> Sign Up </button>}
                </form>
            </div>
            {
                toggle &&
                <CreateAccount form={username} />
            }


        </div >
    )
}

export default LoginForm