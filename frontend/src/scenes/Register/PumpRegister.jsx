import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import mainservice from '../../service/mainservice';
import TextField from '@mui/material/TextField';
//forhandler

function PumpRegister() {
    const params = useParams();
    const userId = params.userid;

    console.log("params", params)
    console.log("userid", userId)
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

        const data = {
            ...form,
            userId: userId
        }

        try {
            const response = await mainservice.PumpRegister(data)
            console.log(response)
            navigate("/SignUp");
        }
        catch (err) {
            console.log(err)
        }
    };
    return (
        <>
            <div className="p-4 mt-5 d-flex justify-content-center">
                <div className="shadow p-4 mt-3 bg-body-tertiary rounded">
                    <form>
                        <h1 className="display-5 mb-4 d-flex justify-content-center">Pump Register</h1>
                        <div className="row">
                            {/* <div className="col"> */}
                            <div className="mb-3 d-flex justify-content-center">
                                <TextField id="outlined-basic" type="text" name="PumpName" label="Pump Name" variant="outlined" onChange={onChangeHandler} />
                                {/* <label className="form-label">Pump Name</label>
                                    <input type="text" className="form-control" name="PumpName" onChange={onChangeHandler} /> */}
                            </div>
                            {/* </div> */}

                            {/* <div className="col"> */}
                            <div className="mb-3 d-flex justify-content-center">
                                <TextField id="outlined-basic" type="text" name="PhoneNumber" label="Mobile" variant="outlined" onChange={onChangeHandler} />
                                {/* <label className="form-label">Mobile</label>
                                    <input type="text" className="form-control" name="PhoneNumber" onChange={onChangeHandler} /> */}
                            </div>
                            {/* </div> */}
                        </div>

                        <div className="row">
                            {/* <div className="col"> */}
                            <div className="mb-3 d-flex justify-content-center">
                                <TextField id="outlined-basic" type="text" name="Address" label="Address" variant="outlined" onChange={onChangeHandler} />
                                {/* <label className="form-label">Address</label>
                                    <input type="text" className="form-control" name='Address' onChange={onChangeHandler} /> */}
                            </div>
                            {/* </div> */}

                            {/* <div className="col"> */}
                            <div className="mb-3 d-flex justify-content-center">
                                <TextField id="outlined-basic" type="email" name="email" label="Email" variant="outlined" onChange={onChangeHandler} />
                                {/* <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name='email' onChange={onChangeHandler} /> */}
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-success" onClick={onSubmitHandler}>Submit</button>
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default PumpRegister;