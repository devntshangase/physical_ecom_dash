export type FieldGetter<T> = (item: T) => Array<string | number | null | undefined>

const normalize = (value: unknown) =>
  String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export function searchItems<T>(
  items: T[],
  query: string,
  getFields: FieldGetter<T>
): T[] {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean)
  if (terms.length === 0) return items

  return items.filter((item) => {
    const haystack = getFields(item).map(normalize).join(' ')
    return terms.every((term) => haystack.includes(term))
  })
}