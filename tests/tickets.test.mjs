import test from 'node:test'
import assert from 'node:assert/strict'
import { ticket } from '../src/tickets.mjs'

test('a ticket trims its title and defaults to normal priority', () => {
  assert.deepEqual(ticket(' Printer issue '), { title: 'Printer issue', priority: 'normal' })
})
test('a ticket rejects a blank title and unsupported priority', () => {
  assert.throws(() => ticket(' '), /empty-title/)
  assert.throws(() => ticket('Printer issue', 'critical'), /invalid-priority/)
})
