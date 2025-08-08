import { create } from 'zustand'

export const useWindowStore = create((set, get) => ({
  open: {},
  zIndex: {},
  nextZ: 10,
  openWindow: (k) => set((s) => ({
    open: { ...s.open, [k]: true },
    zIndex: { ...s.zIndex, [k]: s.nextZ },
    nextZ: s.nextZ + 1,
  })),
  closeWindow: (k) => set((s) => ({ open: { ...s.open, [k]: false } })),
  focus: (k) => set((s) => ({
    zIndex: { ...s.zIndex, [k]: s.nextZ },
    nextZ: s.nextZ + 1,
  })),
}))
