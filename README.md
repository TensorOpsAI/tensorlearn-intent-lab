# Write an intent document for Claude

A 25–40 minute exercise using a fictional support-ticket project. Your deliverable
is **intent.md**. Claude Code reads it through the supplied `CLAUDE.md` import.
Read [the product brief and published rubric](docs/product-brief.md).

## Student steps

1. Fork this repository to your personal GitHub account. Use fictional information
   only, keep the fork public, and keep `main` as its default branch.
2. Clone your fork, open it in Claude Code, and enable GitHub Actions in the fork.
3. Create a branch such as `intent/first-draft`. Read the brief and ask Claude to
   help you write `intent.md`. Change only that file. Review the document yourself.
4. Start a fresh Claude session. Ask it to explain the scope and acceptance criteria
   it loaded before doing any implementation. Refine your document as needed.
5. Commit and push your branch. Open a PR **inside your own fork**, targeting its
   `main` branch. GitHub may suggest the upstream repository: select your fork instead.
6. Review and merge your PR. **The merge is your submission for this exercise.**
7. Open the Actions run for the merged commit. Download `intent-score` and inspect
   `score.json`. Discuss the feedback with your facilitator and repeat with a new PR.

## What is verified

Twenty published checks each award five points. The checker reads documents as data
and recomputes the acceptance examples. It never runs your code or asks an LLM to
judge your prose. The facilitator separately reviews clarity, contradictions, and
whether Claude follows the intent. Local `npm test` checks the starter module only.

Claude imports are described in [the official memory documentation](https://code.claude.com/docs/en/memory#import-additional-files).

## Facilitator setup and server scoring

The separate [document checker](https://github.com/TensorOpsAI/tensorlearn-intent-grader)
is pinned to an immutable commit in `.github/workflows/grade.yml`. No server secrets
belong in this starter or student forks. The workflow emits the platform's score.json
format; GitHub App delivery and admission of the submission must also be configured
on the platform before a score can appear there.

**Rehearsal blocker:** the currently observed platform requires a private repository
and explicit submission of an open PR. It does not currently accept this exercise's
public-fork merge as an official submission. The exercise can be prepared and its
checker tested, but the website score step remains unverified and blocked by that
mismatch. Do not treat an Actions score as proof that the server saved it.

The exercise should remain unlaunched until the facilitator has resolved that setup
and checked one actual learner result end to end. See the checker repository's
rehearsal checklist. No customer identity, credentials, or participant data is stored
in these public repositories.
