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
    .then((res) => res.json().then((user) => user))
    .catch((err) => {
      console.log('Login error', err);
      return 'Error attempting to login. Please try again.';
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
