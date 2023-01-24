# [University of Waterloo GPA Calculator](https://caseofcamel.github.io/uwaterloo-gpa-calculator/)

This tool parses your unofficial grade transcript to calculate your cumulative GPA according to the [OSMAS scale](https://www.ouac.on.ca/guide/omsas-conversion-table/).

## Instructions
1. Log into [Quest](https://uwaterloo.ca/quest/").

2. Go to Grades -> My Academics -> Unofficial Transcript.

3. Select your applicable Report Type, then click View Report.

4. A PDF of your transcript should automatically open. Here, copy the entire transcript (Windows: CTRL + A and CTRL + C on Windows, Mac: Command + A and Command + C)

5. Then paste the transcript into the text box (Windows: CTRL + V, Mac: Command + V) and finally hit Calculate to return your cumulative GPA.

## Privacy
None of your personal data is stored. There is no database to store your information remotely in this project, since your transcript is essentially read through a very long string. This is then discarded once you exit the page.

## Acknowledgements
This project was heavily inspired by Github user [Abdallah Arar](https://github.com/abdallaharar) and their very similar project found ([here](https://github.com/abdallaharar/autogpa-uwaterloo#readme)).

About 5 years ago, UWaterloo changed their transcript format which subsequently broke their calculator.

Thus, the goal for this project was to create an updated GPA calculator for students to use that would work with the new UWaterloo transcript format, while also using the React.js framework for cleaner code.