export const defineStore = <T extends Record<string, any>>(setup: () => T) => {
  const store = setup()

  return () => store
}

export const defineStoreCollection = <T extends Record<string, () => ReturnType<T[keyof T]>>>(
    stores: T
) => <K extends keyof T>(
    version: K
) => stores[version]()
