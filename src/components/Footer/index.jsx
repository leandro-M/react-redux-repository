import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

function Footer({ count }) {
  return <p>{`Você tem ${count} repositórios cadastrados`}</p>;
}

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.favorites.length,
});

export default connect(mapStateToProps)(Footer);
