export const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        alert(
          "Не могу определить местоположение! Попробуйте проверить доступ к геолокации или проверьте подключение к интернету!"
        );
        reject(error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 3600,
      }
    );
  });
};
