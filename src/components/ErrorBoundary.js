import React, { Component } from 'react';

class ErrorBoundaty extends Component {
	constructor(props){
		super(props); // pt this.props
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error,info){//ca un try-catch
		this.setState({hasError: true});
	}

	render (){
		if(this.state.hasError){
			return <h1>Oooooops. That is not good</h1>
		}
		return this.props.children;
	}
}


export default ErrorBoundaty;