# Deployed Link

The deployed website can be accessed at https://willowy-brigadeiros-f4215a.netlify.app/

## GitHub Repository Link

The GitHub repository for the project can be found at https://github.com/ashwin2003/assessment-task

## New Stories Page

The default page displays all the stories ordered from newest to oldest, with pagination.
Each story is linked to its respective link and all the data visible is fetched from the API, including time, points, number of comments, total results etc.
The next page of stories can be viewed by clicking on the "More" button at the bottom of the page. The page will scroll to the top when the next page is viewed.

## Search Page

The search page can be accessed by typing a string in the footer search box on the home page.
The page implements filters in line with the Hacker News Algolia search documentation.
Error handling and other functionalities have been properly implemented.
The number of results and the time taken to fetch are dynamic and fetched from the API.
Pagination has also been added to the search page.
The logic of the pagination is custom and new functionalities can be added in the future.
The structure for stories and comments is the same as the Hacker News website.

## Technical Details

No external library has been used. All components are custom-made.
The Hacker News Algolia API has been used.
A global state management library has not been used, instead state management in functional component using the useState hook has been used.
React Hooks have been used for proper functionality.
Animations have been used for a better UI, for example when the "More" button is clicked or when the page changes.
The project has been developed following best practices.
