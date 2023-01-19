# University of Waterloo GPA Calculator

This tool parses your unofficial grade transcript to calculate your cumulative GPA according to the [OSMAS scale](https://www.ouac.on.ca/guide/omsas-conversion-table/).

## Instructions
Log into [Quest](https://uwaterloo.ca/quest/")

Go to Grades -> My Academics -> Unofficial Transcript

Select your applicable Report Type, then click View Report

A PDF of your transcript should automatically open. Here, do CTRL-A and CTRL-C

Then CTRL-V to paste into the text box and finally hit Calculate to return your cumulative GPA.

## Privacy
None of your personal data is stored. There is no database to store your information remotely in this project, since your transcript is essentially read through a very long string. This is then discarded once you exit the page.

## Acknowledgements
This project was heavily inspired by Github user [Abdallah Arar](https://github.com/abdallaharar) and their very similar project found [here](https://github.com/abdallaharar/autogpa-uwaterloo#readme).

About 5 years ago, UWaterloo changed their transcript format which subsequently broke their calculator.

Thus, the goal for this project was to create an updated GPA calculator for students to use that would work with the new UWaterloo transcript format, while also using the React.js framework for cleaner code.