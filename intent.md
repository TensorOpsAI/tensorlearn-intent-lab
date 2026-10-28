# Intent

## Goal
The goal is to following the training excersice instructions. We then need to submit the solution branch and score the excersice.

## Scope
The scope is to set up our machine with claude and Github CLI and fork down the project and create our own branch from it.

## Constraints
Some of the constraints are not having a pro or max version of Clause code.

## Plan
The plan is to update this file follwoing the intructions provided/ We will then submit a Pr to score.

## Acceptance
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

## Verification
Verify the result by checking the json code and check for any errors using npm test and git diff --check.