#!/usr/bin/env node

// @flow

const program = require("commander");
const { prompt } = require("inquirer");
const createModule = require("./commands/createModule");

// Program basics
program.version("0.1.0").description("Epochly App Code Generator CLI");

// Generate Module
program
  .command("module")
  .alias("m")
  .description("Create a new module folder")
  .action(
    (name: string, baseDir: string): void => {
      prompt(createModule.questions).then(answers =>
        createModule.command(answers)
      );
    }
  );

// Kick the CLI off
program.parse(process.argv);
