#!/usr/bin/env node

const commandExists = require('command-exists').sync
const { spawnSync } = require('child_process')

const main = () => {
  if (!commandExists('terraform')) {
    console.error(
      `Terraform is required for the code formatting. Please install terraform using the link:`
    )
    console.error(
      'https://learn.hashicorp.com/tutorials/terraform/install-cli#install-terraform'
    )
    process.exitCode = 127
    return
  }

  process.argv.slice(2).forEach((file) => {
    const res = spawnSync('terraform', ['fmt', file], {
      stdio: [process.stdin, process.stdout, process.stderr],
    })

    if (res.error) {
      process.exitCode = res.status || 127
    }
  })
}

main()
