import React, {Fragment, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About'
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import axios from 'axios';


const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // Get default users
    useEffect(() => {
        setLoading(true);
        (async function fetchData() {
            const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            setUsers(res.data);
            setLoading(false);
        })();
    }, []);



    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className="App">
                        <Navbar/>
                        <div className="container">
                            <Alert/>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/about' component={About}/>
                                <Route exact path='/user/:login' component={User}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;
