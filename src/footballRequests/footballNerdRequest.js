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

const getQB = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.fantasyfootballnerd.com/service/players/json/${constants.apiKeys.ffn.apiKey}/QB`)
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

const getRB = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.fantasyfootballnerd.com/service/players/json/${constants.apiKeys.ffn.apiKey}/RB`)
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

const getDefense = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.fantasyfootballnerd.com/service/players/json/${constants.apiKeys.ffn.apiKey}/DEF`)
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

const getWR = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.fantasyfootballnerd.com/service/players/json/${constants.apiKeys.ffn.apiKey}/WR`)
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

const getTE = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.fantasyfootballnerd.com/service/players/json/${constants.apiKeys.ffn.apiKey}/TE`)
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

const getTeams = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.fantasyfootballnerd.com/service/nfl-teams/json/${constants.apiKeys.ffn.apiKey}`)
      .then((res) => {
        const teams = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach((key) => {
            res.data[key].id = key;
            teams.push(res.data[key]);
          });
        }
        resolve(teams);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getByeWeeks = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.fantasyfootballnerd.com/service/byes/json/${constants.apiKeys.ffn.apiKey}`)
      .then((res) => {
        const byes = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach((key) => {
            res.data[key].id = key;
            byes.push(res.data[key]);
          });
        }
        resolve(byes);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getQbProjections = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.fantasyfootballnerd.com/service/draft-projections/json/${constants.apiKeys.ffn.apiKey}/QB`)
      .then((res) => {
        const projections = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach((key) => {
            res.data[key].id = key;
            projections.push(res.data[key]);
          });
        }
        resolve(projections);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// const getRankings = () => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`https://www.fantasyfootballnerd.com/service/draft-rankings/json/${constants.apiKeys.ffn.apiKey}`)
//       .then((res) => {
//         const rankings = [];
//         if (res.data !== null) {
//           Object.keys(res.data).forEach((key) => {
//             res.data[key] = key;
//             rankings.push(res.data[key]);
//           });
//         }
//         resolve(rankings);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

const getRankings = () => {
  try {
    return axios.get(`https://www.fantasyfootballnerd.com/service/draft-rankings/json/${constants.apiKeys.ffn.apiKey}`);
  } catch (error) {
    console.error(error);
  }
};

export default { getQB, getRB, getDefense, getWR, getTE, getTeams, getByeWeeks, getQbProjections, getRankings };
