import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
const appNavigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(appNavigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
