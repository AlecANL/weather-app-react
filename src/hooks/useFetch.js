import React from 'react';
export function useFetch(apiUrl = '') {
  const [state, setState] = React.useState({
    data: null,
    isLoading: true,
    error: null,
    isError: false,
  });

  React.useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setState({
          ...state,
          data,
          isLoading: false,
        });
      } catch (error) {
        setState({
          ...state,
          isError: true,
          error,
        });
        throw new Error(error);
      }
    }
    getData();
  }, [apiUrl]);

  return [state];
}
