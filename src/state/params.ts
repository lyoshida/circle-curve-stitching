import { atom } from "recoil";

export const canvasSizeState = atom<number>({
  key: 'canvasSize',
  default: 600,
});

export const circlePointsState = atom<number>({
  key: 'circlePoints',
  default: 72,
});

export const stepState = atom<number>({
  key: 'step',
  default: 2
});

export const radiusState = atom<number>({
  key: 'radius',
  default: 200
});

export const colorState = atom<string>({
  key: 'color',
  default: '#000000'
});