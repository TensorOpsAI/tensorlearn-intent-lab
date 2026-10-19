# Write an intent document for Claude

A 25–40 minute exercise using a fictional support-ticket project. Your deliverable
is **intent.md**. Claude Code reads it through the supplied `CLAUDE.md` import.
Read [the product brief and published rubric](docs/product-brief.md).

## Student steps

1. Fork this repository to your personal GitHub account. Use fictional information
   only, keep the fork public, and keep `main` as its default branch.
2. Clone your fork and enable GitHub Actions in it. Your facilitator enrolls you in
   the lab, approves your exact fork, and confirms the GitHub App connection.
3. Download the compatible TensorLearn client (v0.5.1 or later) from the lab page
   and extract it outside your fork. Follow the page's `--code` connection command
   from your fork folder. Paste your learner token only into the hidden terminal
   prompt. After the facilitator launches the round, use `/load` in Claude Code.
4. Create a branch such as `intent/first-draft`. Read the brief and ask Claude to
   help you write `intent.md`. Change only that file. Review the document yourself.
5. Start a fresh Claude session if needed and ask it to explain the loaded scope
   and acceptance criteria before doing any implementation. Refine your document.
6. Commit and push your branch. Open a PR **inside your own fork**, targeting its
   `main` branch. GitHub may suggest the upstream repository: select your fork instead.
   Opening or updating this PR starts the document checks automatically.
7. Keep the PR open. When ready, run **`/submit`** in the connected Claude Code session
   to submit that exact pushed revision for the current round. The client can also
   create the same-repository PR if it does not exist yet. **No merge is required.**
8. Use `/check` or refresh the lab page to read the saved result. The Actions run
   and `intent-score/score.json` are useful feedback, but an Actions check alone
   does not submit your work or prove that the server saved a score.

A change to your answer requires a new commit, push, and explicit `/submit`.
Keep the PR open until your facilitator finishes reviewing the exercise. Your
facilitator controls the official attempt allowance; advisory CI runs do not count
as official submissions or cap GitHub compute.

## What is verified

Twenty published checks each award five points. The checker reads documents as data
and recomputes the acceptance examples. It never runs your code or asks an LLM to
judge your prose. The facilitator separately reviews clarity, contradictions, and
whether Claude follows the intent. Local `npm test` checks the starter module only.

Claude imports are described in [the official memory documentation](https://code.claude.com/docs/en/memory#import-additional-files).

## Facilitator setup and server scoring

The separate [document checker](https://github.com/TensorOpsAI/tensorlearn-intent-grader)
is pinned to an immutable commit in `.github/workflows/grade.yml`. No server secrets
belong in this starter or student forks. The workflow grades the PR head commit,
not GitHub's synthetic merge preview. Both PR branches must belong to the learner's
approved repository; do not open a PR against the upstream starter.

Before launch, verify that the deployed platform accepts approved public repositories
and pull-request check results, the matching client is downloadable, and the learner
repository's GitHub App installation is approved. Configure the grading allowance.
Observe an actual saved learner score before claiming end-to-end readiness. A client
or server that only supports private repositories is incompatible with this public
fork exercise. See the checker repository's rehearsal checklist.

No customer identity, credentials, or participant data is stored in these public
repositories. All product examples are fictional.
