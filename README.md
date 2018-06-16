# Scraping-News
In this assignment, i've created a web app that lets users view and leave comments on the latest news. I've scraped news from Medical News Today. Medical News Today is a web-based outlet for medical news, targeted to both physicians and the general public
In order to create the app i had to:
install and save these npm packages:

1. express

2. express-handlebars

3. mongoose

4. body-parser

5. cheerio

6. request

In order to deploy my app to Heroku, i had to set up an mLab provision. mLab is remote MongoDB database that Heroku supports natively. Followed these steps to get it running:

1. Created a Heroku app in my project directory.
2. Ran this command in my Terminal window:

    * `heroku addons:create mongolab`

    * This command  added the free mLab provision to my project.


The app  accomplishes the following:

  1. Whenever a user visits my site, the app  scrapes stories from a Medical News Today the web-based outlet and displays them for the user. Each scraped article gets be saved to my application database. The app scrapes and displays the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

  2. Users are also can  leave comments on the articles displayed and revisit them later. The comments get be saved to the database as well and associated with their articles. Users can also  delete comments left on articles. All stored comments are visible to every user.
 
 Link to the app:https://scraping-news12345.herokuapp.com/
