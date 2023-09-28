# 1. Setup and Overview

## 1.1 Resources

Generate SSH Key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent 

Adding an SSH Key to Github: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account 

Jeremy’s very cool git guide: https://gist.github.com/jeremyle56/f3b664f0491d6ec0d9a03ab34780b876 

Git commands cheat sheet: https://docs.google.com/document/d/1KkC-NQB3OIUA3LnGJRxulVJaJXPF8smtSbw0c0Mye40/edit?usp=sharing 

Install nodeJs (use LTS): https://nodejs.org/en/download 



## 1.2 Project Setup

Project repository: https://github.com/crocyoiin/23t3-react-workshop 

First, create a new fork of the repository by clicking the ‘fork’ button in the top right corner. This essentially makes a copy of the project repository so you have your own copy to work with! After that, clone the repository and run `npm i` to install all the project dependencies.

To run the project, type `npm run dev` into the terminal, and copy paste the link http://localhost:5173/ into your browser to view the app! Every time you make changes, the page will automatically refresh when you save so you don't need to manually reload the page every time :)


## 1.3 Repository Overview

Similar to how we load our vanilla html + css pages, our `index.html` is loaded when we run our app, we can see that our script directs to /src/main.tsx, which renders an <App /> nested inside <BrowserRouter>. This allows us to render different pages depending on the url. Your project repository will likely be set up by your training lead, and it is unlikely that you will have to touch these files much.



You should be greeted by this screen!

Every project will be set up slightly differently (especially since we wanted to have an example and exercise in the same repo) but will usually contain the following files or directories:
| File/dir           | Description                                                                                                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| App.tsx            | Your project’s main hub! Usually will contain some routes to different pages.                                                                                                     |
| index.css          | Any global styling can be found here (basically css that will show up on all your pages)                                                                                          |
| types.ts           | Depending on the scope of your project, this might be a directory with a few files in it. But this contains any interfaces or types that you may need to use to pass data around. |
| assets/            | Any media you might use in your `.tsx` files!                                                                                                                                     |
| components/ props/ | Reusable chunks of code + styling that you have broken your page down into. Props are literally just components that take in ‘properties’.                                        |
| pages/             | The main pages that your ‘app’ has. Usually you would have a route in `App.tsx` to each page.                                                                                     |


# 2. Exercise Lore

Your task is to implement this todo list! We’ve given you a blank page in `src/pages/ExercisePage` to get you started and some css files if you don’t want to pull your teeth out styling, but feel free to modify any of the code to your liking! If at any point you’re stuck but too shy to ask for help, you can find some provided solutions in `src/pages/SolutionPage`.

You might have to make new tsx files for your components/props.

# 3. Exercise Tasks
| Feature                 | Files                     | Description                                                                                                                                                                                                                                        |
|-------------------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.1 Creating item cards | TodoItem.tsx TodoItem.css* Data.tsx | Harcode some sample data for your todo tasks for now. For each item in the array, create a new item card that displays the text (ie. your tasks).  Hint: We’re passing in a string to display, how can we pass in an argument to a component? |
| 3.2 Input box           | HeaderComponent.tsx       | Have a look at how we’re currently storing the hardcoded  Hint: useState may come in useful! Remember that you can push and filter arrays :)                                                                                                       |
| 3.3 Crossing out items  | TodoItem.tsx TodoItem.css* | We want to be able to render our crossed out components and regular item cards differently. You might have to create a new type for your todo items, which stores the todo string and status.                                                      |

*You might find it easier to do inline css rather than creating a separate css file. The solutions mostly use inline css :)

# 4. Extras

Finished early? Here are some bonus features that you can try to implement!
- Deleting todo cards
- Deadlines for todo cards
- Filtering to display only uncompleted / completed
- Dragging to rearrange cards
- Have an experiment with setting up your own react app
