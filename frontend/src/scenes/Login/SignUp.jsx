import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import mainservice from '../../service/mainservice';
//form handler

function SignUp() {
    // const { pumpId } = useParams();
    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        console.log(form);
    }
    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(form)


        const updatedform = { ...form, role: "owner" }
        try {
            const response = await mainservice.Signup(updatedform)
            console.log("hi", response)
            console.log("idid", response.data.result._id)
            const userId = response.data.result._id;
            navigate(`/PumpRegister/${userId}`);
        }
        catch (err) {
            console.log({ err })
        }
    };

    return (
        <>
            <div className="p-4">
                <div className="shadow p-4 mt-5 bg-body-tertiary rounded">
                    <form>
                        <h1 className="display-5 mb-4">User Registeration</h1>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" name="firstName" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" name="lastName" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name='email' onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" name='password' onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
                        <br />
                    </form>
                </div>
            </div>
        </>
    );
}
export default SignUp;