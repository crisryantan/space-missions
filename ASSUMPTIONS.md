**1. Assumptions**

Please list any assumptions in the `ASSUMPTIONS.md` file that you have made in order to solve any problems.

**My Assumptions**
- to run the project, npm install for both react-project and server folders and enter "npm run start" on command line
- Since I am in a time limit, I preferred to use react-boilerplate as it is a structure that I am used to and confident that I can code fast.
- I also used the antd as my ui-library to handle my grid system and used other components like message pop-up for validations.
- I don't have any experience using photoshop, so I took it upon myself to convert the psd into a sketch file where it is easy for me to navigate through the features needed to make.
- Some of the specifications I didn't really follow especially font,margin and padding sizes because they look way too off when made in code. One example was the font-size for the text header of "Deep Space Mission" it was 72px which was really big, I adjusted it to 48px. This applies to margin and padding sizes as well.
- Since I didn't use photoshop and the converted sketch file didn't give me the exact color schemes for the project, I used a third party chrome tool "Color picker" to tell me the colors I needed to use.
- My solution on filtering, since we have an "Apply" button and we don't apply filters right away. I had a parent state and child state for filters. The reason for this is that we still need a state to listen to all the changes made in SearchFilters component. Only when the user presses the "Apply" button will make the Child filter update the Parent filter. The Parent filter in turn will be used to filter the number of launches displayed using the "filterLaunches" method I made.
