import React from 'react';
import './home.css';

export default function Dashboard() {
    return (
        <div className="box">
            <div className="profile">
                <img src="https://weboverhauls.github.io/demos/svg/checkmark.svg" alt="avatar" className="avatar" />
                <Route path="/" component={Home} exact><button>Edit Profile</button></Route>
            </div>
            <div className="welcome">
                Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!
                </div>
        </div>
    )
}