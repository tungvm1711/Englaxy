import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { markVocabulary } from '../../utils/API';

class Mark extends Component {

  state = {
    marked: this.props.marked || false,
    isWaiting: true
  }

  _mark() {
    const { id: _id, user: { authenticated } } = this.props;
    const { router } = this.context;

    if (!authenticated) {
      router.push('/login');
    } else {
      markVocabulary(_id)
      .then(() => this.setState({ marked: !this.state.marked, isWaiting: true }))
      .catch(() => {
        router.push('/internal-server-error');
      });
      this.setState({ isWaiting: false });
    }
  }

  render() {
    const { marked, isWaiting } = this.state;

    const props = {
      onClick: isWaiting ? () => this._mark() : null
    };

    return (
      <div className="Mark" {...props}>
        <i className={`fa ${marked ? 'fa-bookmark' : 'fa-bookmark-o'}`} />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(Mark);
