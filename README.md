# Dungeon-Note
## Base Dependencies
  0. VSCode
  1. [Node.js](https://nodejs.org/en/)
  2. git

## Build
  - With node.js and npm installed: `git clone https://github.com/ulysses-io/Dungeon-Note` from git-bash
  - from cmd prompt navigate to `Dungeon-Note/dnote`
  - in cmd prompt `npm install`
  - finnally run `npm start` with a web browser open and `localhost:3000` should appear
  
## Use
  - the top of the page has a tab bar with 'Main, Map, Timeline, etc'
  - each tab when selected opens the appropriate component
    - `Main`: just a stylish landing page
    - `Map`: largely useless currently but shows the svg rendering / interactive annotation functionality
    - `Timeline`: one can add a new item to the timeline with the text input and submit field at the top
    - `Table`: far from full functionality but displays the ability to select and load different tables dynamically
      -> data is persistent in the data structure but does not render on the page when selected...
    - `Initiative`: A table is on the left for entering entities, there is also a dice roller in the form of six buttons to the right                         that add dice to the roller (text input field) and can then be added to the dice feed on the right
    - `Notes`: this is definitely the most complex component so far, there is a pretty sophisticated text editor and a hacked together                  "file directory" on the left, the top contains 3 different folders selectable from a select component, selecting one                    will display the "files" it contains in another select component, selecting one of the items will load it into the                      text editor, it will also save whatever was in the text editor into the previously selected file, files can also be added                to the folder with an input text field and submit button beneath the text editor 
                    
