import { create } from 'zustand';
import { createState } from '@/utils';

type State = {
  pageContainerShow: boolean;
  show: boolean;
  selectorData: any;
}

type Actions = {
  setPageContainerShow: (pageContainerShow: boolean) => void;
  setShow: (show: boolean) => void;
  setSelectorData: (show: string) => void;
}

const useTest = create<State & Actions>((set, get) => {

  const [pageContainerShow, setPageContainerShow] = createState('pageContainerShow', true, set);
  const [show, setShow] = createState('show', false, set);
  const [selectorData, setSelectorData] = createState('selectorData', {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }, set);

  return {
    pageContainerShow, setPageContainerShow,
    show, setShow,
    selectorData, setSelectorData
  }
})

export default useTest;