This repo attempts to use dynamic imports in order to make a page of an app where the user can load multiple heavy components but only one needs to be loaded at a time. The code correctly bundles and has the splitting flag set to true so there are chunks. The issue is that when the code is run in the browser the following error occurs:  `Uncaught SyntaxError: Cannot use import statement outside a module (at AppIndex-1720072088174.js:1:1)`. 

The issue is suspected to be related to using the React components as pages with their own html tag and then server side rendering them. It also could just be using a wrong flag setting in the tsconfig or build config.

The goal of this repo is to learn more about dynamic imports specifically in the Bun eco-system and any help would be appreciated.

- download from github
- `bun install`
- `bun dev`

This issue has been solved and is live on the most recent version. The issue was that when loading the client side javascript the code was previously using the variable `bootstrapScripts` when it should have been `bootstrapModules` since that will specify <script type="module"/> 
