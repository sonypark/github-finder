import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';

class Users extends Component {
    state = {
        users: [
            {
                id: "1",
                login: "mojombo",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo"
            },
            {
                id: "2",
                login: "defunkt",
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                html_url: "https://github.com/defunkt"
            },
            {
                id: "3",
                login: "pjhyett",
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                html_url: "https://github.com/pjhyett"
            }
        ]
    };

    getUserCmps(users) {
        return users.map(user => <UserItem key={user.id} user={user}/>)
    }

    render() {
        const {users} = this.state;
        const userCmps = this.getUserCmps(users);
        return (
            <div style={userStyle}>
                {userCmps}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

Users.propTypes = {};

export default Users;
