[Utopia: A Fleet Builder for Star Trek Attack Wing](https://angrytribble.github.io/Star-Trek-Attack-Wing-Utopia)
=====================================================================================================


Getting Started
---------------
# code spaces
(coming soon)

# local install

* ensure [Node.js](http://nodejs.org) is installed
* ensure [Grunt](https://gruntjs.com/getting-started) is installed (typically
  via `npm install -g grunt-cli`)
* `npm install` downloads dependencies
* `npm start` generates application files

The repository's directory structure should be largely self-explanatory:

* `src` contains all source files (e.g. JavaScript and CSS)

  Attack Wing data resides in `src/data`.

* `staw-utopia` contains application files generated via `npm start`

  **NB:** These files should _not_ be edited manually; any changes here will be
          overwritten by `npm start`.

  If you want to inspect the generated `staw-utopia/data/data.json` file, you
  might use a JSON prettifier (e.g. [JSTool](http://www.sunjw.us/jstoolnpp/) for
  [Notepad++](https://notepad-plus-plus.org)).

