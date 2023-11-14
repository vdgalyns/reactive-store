/**
 * Текущее значение
 */
export type UseStateValue<T> = T | null
/**
 * Функция подписчика
 */
export type UseStateSubscriber<T> = (nextValue: UseStateValue<T>) => void
/**
 * Функция для отписки
 * от изменений
 */
export type UseStateUnsubscribe = () => void
/**
 * Методы для работы
 * с состоянием
 */
export type UseStateReturn<T> = {
    /**
     * Получение значения
     */
    get: () => UseStateValue<T>
    /**
     * Установка значения
     * @param nextValue
     */
    set: (nextValue: UseStateValue<T>) => void
    /**
     * Подписка на изменения
     * @param subscriber
     */
    subscribe: (subscriber: UseStateSubscriber<T>) => UseStateUnsubscribe
}
