type PatchedStorage = Storage & { _isPatched: boolean };

export const STORAGE_CUSTOM_EVENT = "storageCustom";

export type LocalStorageEvent = {
  key: string | null;
  newValue: string | null;
};

(function patchLocalStorageSetItem() {
  const storagePrototype = Storage.prototype as PatchedStorage;

  if (storagePrototype._isPatched) return;

  const originalSetItem = storagePrototype.setItem;
  const originalRemoveItem = storagePrototype.removeItem;

  function dispatchCustomEvent(detail: LocalStorageEvent) {
    const event = new CustomEvent<LocalStorageEvent>(STORAGE_CUSTOM_EVENT, {
      detail,
    });
    document.dispatchEvent(event);
  }

  storagePrototype.setItem = function (key, value) {
    dispatchCustomEvent({ key, newValue: value });
    return originalSetItem.call(this, key, value);
  };

  storagePrototype.removeItem = function (key) {
    dispatchCustomEvent({ key: null, newValue: null });
    return originalRemoveItem.call(this, key);
  };

  window.addEventListener("storage", (event) => {
    dispatchCustomEvent({ key: event.key, newValue: event.newValue });
  });

  storagePrototype._isPatched = true;
})();
