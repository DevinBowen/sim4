import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users'
import {Route} from 'react-router-dom';
import './private.css';

class Private extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {

    //     }
    // }

    // componentDidMount() {
    //     this.props.getUserInfo()
    // }


    // bankBalance() {
    //     return '$' + Math.floor((Math.random() + 1) * 1000) + '.00';
    // }
    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <nav>
                    <div>Helo</div>
                    <div>Dashboard</div>
                    <div><a href='http://localhost:4000/auth/logout'><button>Log out</button></a></div>
                </nav>
                <div>
                    <div className="profile">
                        <img src="https://weboverhauls.github.io/demos/svg/checkmark.svg" alt="avatar" className="avatar" />
                        <a href="http://localhost:3000/#/edit"><button>Edit Profile</button></a>
                    </div>
                    <div className="welcome">
                        Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!
                </div>
                    <div className="recommend"></div>
                </div>
                {/* <h1>Community Bank</h1><hr />
                <h4>Account information:</h4>
                {user ? <img className='avatar' src={user.img} /> : null}
                <p>Username: {user ? user.user_name : null}</p>
                <p>Email: {user ? user.email : null}</p>
                <p>ID: {user ? user.auth_id : null}</p>
                <h4>Available balance: {user ? this.bankBalance() : null} </h4> */}

            </div>
        )
    }
}



// let decoratedComp = connect();
// export default decoratedComp();


function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { getUserInfo })(Private)