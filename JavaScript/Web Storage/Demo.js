    //  Set key with automatic JSON stringify
    function setStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
      console.log(` Set [${key}]:`, value);
    }

    //  Get key with automatic JSON parse + error handling
    function getStorage(key) {
      const raw = localStorage.getItem(key);
      try {
        const parsed = JSON.parse(raw);
        console.log(` Got [${key}]:`, parsed);
        return parsed;
      } catch (e) {
        console.warn(` Couldn't parse [${key}]`, raw);
        return raw;
      }
    }

    //  Remove a specific key
    function removeStorage(key) {
      localStorage.removeItem(key);
      console.log(` Removed [${key}]`);
    }

    //  Clear entire localStorage
    function clearStorage() {
      localStorage.clear();
      console.log(" All storage cleared.");
    }

    //test
    setStorage('user', { name: 'Tez Bhai', role: 'Full Stack Dev' });
    getStorage('user');
    removeStorage('user');
    clearStorage();