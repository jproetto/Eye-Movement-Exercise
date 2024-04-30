# Project Title

Eye Movement Exercise

## Description of the Project

When moving the mouse around the viewport, the eyes will follow it around! 

## How to Run 

Step 1: Set the counter varialbe in line 2 of the .js file to be the desired number of eyes you would like to display.
Afterward, drag the .html file into the browser, and move the mouse around the viewport to control where the eyes are looking.
Step 2: The color of the iris can be changed in the .css file under the background property of the .iris class.

## Roadmap of Future Improvements

Next I would maybe like to adjust the grid to have the outter grid cells be empty, i.e. creating a margin for advertising or something of that nature. So will have to write instructions which identify every 1st and 4th column - since the grid-template-column property of the .eyes class currently takes the repeat() method with the first parameter, which signifys the number of columns, as 4, meaning the outter columns are every 1st and 4th - such that we can program those cells to not be an eyeTree html element tree, and rather just an empty "<div></div>".
