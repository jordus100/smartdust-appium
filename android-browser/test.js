const wdio = require("webdriverio");

// run Appium server with parameters: `appium --allow-insecure chromedriver_autodownload`

const sharedCapabilities = {
    'appium:automationName': 'UiAutomator2',
    'platformName': 'Android',
    'appium:uiautomator2ServerInstallTimeout': 60000,
    'appium:adbExecTimeout': 30000,
    'browserName': 'chrome',
    'appium:chromedriverExecutableDir': 'chromedrivers', // https://github.com/appium/appium-uiautomator2-driver/tree/master?tab=readme-ov-file#automatic-discovery-of-compatible-chromedriver
    'wdio:enforceWebDriverClassic': true // https://webdriver.io/blog/2024/08/15/webdriverio-v9-release/#new-features
}
const devicesCapabilities = {
  'appium:udid': 'public.smartdust.me:13090'
}
const opts = {
  path: '/',
  port: 4723,
};

async function main() {
  opts.capabilities = {...sharedCapabilities, ...devicesCapabilities}
  client = await wdio.remote(opts)
  await client.navigateTo("https://smartdust.me") // https://webdriver.io/docs/api/webdriver#navigateto
  await client.getUrl();
}

main();
