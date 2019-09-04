import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Ropos = ({repos}) => {
    return (repos.map(repo => <RepoItem repo={repo} key={repo.id}/>));
};

Ropos.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default Ropos;
