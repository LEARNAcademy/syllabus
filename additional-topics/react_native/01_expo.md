# Expo

[Expo Installation Guide](https://docs.expo.io/versions/latest/get-started/installation/)

```bash
$ npm install -g expo-cli
$ expo init HelloWorld
$ cd HelloWorld
$ yarn start
```

## Expo on your device

Get the Expo app from the IOS app store, or Google Play store.  Once downloaded, you can scan the QR code from your terminal or browser, and your React app should open up.

## React Native Tags

React Native is like React in the browser, but it is not the same.  One of the major differences is a different set of tags than the familiar HTML tags we use while targeting the browser.  For example this HTML:

### HTML tags
```html
<div>
  <p>Hello World</p>
</div>
```

Looks like this in React Native:

### React Native Tags

```html
<View>
  <Text>Hello World</Text>
</View>
```

### Importing React Native Tags.

One more thing to point out.  For React Native, we have to import all the tags we use, just like the other components that go into our JSX.  Here's a complete component that renders the Hello World example above.  Notice the import statements:

```javascript
import React from 'react';

// Notice that we import the Tags here
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
 return (
   <View style={styles.container}>
     <Text>Hello World</Text>
   </View>
 );
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});
```

### Style
Finally, checkout the ```StyleSheet``` section.  We declare styles right in the Component in React Native.  Give it a try.  You may find that you prefer this to stylesheets all together.
