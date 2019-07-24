import React from 'react';

const logErrorToMyService = (err, info) => {
  console.error('logErrorToMyService: ', err, info);
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (<h1>Something went wrong.</h1>);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
