export function ticket(title, priority = 'normal') {
  if (typeof title !== 'string' || !title.trim()) throw new Error('empty-title')
  if (!['low', 'normal', 'urgent'].includes(priority)) throw new Error('invalid-priority')
  return { title: title.trim(), priority }
}
