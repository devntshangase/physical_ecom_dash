import { useDeferredValue, useMemo, useState } from 'react'
import { searchItems, type FieldGetter } from '../utils/search'

export function useSearch<T>(items: T[], getFields: FieldGetter<T>) {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const results = useMemo(
    () => searchItems(items, deferredQuery, getFields),
    [items, deferredQuery, getFields]
  )

  return { query, setQuery, results }
}