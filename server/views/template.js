export default ({ body, title }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/public/bundle.css">
        </head>
        
        <body>
        <div id="root">${body}</div>
        <script src="/public/bundle.js"></script>
      </body>
    </html>
  `;
};
