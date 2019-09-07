import React, {useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext'

const getUserCmps = (users) => {
    return users.map(user => <UserItem key={user.id} user={user}/>)
};


const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

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

export default Users;
