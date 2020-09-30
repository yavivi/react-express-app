import React from 'react';

export function WithLoginRequired(RealComponent, NotLoggedinComponent) {
    return function WithLoginRequiredComponent() {
      const [loginStatus, setLoginStatus] = React.useState('initial');
  
      React.useEffect(() => {
        fetch('/login/me')
        .then((resp) => {
          if (resp.ok) {
            setLoginStatus('loggedin');
          } else {
            setLoginStatus('not-loggedin');
          }
        });
      }, []);
  
      if (loginStatus === 'initial') {
        return <div>Checking...</div>
      }
  
      if (loginStatus === 'loggedin') {
  
        return <RealComponent />
      }
  
      return <NotLoggedinComponent />
    };
  }