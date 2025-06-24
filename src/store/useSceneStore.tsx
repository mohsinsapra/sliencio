// src/store/useSceneStore.ts
import { create } from 'zustand';
import { MutableRefObject } from 'react';
import { Mesh } from 'three';

type SceneRefs = {
  [key: string]: MutableRefObject<Mesh | null> | undefined;
};

type SceneStore = {
  refs: SceneRefs;
  registerRef: (key: string, ref: MutableRefObject<Mesh | null>) => void;
};

export const useSceneStore = create<SceneStore>((set) => ({
  refs: {},
  registerRef: (key, ref) =>
    set((state) => ({
      refs: {
        ...state.refs,
        [key]: ref,
      },
    })),
}));
