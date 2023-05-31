export const createState = (keyName: string, initialValue: any, set): [any, (value: any) => void] => {
  return [
    initialValue,
    (value) => set((state) => ({ [keyName]: value }))
  ]
}