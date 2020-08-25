import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dummy extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (<div />);
  }
}

Dummy.propTypes = {
};

export default connect(
  null,
  null,
)(Dummy);
