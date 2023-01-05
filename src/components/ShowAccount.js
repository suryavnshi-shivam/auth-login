import axios from "axios";
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { setForm, setError } from '../redux-toolkit/authSlice'
import LoginForm from "./LoginForm";
import './ShowAccount.css';
const ShowAccount = () => {
    const forms = useSelector((state) => state.auth.form)
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://form-auth-41fb1-default-rtdb.firebaseio.com/createdAccount.json")
            .then((res) => {
                const fetchData = []
                for (let key in res.data) {

                    fetchData.push({ id: key, ...res.data[key] })
                }
                dispatch(setForm([...fetchData]))
            })
            .catch((error) => dispatch(setError(error.message)))
    }, [])




    return (
        <div>
            <LoginForm form={forms} />
            <h1>Old Accounts</h1>
            {forms?.map((items, index) => {
                const { id, username, password } = items
                return (

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 w-50 mx-auto " key={index}>
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Password</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{id}</td>
                                    <td>{username}</td>
                                    <td>{password}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                )
            })}

        </div>
    )
}

export default ShowAccount