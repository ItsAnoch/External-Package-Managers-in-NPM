# External Package Managers in NPM
A Chrome extension developed to insert install commands of other package managers.

I created this extension because I found it annoying to have to write `bun i <package_name>` and wished other package managers were on NPM by default.

The extension supports Bun, Yarn, and PNPM by default. You can extend the functionality of this extension by adding other managers using the following schema:

To add new schemas, modify the content.js file. Each schema should follow the format `install command <package_name>`, where `<package_name>` will be replaced with the name of the package shown on NPM.

Made with ❤️ by Anoch.






