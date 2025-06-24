const wdio = require("webdriverio");

// use iproxy (part of libimobiledevice) (or go-ios or pymobiledevice3) beforehand to proxy iOS device's WDA port (usually 8100) to your machine 
// https://libimobiledevice.org/ https://github.com/doronz88/pymobiledevice3 https://github.com/danielpaulus/go-ios (one of those)
// e.g. `iproxy 7777:8100`

// if you wish to run Safari web browser tests, you need to first allow it in the iOS device's settings: Apps > Safari > Advanced > enable Remote Automation and Web Inspector

const sharedCapabilities = {
  'wdio:enforceWebDriverClassic': true, // https://webdriver.io/blog/2024/08/15/webdriverio-v9-release/#new-features
  'appium:deviceName': "blabla",
  'appium:automationName': "XCUITest",
  'appium:platformName': "iOS",
  'browserName': "Safari", // disable this to run native tests
  'appium:udid': "auto",
  'appium:usePrebuiltWDA': true,
  'appium:webDriverAgentUrl': "http://localhost:7777", // set the port on which iproxy is forwarding WDA
}

const opts = {
  hostname: 'localhost',
  port: 4723,
};

async function main() {
  opts.capabilities = {...sharedCapabilities}
  client = await wdio.remote(opts)
  await client.navigateTo("https://smartdust.me") // https://webdriver.io/docs/api/webdriver#navigateto
  await client.getUrl();
}

main();
