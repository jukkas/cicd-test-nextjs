'use client';
import { useState, useEffect } from 'react';

export default function Page() {
    const [containerTag, setContainerTag] = useState("");
    useEffect(() => {
      fetch('/api/tag')
        .then((res) => {
          if (!res.ok) {
            setContainerTag('Error fetching tag');
            return;
          }
          return res.json();
        })
        .then((data) => {
          setContainerTag(data);
        })
        .catch((err) => {
          setContainerTag('Error: ' + err.message);
        });
    }, []);

  return (
    <>
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-sky-600 my-6">
      This is a demo
    </h1>
    <p className="text-lg text-center text-gray-600">Simplest next.js app v1</p>
    <p className="text-lg text-center text-gray-600">Container tag: {containerTag}</p>
    </>
  );
}

