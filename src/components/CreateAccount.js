import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserName, setPassword, setForm, setError, setToggle } from '../redux-toolkit/authSlice';
import axios from "axios";
const CreateAccount = () => {
    const formValue = useSelector((state) => state.auth)

    const dispatch = useDispatch();

    const onUsernameHandler = (e) => {
        dispatch(setUserName(e.target.value))
    }
    const onPasswordHandler = (e) => {
        dispatch(setPassword(e.target.value))
    }



    const onCreateHandler = () => {
        const oldUsername = formValue.form.find(item => item.username === formValue.username)

        if (formValue.username.length > 0 && formValue.password.length > 0) {
            if (oldUsername) {
                alert("User Already Registed")
            } else {

                const dataValue = {
                    username: formValue.username,
                    password: formValue.password
                }
                axios.post("https://form-auth-41fb1-default-rtdb.firebaseio.com/createdAccount.json", dataValue)
                    .then((res) => {
                        dispatch(setForm([...formValue.form, { ...dataValue, id: res.data.name }]))

                        dispatch(setToggle(false))
                        dispatch(setUserName(''))
                        dispatch(setPassword(''))
                    })
                    .catch((error) => dispatch(setError(error.message)))
                alert("Account Created Succesfully")
            }
        } else {
            alert("please fill requried field")
        }


    }

    return (
        <div >
            < div className="col-12 col-sm-12 col-md-12 col-lg-12 w-50 mx-auto">
                <h1>Sign Form </h1>
                <form className="form-control text-start ">

                    <label className="form-label" htmlFor="UserName">Username</label>
                    <input id="UserName" className="form-control " type="text" placeholder="Enter Your username" onChange={onUsernameHandler} value={formValue.username} />
                    <label className="form-label" htmlFor="Password">Password</label>
                    <input id="Password" className="form-control" type="text" placeholder="Enter Your password" onChange={onPasswordHandler} value={formValue.password} />
                    <button type="button" className="btn btn-primary mt-3" onClick={onCreateHandler}> Create Account </button>
                </form>
            </div>
        </div >
    )
}
export default CreateAccount