let timer;

export default {
  changeIsLoading(context, payload) {
    context.commit('setLoading', payload.value);
  },
  handleFetchErrors(context, payload) {
    context.commit('setFetchError', payload.value);
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async auth(context, payload) {
    const url =
      payload.mode === 'login'
        ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
            import.meta.env.VITE_APP_API_KEY
          }`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
            import.meta.env.VITE_APP_API_KEY
          }`;
    try {
      context.dispatch('changeIsLoading', { value: true });
      const signupFormData = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      };
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(signupFormData),
      });

      const data = await response.json();

      if (!response.ok) {
        const error = data.message || 'Something went wrong';
        throw new Error(error);
      }

      const expiresIn = +data.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;

      localStorage.setItem('token', data.idToken);
      localStorage.setItem('userId', data.localId);
      localStorage.setItem('expirationDate', expirationDate);

      timer = setTimeout(function () {
        context.dispatch('autoLogout');
      }, expiresIn);

      context.commit('setUser', data);
    } catch (error) {
      context.dispatch('handleFetchErrors', { value: error.message });
    } finally {
      context.dispatch('changeIsLoading', { value: false });
    }
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expirationDate = localStorage.getItem('expirationDate');

    const expiresIn = +expirationDate - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        localId: userId,
        idToken: token,
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');

    clearTimeout(timer);

    context.commit('setUser', {
      userId: null,
      token: null,
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  },
};
