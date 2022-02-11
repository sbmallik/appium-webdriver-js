"use strict";

const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require('chai');
const { join } = require('path');
const WAIT_FOR_ELEMENT = 3000;

describe('javascript-selenium-mocha tests', () => {
  let driver;

  before(async () => {
    // Setting Desired Capabilities.
    const desiredCaps = {
      platformName: 'Android',
      deviceName: 'Pixel 2 API 29',
      app: join(process.cwd(), './apk/eribank.apk'),
      appPackage: 'com.experitest.ExperiBank',
      appActivity: '.LoginActivity',
      browserName: '',
    };
    // Initiating the Driver
    driver = await new Builder().usingServer('http://localhost:4723/wd/hub').withCapabilities(desiredCaps).build();
  });

  it ('perform login', async () => {
    // Locate OK button inside modal window and click to navigate
    const okButtonOnModal = await driver.wait(until.elementLocated(By.id('button1')), WAIT_FOR_ELEMENT);
    expect(await okButtonOnModal.getText()).to.equal('OK');
    okButtonOnModal.click();

    // Locate the username field and enter value 
    const usernameField = await driver.wait(until.elementLocated(By.xpath('//*[@text="Username"]')), WAIT_FOR_ELEMENT);
    usernameField.sendKeys('company');
    // Locate the password field and enter value 
    const passwordField = await driver.wait(until.elementLocated(By.xpath('//*[@text="Password"]')), WAIT_FOR_ELEMENT);
    passwordField.sendKeys('company');
    // Locate login button and click to navigate
    const loginButton = await driver.wait(until.elementLocated(By.xpath('//*[@text="Login"]')), WAIT_FOR_ELEMENT);
    expect(await loginButton.getText()).to.equal('Login');
    loginButton.click();    

    // Ensure the presence of logout button
    const balanceInfo = await driver.wait(until.elementLocated(By.className('android.view.View')), WAIT_FOR_ELEMENT);
    expect(await balanceInfo.getText()).to.equal('Your balance is: 100.00$');
  });

  after(async () => {
    // close the driver
    await driver.quit();
  });

});

