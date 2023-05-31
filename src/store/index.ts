import { create } from 'zustand';
import { createState } from '@/utils';

type State = {
  count: number;
}

type Actions = {
  setCount: (count: number) => void
}

const useIndex = create<State & Actions>((set) => {
  const [count, setCount] = createState('count', 0, set);

  return {
    count, setCount
  }
})

export default useIndex;