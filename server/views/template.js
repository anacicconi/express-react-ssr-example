export default ({ body, title }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/public/bundle.css">
        <script src="/public/bundle.js"></script>
      </head>

      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};
