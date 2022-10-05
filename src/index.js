'use strict'
const core = require('@actions/core')
const toolkit = require('actions-toolkit')

const { runAction } = require('./release-notify-action')

async function run() {
  toolkit.logActionRefWarning()

  const token = core.getInput('github-token', { required: true })
  const staleDays = Number(core.getInput('stale-days'))
  const commitMessageLines = Number(core.getInput('commit-messages-lines'))

  console.log('TEST')
  await runAction(token, staleDays, commitMessageLines)
}

run().catch((err) => core.setFailed(err))
