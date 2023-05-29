# Tproperty management

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 18.x
* Npm 8.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Install

Follow the following steps to get development environment running.



  ```bash
  git clone https://github.com/toutEstCool/next-prisma.git
  ```

  _OR USING SSH_

  ```bash
  
  ```

* Install node modules

   ```bash
    npm install
   ```


### Starting front-end servers

* Build application

  ```bash
  yarn start
  ```
---

## Branches

Prefixes for branches
* feature - feature, task, spike
* fix - bugs

A branch name should be named in following format:

`<prefix>/pm-<clickupTaskId>/<brief-task-name>`

Commit messages should be detailed and be descriptive in following format:

- Write commit messages as a sentence
- Make sure one commit does just one thing
- Use present tense for verbs in the commit description
- The description should clearly describe the changes which were done within the code or any other artifacts included into the commit

Pull Requests (PR)
- After receiving 1 approvals, the developer must execute Squash and Merge
- Use a default PR template
- PR name should follow a template `[PM-clickupTaskId]: task-name`
