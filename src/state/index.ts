import type { UseStateReturn, UseStateSubscriber, UseStateValue } from './types'

/**
 * Состояние
 * @param initialValue
 */
export function useState <T> (initialValue?: T): UseStateReturn<T> {
  /**
   * Текущее значение
   */
  let value: UseStateValue<T> = initialValue ?? null
  /**
   * Подписчики на изменения
   */
  const subscribers = new Set<UseStateSubscriber<T>>()

  return {
    /**
     * Получить значение
     */
    get () {
      return value
    },
    /**
     * Записать значение
     * @param nextValue
     */
    set (nextValue) {
      if (value === nextValue) {
        return
      }
      value = nextValue
      for (const subscriber of subscribers) {
        subscriber(value)
      }
    },
    /**
     * Подписка на изменения
     */
    subscribe (subscriber) {
      subscriber(value)
      subscribers.add(subscriber)

      return () => {
        subscribers.delete(subscriber)
      }
    }
  }
}
