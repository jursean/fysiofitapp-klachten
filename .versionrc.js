// .versionrc.js

const sdkVersion = '44.0.0';

module.exports = {
    bumpFiles: [
        {
            filename: 'package.json'
        },
        {
            filename: 'package-lock.json'
        },
        {
            filename: 'app.json',
            updater: require.resolve('standard-version-expo'),
        },
        {
            filename: 'app.json',
            updater: require.resolve('standard-version-expo/android/increment'),
        },
        {
            filename: 'app.json',
            updater: require.resolve('standard-version-expo/ios'),
        },
        {
            filename: 'ios/Walkintheparq/Info.plist',
            updater: require.resolve('@brettdh/standard-version-expo/ios/native/app-version'),
        },
        {
            filename: 'ios/Walkintheparq/Info.plist',
            updater: require.resolve('@brettdh/standard-version-expo/ios/native/buildnum/version'),
        },
        {
            filename: 'android/app/build.gradle',
            updater: require.resolve('@brettdh/standard-version-expo/android/native/app-version'),
        },
        {
            filename: 'android/app/build.gradle',
            updater: require.resolve('@brettdh/standard-version-expo/android/native/buildnum/increment'),
        },
    ],
};
