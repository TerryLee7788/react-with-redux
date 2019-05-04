import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import actionTypes from './reducers/constants';
import './App.css';

import actions from './reducers/actions';
import { Stats } from 'fs';

const mapStatetoProps = (state) => ({
    name: state.name,
    users: state.users,
    isPending: state.isPending,
});

const mapDispathToProps = (dispath) => ({
    [actionTypes.greeting]: (name) => {

        return dispath({
            type: actionTypes.greeting,
            ...actions[actionTypes.greeting](name)
        });

    },
    [actionTypes.sendRequest]: () => {

        // 把 'dispath' 丟給 'sendRequest' 去做一些事情
        return actions[actionTypes.sendRequest]()(dispath);

    }
})

class App extends Component {

    componentDidMount () {

        // go get users
        this.props[actionTypes.sendRequest]();

    }


    render () {

        const { name, users, isPending } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p
                        onClick={() => {

                            console.log(this.props[actionTypes.greeting]('123'));

                        }}
                    >
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>
                        {name}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <div>
                        {
                            isPending
                                ? ('我正在拿東西!!')
                                : ('我沒事做了~')
                        }
                    </div>
                    <div>
                        {
                            users.length
                                ? ('有 user 囉~!!')
                                : ('目前沒有 user 喔~!!')
                        }
                    </div>
                    {
                        users.map((user, idx) => (
                            <div
                            key={idx}
                            >
                            {user.name}
                            </div>
                        ))
                    }
                </header>
            </div>
        );

    }

}

export default connect(
    mapStatetoProps,
    mapDispathToProps
)(App);
