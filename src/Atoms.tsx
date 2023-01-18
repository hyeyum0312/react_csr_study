import { atom } from 'recoil';

export const isToggleAtom = atom<any>({
  key: 'isToggle',
  default: false,
});

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const inputState = atom<string>({
  key: 'inputState',
  // key의 값은 항상 고유값이어야 합니다.

  default: '',
});

//
// export const charCountState = selector({
//   key: 'charCountState', // unique ID (with respect to other atoms/selectors)
//   get: ({ get }) => {
//     const text = get(textState);
//
//     return text.length;
//   },
// });
