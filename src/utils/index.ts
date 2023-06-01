/**
 * 用于zustand 创建state
 * @param keyName 
 * @param initialValue 
 * @param set 
 * @returns 
 */
export const createState = (keyName: string, initialValue: any, set): [any, (value: any) => void] => {
  return [
    initialValue,
    (value) => set((state) => ({ [keyName]: value }))
  ]
}

/**
 * 随机生成指定长度字符串
 * @param length 
 * @returns 
 */
export const randomString = (length) => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)]
  };
  return result;
}