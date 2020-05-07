# Table of Contents

1. [Base Dependencies](#base-dependencies)
2. [Build](#build)
3. [Components](#components)


## Base Dependencies 
  0. VSCode
  1. [Node.js](https://nodejs.org/en/)
  2. git

`TODO: Add main packages and such`

## Build
  - With node.js and npm installed: `git clone https://github.com/ulysses-io/Dungeon-Note` from git-bash
  - from cmd prompt navigate to `Dungeon-Note/dnote`
  - in cmd prompt `npm install`
  - finnally run `npm start` with a web browser open and `localhost:3000` should appear
  
## Components
1. [Landing](#landing)
2. [Map](#map)
3. [Timeline](#timeline)
4. [Tables](#tables)
5. [Initiative](#initiative)
6. [Notes](#notes)

`TODO: Generally clean up code when possible, add pics for each component`

### Landing
![Main](https://github.com/ulysses-io/Dungeon-Note/blob/master/doc/pics/home.PNG)
- just a stylish landing page
- could be used later as a login / campaign selection

### Map 
- largely useless currently but shows the svg rendering / interactive annotation functionality
- Wasn't able to find good easy to use image annotation components, might need to change from svg entirely
- needs a button to upload maps but maps have to be in a format that works for the site?

### Timeline
- one can add a new item to the timeline with the text input and submit field at the top
- needs widgets instead of straight text
- needs editable dates / text
- needs ability to insert / rearrange events
- needs to be sorted newest to oldest

### Tables
- far from full functionality but displays the ability to select and load different tables dynamically
- data is persistent in the data structure but does not render on the page when selected / loaded
- probably needs a dedicated npm package for tables instead of the DIY version
- need to ability to add tables
- need ability to download / upload / import tables
- long term needs integration with dice rollers, different mini components like maybe a drop down for a cell, sortability, larger text fields, maybe links to a note

### Initiative
- A table is on the left for entering entities, there is also a dice roller in the form of six buttons to the right                         that add dice to the roller (text input field) and can then be added to the dice feed on the right
- dice roller is unimplemented
- no button to roll initiative, also need to sort by initiative
- going to need ability to import players from tables as well as enemies for ease of use
- need ability to add status modifiers 
- need macros for dice rolls

### Notes
- nice note taker in center, can write and save text with button at the bottom
- save button at bottom saves that file name to selected folder on the left 
- when you switch from a file to another it saves whatever was in the editor to the last file selected
- "directory" is ghetto, folders and files seperated, static amount of folders, need an actual file directory
- need dedicated save as / load buttons, can in theory be integrated with quill tool bar
                    
## Roadmap
1. data integration, linking of notes and map / tables
2. entity reference, ie import an entity into inititiative, reference in tables
3. entity editor in form of basic character sheets 
4. dedicated settings page
5. make landing page useful as campaign overview
6. searchable reference of easily listable items like spells for quick lookup
