import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
//forhandler

function PumpRegister() {
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

        await axios.post("http://localhost:9000/pump/createpump", form)
            .then((response) => {
                console.log(response.data);
                navigate("/SignUp");
            })
            .catch((err) => console.log(err)); 
    };
    return (
        <>
            <div className="card container mb-5">
                <div className="shadow p-4 mt-5 bg-body-tertiary rounded">
                    <form>
                        <h1 className="display-5 mb-4">Pump Register</h1>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Pump Name</label>
                                    <input type="text" className="form-control" name="PumpName" onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Mobile</label>
                                    <input type="text" className="form-control" name="PhoneNumber" onChange={onChangeHandler} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" name='Address' onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name='email' onChange={onChangeHandler} />
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
export default PumpRegister;