const API_URL = 'https://whatsappening-server.herokuapp.com/events';

export default {
  async getEvents() {
    const res = await fetch(API_URL);
    return res.json();
  },

  // postNewEvent
};

// postNewEvent(API_URL, {
//   method: 'POST',
//   body: JSON.stringify(this.body),
//   headers: {
//     'content-type': 'application/json'
//   }
// })