import React from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
	const path = document.location.pathname;
	return path.substring(path.lastIndexOf('/'));
};

export class Router extends React.Component {

	static childContextTypes = {
		route: PropTypes.string,
		linkHandler: PropTypes.func
	}

  constructor(props) {
  	super(props);
  	this.state = {
  		route: getCurrentPath()
  	}
  }

  getChildContext() {
  	return {
  		route: this.state.route,
  		linkHandler: this.handleLinkClick.bind(this)
  	}
  }

  handleLinkClick(route) {
  	this.setState({
  		route
  	});
  	history.pushState(null, '', route);
  }

  render() {
    return (
      <div>{ this.props.children }</div>
    );
  }
}

