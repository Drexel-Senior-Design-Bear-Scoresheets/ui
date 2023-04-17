const sharedConfig = require('@cerner/jest-config-terra')

sharedConfig.testMatch = [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ]

module.exports = sharedConfig;