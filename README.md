# Appium with Webdriver & JS

***

## Test Framework

This repository contains the test code, which executes appium tests on **Android** devices, using **selenium-webdriver** and **javaScript**. At the moment the testing is restricted to Android apps while excluding the mobile web. For simplicity sake the mocha test runner was used to execute the tests. Please note the device and appium server setups are not included here. These are assumed to be pre-set and operational. Simple assertions are dealt with chai package. All tests are run locally and no cloud based platform in used.

### Pre-requisites

* A Bourne-compatible shell, like bash or zsh
* [Git](http://gitscm.com/)
* [Node 14.17+](http://nodejs.org/)
* Android device previously setup through device manager of Android Studio
* Appium server is installed and running

### Setup

Clone this GIT repository to the local machine as follows:

```bash
git clone git@github.com:sbmallik/appium-webdriver-js.git
cd appium-webdriver-js
```

The following step installs all dependent packages required by the test code. Please note the system configuration used in this repository is minimal and it was added inside `package.json` file.

```bash
npm ci
```

### Running Tests

All tests are executed in the local machine. These uses a local instance of `selenium-webdriver` using the port 4723, which in turn uses the appium server. The device name field in the test file should be updated depending on the existing device name in the test setup. 

The test runner used in this project is Mocha, so that it allows the javaScript conventional test file structure. 

All tests are located in *subfolders* of `test/specs/` and this is configurable. The test suite can be executed with the following command:

```bash
npm run test
```

### Filtering tests

In order to run a single test an alternate command is used, which require an additional parameter - the filename with relative path from the root folder. The parameter can also be a regular expression matching the desired file name. The new command would be:

```bash
npm run test-single -- <filename with relative path>
```

