const API_URL = 'https://whatsappening-server.herokuapp.com/events';
const G_KEY = 'AIzaSyAvm0Ldk9fjndmn7oK_qQCRsjxXsEJrBik';

export default {
  G_KEY,
  async getEvents() {
    const res = await fetch(API_URL);
    return res.json();
  },
};
