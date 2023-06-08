import * as React from 'react';
import { useState, useEffect } from 'react';

const useTest = () => {
  const [count, setCount] = useState(0);

  return {
    count, setCount
  }
}

export default useTest;