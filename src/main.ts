let token = localStorage.getItem("access_token");

    if (!token) {
      // Перенаправление на страницу логина, если токен отсутствует
      location.assign("/src/pages/Login/")
    }
