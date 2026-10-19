# Product brief: preview a support-ticket CSV import

This is a fictional training project. A support coordinator wants to preview tickets
from a CSV file before any later import is approved. In this round you write
`intent.md` to instruct Claude how to implement that feature in a future round.
**Do not implement the feature now. Change only `intent.md`.**

The repository already has `src/tickets.mjs` and its tests. That code is the stable
ticket representation. A future implementation may add only
`src/import-tickets.mjs` and `tests/import-tickets.test.mjs`. It must not alter the
existing ticket module, the grading workflow, or Claude's instruction loader.
No UI, database, network calls, file writes or package dependencies are needed.

The proposed preview takes CSV text and returns a result without changing any data:

- Require a `title` column; an optional `priority` column is allowed. Reject other,
  missing, or duplicate column names and malformed rows with `unknown-column`.
- Trim surrounding whitespace from values. Reject an empty title with `empty-title`.
- Priorities are `low`, `normal`, `urgent`; missing or blank priority becomes `normal`.
  Reject anything else with `invalid-priority`.
- Accept at most 100 data rows. Check this before validating row values; more rows
  produces `row-limit`. An empty CSV with no header produces `unknown-column`.
- Respect CSV quoting (for example, a title containing a comma).
- Success is `{"tickets":[{"title":"...","priority":"normal"}]}` in input order.
  Failure is `{"error":"error-code"}`. No partial success is returned.
- Verification commands are `npm test` and `git diff --check`.

## What to write

Keep the six headings in `intent.md`: Goal, Scope, Constraints, Plan, Acceptance,
and Verification. Under each, write at least 30 characters of useful, original prose.
Explain the outcome, boundaries, implementation sequence, and observable completion
checks. Tell Claude to ask before implementing or expanding scope. Avoid placeholders.

Include exactly one fenced **json** block with this contract shape:

```json
{
  "schema": 1,
  "change": "ticket-csv-preview",
  "allowed_changes": ["src/import-tickets.mjs", "tests/import-tickets.test.mjs"],
  "protected_paths": ["src/tickets.mjs", ".github/", "CLAUDE.md"],
  "non_goals": ["ui", "database", "network"],
  "requirements": {
    "columns": ["title", "priority"],
    "default_priority": "normal",
    "valid_priorities": ["low", "normal", "urgent"],
    "reject_unknown_columns": true,
    "reject_empty_title": true,
    "max_rows": 100,
    "side_effects": "preview-only"
  },
  "verification": ["npm test", "git diff --check"],
  "approval": "ask-before-implementation",
  "acceptance_cases": [
    {
      "csv": "title,priority\nPrinter issue,urgent\n",
      "expected": {"tickets":[{"title":"Printer issue","priority":"urgent"}]}
    }
  ]
}
```

The example contains only one case. Add correctly predicted cases covering all seven
categories: valid explicit priority, default priority, a quoted title containing a
comma, empty title, unknown column, invalid priority, and too many rows. You may use
`"repeat": 101` on a one-data-row case to represent 101 copies without a long document.
Otherwise omit `repeat`; the input is used once. All expected results must be correct.
The JSON gives the checker objective facts to verify; the prose makes the document
useful for a human and Claude. The JSON alone is not a complete intent document.

## How the score works

Twenty published checks are worth five points each (100 total): document structure,
Claude import, scope and constraints, contract values, verification/approval, correct
examples, and coverage of all seven categories. The trusted checker recomputes the
example outputs; writing a desired score or asserting that examples pass has no effect.

This is a deterministic contract score, not an AI judgment of writing quality. During
the rehearsal, the facilitator will separately discuss clarity, contradictions, and
whether Claude follows the intent. A machine score cannot certify those qualities.

Only `intent.md` may change from the starter files. Changed scaffolding, symlinks,
oversized input, invalid UTF-8 or an unreadable submission cannot earn an official
passing result. No student code is executed by the checker.
