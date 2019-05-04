import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStatetoProps = (state) => {

    return {
      name: state.name,
      users: state.users
    }

};

class Terry extends Component {
    render () {
        return (
            <div>
                hi~ ggggggggggg {this.props.name}
                <div>
                    {this.props.users.map((user, idx) => (
                        <div
                            key={idx}
                        >
                            {user.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default connect(
    mapStatetoProps,
    null
  )(Terry);
