#!/usr/bin/env node
require("dotenv").config();
import { Readable } from "stream";
import * as fs from "fs";

const { program } = require("commander");


var XLSX = require("xlsx");

program
  .description("Add commit to excel file mentioned in the process.env")
  .arguments("<string>", "something to do")
  .option("-c", "--capitalize", "Capitalize the message")
  .action((message: string, opts: { c: boolean }) => {
    try {
      const workbook = XLSX.readFile(process.env.TEMPsomething);
      console.log(workbook);
    } catch (e: any) {
      console.log(e);
    }
  });
program.parse(process.argv);

const options = program.opts();
const sauceStr = options.capitalize ? "sauce" : "no sauce";
const cheeseStr = options.capitalize ? "no cheese" : `${"some"} cheese`;
