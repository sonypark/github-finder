import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const getUserCmps = (users) => {
    return users.map(user => <UserItem key={user.id} user={user}/>)
};


const Users = ({users, loading}) => {
    const userCmps = getUserCmps(users);
    return (loading) ? <Spinner/> :
        (<div style={userStyle}>
            {userCmps}
        </div>)
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default Users;
