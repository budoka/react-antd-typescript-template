import React, { useState, useEffect, useRef } from 'react';

export function useWindowSize() {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize() {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    //handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size]);

  return size;
}

export interface FormInput {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean | null;
  setIsValid: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export function useFormInput(initialValue?: string) {
  const [value, setValue] = useState(initialValue || '');
  const [isValid, setIsValid] = useState(true);

  return {
    value,
    setValue,
    isValid,
    setIsValid,
  } as FormInput;
}

export function useTimeout(callback: Function, delay: number) {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay);
      /* return () => */ clearInterval(id);
    }
  }, [delay]);
}

export function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      /* return () => */ clearInterval(id);
    }
  }, [delay]);
}
