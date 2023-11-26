#!/usr/bin/env node
require("dotenv").config();

const { program } = require("commander");

const XLSX = require("xlsx");

program
  .description("Add commit to excel file mentioned in the process.env")
  .arguments("<string>", "something to do")
  .option("-c", "--capitalize", "Capitalize the message")
  .action((message: string, opts: { c: boolean }) => {
    try {
      const workbook = XLSX.readFile(process.env.TEMPsomething);
      const sheet = workbook.Sheets["Sheet1"];
      const table = XLSX.utils.sheet_to_json(sheet);
      console.log(table.length)
    } catch (e: any) {
      console.log(e)
    }
  });
program.parse(process.argv);

const options = program.opts();
const sauceStr = options.capitalize ? "sauce" : "no sauce";
const cheeseStr = options.capitalize ? "no cheese" : `${"some"} cheese`;
