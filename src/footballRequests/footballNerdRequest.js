import axios from 'axios';
import constants from '../constants';

// const getFootballNerdPlayers = () => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`https://www.fantasyfootballnerd.com/services/players/json/${constants.apiKeys.ffn.apiKey}`)
//       .done((data) => {
//         resolve(data);
//       })
//       .fail((error) => {
//         reject(error);
//       });
//   });
// };

const getFootballNerdPlayers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.fantasyfootballnerd.com/service/players/json/${constants.apiKeys.ffn.apiKey}`)
      .then((res) => {
        const players = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach((key) => {
            res.data[key].id = key;
            players.push(res.data[key]);
          });
        }
        resolve(players);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getFootballNerdPlayers };
