# github-action-notify-release

GitHub Action that automatically creates an issue with an overview of the commits that are waiting to be released. After creating the release, the issue will be automatically closed during next action run. Editin stuff. additional edit.

## Example

```yaml
name: notify-release
on:
  workflow_dispatch:
  schedule:
    - cron: '30 8 * * *'
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - name: Notify release
        uses: nearform/github-action-notify-release@v1
```

## Usage

Configure this action in your workflows providing the inputs described below in order to get notified in `x` days after the repo has been updated but no release has happened.

### `github-token`
**Optional** A GitHub token.

### `stale-days: 7`
_Optional_ The number of days after which unreleased commits should be considered stale and should notify for a release. Default is `7`.

### `commit-messages-lines: 1`
_Optional_ Limit the number of first x lines from commit messages that will be added in the issue description. No truncation when set to `0`. Default is `1`.
