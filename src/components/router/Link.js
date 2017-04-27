import React from 'react';
import PropTypes from 'prop-types';

export class Link extends React.Component {
	static contextTypes = {
		route: PropTypes.string,
		linkHandler: PropTypes.func
	}

  handleClick (evt) {
  	evt.preventDefault();
  	this.context.linkHandler(this.props.to);
  }

  render() {
  	const activeClass = this.context.route === this.props.to ? 'active' : '';
    return (
      <a href={ this.props.to } 
      	className={activeClass}
      	onClick={ this.handleClick.bind(this) }>{ this.props.children }</a>
    );
  }
};

Link.propTypes = {
	to: PropTypes.string.isRequired
};
