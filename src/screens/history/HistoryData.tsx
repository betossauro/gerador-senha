import axios from 'axios';

class HistoryData {
  static async addEntry(userId, nomeApp, password) {
    try {
      await axios.post(`http://localhost:3000/api/item`, { userId, nomeApp, password });
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  }

  static async getEntries(userId) {
    try {
      const response = await axios.get(`http://localhost:3000/api/item?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting entries:', error);
      return [];
    }
  }

  static async removeEntry(userId, id) {
    try {
      await axios.delete(`http://localhost:3000/api/item/${id}?userId=${userId}`);
    } catch (error) {
      console.error('Error removing entry:', error);
    }
  }
}

export default HistoryData;
