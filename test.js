const wdio = require("webdriverio");

const sharedCapabilities = {
    'appium:automationName': 'UiAutomator2',
    'platformName': 'Android',
    'appium:uiautomator2ServerInstallTimeout': 60000,
    'appium:adbExecTimeout': 30000
}
const devicesCapabilities = {
    'appium:udid': 'public.smartdust.me:12174'
}
const opts = {
    path: '/',
    port: 4723,
    //maxInstances: 1,
};

async function main() {
  opts.capabilities = {...sharedCapabilities, ...devicesCapabilities}
  client = await wdio.remote(opts)
  await client.activateApp("com.google.android.googlequicksearchbox")
  await client.deleteSession()
}

main();
