import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service like AppSignal
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <p>Jotain meni pieleen 😭</p>
          <p>Tyhjennä selaimen muisti tämän sivun osalta ja päivitä sivu:</p>
          <button
            type='button'
            onClick={() => {
              localStorage.clear();
              window.location.reload(false);
            }}
          >
            Tyhjennä sivun muisti ja päivitä
          </button>
          {error.message && <span>Virheilmoitus: {error.message}</span>}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
