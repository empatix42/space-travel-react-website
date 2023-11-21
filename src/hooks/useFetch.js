import { useCallback, useEffect } from 'react';

const useFetch = (link, setData, initData) => {
  const fetchData = useCallback(async () => {
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);

    setData(data);
  }, [link, setData]);

  useEffect(() => {
    if (!initData) {
      fetchData();
    }
  }, [fetchData, initData]);
};

export default useFetch;
