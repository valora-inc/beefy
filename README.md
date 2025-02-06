# Running the app

1. `yarn` to install dependencies.
1. `yarn prebuild` to (re)generate native iOS and Android project files. Remember to always run this step when adding new dependencies with native modules.
1. `yarn ios` to run the app on iOS
1. `yarn android` to run the app on Android.

# Creating a release

### From GitHub

Add any [tag](https://github.com/divvixyz/beefy/tags) and EAS will automatically start the release process.

### Using EAS CLI

Prerequisite: install EAS CLI and login to EAS. [Learn more](https://docs.expo.dev/build/setup/)

Trigger a release

```
eas build --auto-submit --profile production --platform all
```

> [!IMPORTANT]
> The CLI-triggered build uses the local project files. Ensure you have checked out the proper branch and it is in a good state for a build.

### From the EAS dashboard

Open the [app dashboard](https://expo.dev/accounts/divvi/projects/beefy) in EAS and press "Build from GitHub". [Learn more](https://docs.expo.dev/build/building-from-github/#build-using-the-expo-website)
