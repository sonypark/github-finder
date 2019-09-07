import React, {Fragment, useEffect, useContext} from 'react';
import {Link} from "react-router-dom";
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext'

const User = ({ match}) => {
    const githubContext = useContext(GithubContext);
    const {user, repos, getUser, getUserRepos, loading } = githubContext;
    useEffect(()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, []);

        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;

        if (loading) return <Spinner/>;
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back to Search </Link>
                Hireable: {' '}
                {hireable ? (<i className="fas fa-check text-success"/>) : (<i className="fas fa-times-circle text-danger"/>)}
                <div className="card gird-2">
                    <div className="all-center">
                        <img src={avatar_url} className='round-img' alt="" style={{width: '150px'}}/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div className='all-center'>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username: </strong> {login}
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company: </strong> {company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Blog: </strong> <a href={blog}>{blog}</a>
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-dark">Public Repos: {public_repos}</div>
                    <div className="badge badge-light">Public Gist: {public_gists}</div>
                </div>
                <Repos repos={repos}/>
            </Fragment>
        );
};

export default User;