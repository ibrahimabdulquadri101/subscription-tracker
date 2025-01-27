#!/usr/bin/env node

const { Command } = require("commander");
// Initialize Commander.js
const program = new Command();

async function fetchPrayerTimes(city) {
    try {
      const { default: fetch } = await import("node-fetch");
      const { default: chalk } = await import("chalk");
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=Nigeria&method=2`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch prayer times. Please check your input.");
      }
      const data = await response.json();
      const { timings } = data.data;

      // Display timings
      console.log(chalk.greenBright(`\nPrayer Times for ${city}:\n`));
      for (const [prayer, time] of Object.entries(timings)) {
        console.log(chalk.blue(`${prayer}: ${time}`));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  program
  .name("prayer-times")
  .description("Fetch daily prayer times for your city")
  .version("1.0.0")
  .option("-c, --city <city>", "City to fetch prayer times for", "Lagos")
  .action((options) => {
    fetchPrayerTimes(options.city);
  });
program.parse(process.argv);
