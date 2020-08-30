import { useEffect, useState } from "react";

const isObject = (obj) => {
  obj === Object(obj);
};

const useFetch = (url) => {
  const [content, setContent] = useState({ data: null, loading: true });

  useEffect(() => {
    const getData = async () => {
      if (isObject(url)) {
        const data = await url.then(setContent({ data: data, loading: false }));
      } else {
        const data = await fetch(url).then(
          setContent({ data: data, loading: false })
        );
      }
    };
    getData();
  }, [url, setContent]);

  return content.data;
};

export default useFetch;
