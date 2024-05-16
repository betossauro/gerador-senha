import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Pressable } from 'react-native';
import HistoryData from './HistoryData';
import AppTitle from '../../components/appTitle/AppTitle';
import { styles } from './HistoryStyle';
import { getData } from '../../utils/localStorage';
import * as Clipboard from "expo-clipboard";
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

export default function HistoryScreen({ route }) {
  const { userId } = route.params;
  const [data, setData] = useState([]);
  const [showPassword, setShowPassword] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const history = await HistoryData.getEntries(userId);
      setData(history);
    };
    fetchData();
  }, [userId]);

  const handleRemove = async (id) => {
    await HistoryData.removeEntry(userId, id);
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };


  const renderItem = ({ item }) => (
    <View style={styles.passwords}>
      <View>
        <Text style={styles.text}>{item.nomeApp}</Text>
        {showPassword[item.id] ? <Text style={styles.textPassword}>{item.password}</Text> : <Text>{'*'.repeat(item.password.length)}</Text>}
      </View>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <Pressable onPress={() => handleShowPassword(item.id)}>
          <IconMaterial name={showPassword[item.id] ? "eye-off" : "eye"} size={30} color="#0072BB" />
        </Pressable>
        <Pressable onPress={() => Clipboard.setString(item.password)}>
          <IconAnt name="copy1" size={30} color="#000" />
        </Pressable>
        <Pressable onPress={() => handleRemove(item.id)}>
          <IconMaterial name="delete" size={30} color="#ac2f10" />
        </Pressable>
      </View>
    </View>
  );

  const handleShowPassword = (index) => {
    setShowPassword(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <AppTitle text="histórico de senhas" />
      </View>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}