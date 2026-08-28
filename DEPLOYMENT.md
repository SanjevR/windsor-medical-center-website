# GoDaddy cPanel Deployment

1. Review the legacy files in `public/forms` and replace any outdated form before publishing. In particular, verify every printed address, telephone number, fax number, and sensitive-information field.
2. Stop the local Vite server with `Ctrl+C`.
3. From the project folder, run:

   ```powershell
   npm run build
   ```

4. Confirm that `dist` contains `index.html`, `.htaccess`, `assets`, `forms`, `images`, `robots.txt`, and `sitemap.xml`.
5. In cPanel File Manager, open `public_html`.
6. Delete the GoDaddy placeholder files `home.html`, `layout-styles.css`, and `404.shtml`. Leave `cgi-bin` alone.
7. Select everything inside the local `dist` folder, create a ZIP, and upload that ZIP to `public_html`.
8. Extract the ZIP directly in `public_html`.
9. Confirm that `public_html/index.html` exists. There must not be an extra `dist` subfolder around the website.
10. Visit `https://windsormedicinenewjersey.com/` and test every menu item, both maps, phone links, and several patient forms.
11. Test a direct route such as `https://windsormedicinenewjersey.com/hours-of-operation`. The included `.htaccess` should prevent a 404.

## Rollback during early testing

Before replacing a later working deployment, download a cPanel ZIP of the current `public_html` contents. The original GoDaddy placeholder site does not require preservation.
