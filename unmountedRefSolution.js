import React, { useRef, useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const myRef = useRef(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('someApi');
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <div>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default MyComponent;