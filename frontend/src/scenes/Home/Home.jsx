import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="shadow p-4 mt-5 bg-body-tertiary rounded">
                <form>
                    <p style={{fontSize: '20px'}}>Home
                        <span style={{marginLeft:'70rem'}}>
                            <NavLink to="/SignUp">User Register</NavLink>
                        </span>
                    </p>
                </form>
            </div>
        </>
    );
}
export default Home;