# CryptApp
CryptApp is a small test that shows a list of all crypto trading pairs. All the users can be able to set a list of favorite pairs and delete them. Also the users can see the top major gainer of the last 24 hours.
It's for iOS & Android.


### Local Deploy Instructions

```sh
# Clone or download repository
git clone https://github.com/sagredoIsmael/CryptApp.git
```

```sh
# Install packages (node modules)
$ npm install
```

```sh
# Install packages for iOS
$ cd ios && pod install
```


```sh
# Link your device or simulator for launch app (Use this tutorial for help: https://facebook.github.io/react-native/docs/running-on-device
For Android:
$ react-native run-android
For iOS: 
$ cd ios && open CryptApp.xcworkspace
```


```sh
### Warnings

#It's necessary for Android create keyStore
$cd android/app && keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

#It's necessary to have the android sdk path correctly -> Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file.

#It's necessary to have singing Certificate for Xcode.

```

