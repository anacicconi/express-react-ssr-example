# express-react-ssr-example
A starter for a project using ExpressJs and ReactJs with server side rendering.

Starting a development environment: 

    npm run start:dev

Starting a production environment: 

    npm run start:prod
    
We use webpack (that uses internally babel as a loader) to transpile the front js and css files. We also use babel cli to transpile the server js files. The result will be in the "dist" folder which is then used by nodemon (dev) or pm2 (prod) to launch the server. Changes in the css or js files are automatically loaded. Just refresh the browser and changes will appear.

**Obs:**

In production, the css is in a separated file (bundle.css). It is also minified and the vendor prefixes (webkit, ms...) are added. 

In development, the css is directly inserted into the html. It's not minified and no vendor prefixes are added.
