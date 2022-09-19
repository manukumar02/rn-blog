import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import BlogContext from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="Add Post" onPress={()=> addBlogPost()}/>
      <FlatList
        data={data}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
