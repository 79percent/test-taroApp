import { create } from 'zustand';
import { createState } from '@/utils';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

type State = {
  count: number;
}

type Actions = {
  setCount: (count: number) => void;
  handleAdd: () => void;
}

const useIndex = create<State & Actions>((set, get) => {
  const [count, setCount] = createState('count', 0, set);
  // const testRef = useRef('123');
  const handleAdd = () => {
    setCount(get().count +1)
  }

  return {
    count, setCount,
    // testRef,
    handleAdd,
  }
})

export default useIndex;