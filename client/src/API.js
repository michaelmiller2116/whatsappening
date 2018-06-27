const API_URL = 'https://whatsappening-server.herokuapp.com/events';

export default {
  API_URL,
  async getEvents() {
    const res = await fetch(API_URL);
    return res.json();
  },
};
