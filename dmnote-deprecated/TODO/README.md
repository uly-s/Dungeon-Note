# 5. Detailed Results
 ## A 
    - Dynamic interactive table editor 
    - simple notepad tool allowing the saving, loading, and nesting of text files
    - Initiative / combat tracker with built in dice roller and continuous feed of dice rolls / actions
    - basic timeline tool for tracking sequential events
    - svg display tool for rendering and annotating custom interactive maps, currently not very interactive but looks nice
    
 ## B 
    - the app is a single page webapp with a tabs bar as a header and each tab constitutes a different component, upon clicking a tab it 
      renders the respective component and populates it with the user's data, the user can then add or edit data with minimal effort via
      buttons, drop down menus, and text fields. Styling is currently very inconsistent because getting all the features integrated             required cobbling together so many different pieces of code that Dr. Frankenstein would take a serious pause
      
 ## C
the app is straight react and node.js instantiated with the common 'create-react-app' tool, as mentioned earlier it is implemented
as a single web page in the form of a javascript object / react component serving as the parent component for an assortment of child      components rendered on top of the parent when they are selected. As you might expect react is doing all the heavy lifting in terms        of rendering and re-rendering the page based on events generated by the user, keeping the need for hardcoded html and css very           minimal. The components for each tab are implemented in seperate .js files as .js classes and react components, so the landing           page need only import the file for each component and write single line of .jsx to create it, keeping the main page very manageable      and modular. The components are implemented either from scratch or with the help of an assortment of npm packages. The only dev          tools needed were git, cmd prompt, and vscode.
      
  ## D
    - because it is a webapp and react is very good about automatic formatting it can be accessed through any desktop web browser made        in this century. It probably does not work as well on mobile but it could be extended with react-native
    
  # 6. Future Direction
  ## A
  1. the biggest feature left unimplemented was the full range of behaviors we wanted out out of the interactive tables, the individual things we wanted it to do were straightforward but getting it to do all of them at once is apparently tricky enough that among hundreds of thousands of npm packages the only ones that would do everything we wanted without a lot of work were propietary and cost money. Therefore I consider the full behavior out of the scope of the project but what we did manage to get it to do was still pretty good.
  
 2. We also did not get around to the campaign selection page as it seemed that it would require making the app multi page and it was just not worth the added complexity, instead we are adding campaign selection as an additional tab. The settings tab can be added at a later date as well, we felt it was best to prioritize the main features.
 
 3. Currently the data of each component is disjoint with the others but it is designed in such a way as to allow them to be integrated with / depend on each other for a very rich user experience. This will almost certainly require the addition of a backend with a database
 
 4. the dice roller has been purposefully left unimplemented as to be done later when more attention can be given to it as generating dice rolls for tabletop games is more nuanced than you would initially expect, bad implementation can lead to lopsided results or outright chaos 

## B
The ideal next move would be setting up a widget allowing a user to populate the app with their campaign data instead of placeholder data, when that is a stable reliable process more features can be added and overall user experience enhanced


## C
We intend to keep developing it as it is a fun project to work on and could potentially be actually useful, it also serves as very practical web development experience
