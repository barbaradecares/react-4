import React from 'react';
import { connect } from 'react-redux';
import img from './2.gif';

const Loading = ({ loading }) => {
  return loading ? (
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt="loading" />
      <h1>LOADING</h1>
    </div>
  ) : null;
};
const mapStateToProps = state => {
  return {
    loading: state.Characters.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(Loading);
