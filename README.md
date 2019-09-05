## Demo

To see the application on windows, extract the `angular-forms-demo-win32-ia32.zip` file at the repository root.
Then you can simply launch the `angular-forms-demo.exe` file inside the extracted folder.


## Install Steps

First, install node.js (https://nodejs.org)

Create a project folder on your computer.
Open the terminal in this folder.

Clone the repository from github:
`git clone https://github.com/TimSoual/angular-forms-demo.git`

Install the project dependencies:
`npm install`


Your project is now set up.


## Developpement

To begin working on it, use the following commands:

To work on the browser, use:
`npm start`

To generate a new dev electron app:
`npm run start:electron`


## Build

To build the electron application, first ensure that all dependencies are installed.
`npm install`
And that the angular app is built with production flags:
`npm run build --prod=true`
Then, run this line at the repository root:
`electron-packager . angular-forms-demo --platform=win32 --arch=ia32`

It will create a folder named angular-forms-demo, which is the packaged app.
Note: I did this on windows. On other operating systems there may be additional steps. If so, please complete this readme.

## Testing

There are no implemented tests yet. This is on the TODO list.
