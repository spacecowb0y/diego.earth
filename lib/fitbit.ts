const access_token = process.env.FITBIT_ACCESS_TOKEN;
const SLEEP_ENDPOINT = `https://api.fitbit.com/1.2/user/-/sleep/date/today.json`;
const LIFE_ACTIVITIY_ENDPOINT = `https://api.fitbit.com/1/user/-/activities.json`;

export const getSleepToday = async () => {

  return fetch(SLEEP_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

export const getLifeActivity = async () => {

  return fetch(LIFE_ACTIVITIY_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
