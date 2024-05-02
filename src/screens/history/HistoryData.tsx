import AsyncStorage from '@react-native-async-storage/async-storage';

class HistoryData {
  static async addEntry(nomeApp, password) {
    const history = await this.getEntries();
    history.push({ nomeApp, password });
    await AsyncStorage.setItem('history', JSON.stringify(history));
  }

  static async getEntries() {
    const result = await AsyncStorage.getItem('history');
    return result ? JSON.parse(result) : [];
  }

  static async removeEntry(index) {
    const history = await this.getEntries();
    history.splice(index, 1);
    await AsyncStorage.setItem('history', JSON.stringify(history));
  }
}

export default HistoryData;