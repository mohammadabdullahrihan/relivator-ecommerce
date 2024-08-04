"use client";

import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

import destr from "destr";
import superjson from "superjson";

import { useOnMount } from "~/hooks";

const noop = () => {};

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const initialize = (key: string) => {
    try {
      const item = localStorage.getItem(key);

      if (item && item !== "undefined") {
        return destr(item) as T;
      }

      localStorage.setItem(key, superjson.stringify(initialValue));

      return initialValue;
    } catch {
      return initialValue;
    }
  };

  const [state, setState] = useState(() => initialize(key));

  useOnMount(() => {
    setState(initialize(key));
  });

  useEffect(noop, [key, state]);

  return [state, setState];
};

export { useLocalStorage };

export default useLocalStorage;
