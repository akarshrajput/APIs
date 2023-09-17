navigator.geolocation.getCurrentPosition(
  function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    const coords = [latitude, longitude];
    const map = L.map("map").setView(coords, 13);
    const pos1 = document.querySelector(".position-1");
    const pos2 = document.querySelector(".position-2");
    pos1.textContent = `Latitude  : ${latitude}`;
    pos2.textContent = `Longitude : ${longitude}`;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup(`${latitude} ${longitude}`)
      .openPopup();
  },
  function () {
    alert(`Could not get your position`);
  }
);
