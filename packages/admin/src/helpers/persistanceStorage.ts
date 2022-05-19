export const getItem = (key: string): string | null => {
  try {
    return String(localStorage.getItem(key))
  } catch (error) {
    console.error('Error getting data from localStorage', error)
    return null
  }
}

export function setItem<T> (key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error('Error saving data to localStorage', error)
  }
}
