import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.texts) return null;

    const { title, desc } = this.props.texts;

    return (
      <div>
        <h1 data-test="title">{title}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  texts: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
  }),
};
