import { useEffect, useState } from "react";
import {
  STORAGE_CUSTOM_EVENT,
  type LocalStorageEvent,
} from "../util/patchLocalStorage";

export const useLocalStorage = (storageKey: string) => {
  const [stateValue, setStateValue] = useState<string | undefined>(
    window.localStorage.getItem(storageKey) ?? undefined
  );

  useEffect(() => {
    const handleStorageEvent = (event: StorageEvent | LocalStorageEvent) => {
      // key has been cleared
      if (event.key == null && event.newValue == null) {
        setStateValue(undefined);
        return;
      }

      if (event.key === storageKey) {
        setStateValue(event.newValue!);
      }
    };

    const handleCustomStorageEvent = (event: Event) => {
      const customEvent = event as CustomEvent<LocalStorageEvent>;
      return handleStorageEvent(customEvent.detail);
    };

    // custom event to listen for same tab and other "storage"
    document.addEventListener(STORAGE_CUSTOM_EVENT, handleCustomStorageEvent);

    return () => {
      document.removeEventListener(
        STORAGE_CUSTOM_EVENT,
        handleCustomStorageEvent
      );
    };
  }, [storageKey]);

  const setValue = (value: string) => {
    window.localStorage.setItem(storageKey, value);
  };

  const removeItem = () => {
    window.localStorage.removeItem(storageKey);
  };

  return {
    value: stateValue,
    setValue,
    removeItem,
  };
};
