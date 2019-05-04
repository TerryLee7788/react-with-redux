import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStatetoProps = (state) => {

    return {
      name: state.name
    }

};

class Terry extends Component {
    render () {
        return (
            <div>
                hi~ ggggggggggg {this.props.name}
            </div>
        );
    }
}

export default connect(
    mapStatetoProps,
    null
  )(Terry);
