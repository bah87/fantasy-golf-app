export const fetchTeam = (email) => {
  console.log('fetching team');
  return fetch('https://fantasy-golf-server.herokuapp.com/team', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email }),
  })
    .then((res) => {
      return res.json().then((teams) => {
        return teams.length ? teams[0] : null;
      });
    })
    .catch((err) => {
      console.log('Error fetching team', err);
    });
};

export const loginUser = (user) => {
  console.log('attempting user login');
  return fetch('https://fantasy-golf-server.herokuapp.com/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ ...user, remember: true }),
  })
    .then((res) => {
      return res.json().then((user) => {
        return user;
      });
    })
    .catch((err) => {
      console.log('Login error', err);
      return { error: 'Error attempting to login. Please try again.' };
    });
};

export const signupUser = (user) => {
  console.log('attempting user signup');
  return fetch('https://fantasy-golf-server.herokuapp.com/signup', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((res) => {
    return res.json().then((data) => {
      if (data.message) {
        return { name: user.name, email: user.email };
      }

      if (data.error) {
        return data.error;
      }

      return 'Error attempting to signup. Please try again.';
    });
  });
};
