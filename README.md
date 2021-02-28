# terraform-fmt

[![version](https://img.shields.io/npm/v/terraform-fmt.svg?style=flat-square)](https://www.npmjs.com/package/terraform-fmt)
[![MIT License](https://img.shields.io/npm/l/component-library.svg?style=flat-square)](http://opensource.org/licenses/MIT)

This library makes it possible to run `terraform fmt` command for a list of files with the help of Node.js.

## Motivation

A variation of this library needs to be developed every single time a developer wants to automatically apply formatting to a group of files (e.g. on git commit hook).

## Installation

```bash
npm install terraform-fmt
```

## Usage

```bash
terraform-fmt file1 file2 ... fileN
```
