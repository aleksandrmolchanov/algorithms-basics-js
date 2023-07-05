let capitals = [];

capitals[Math.floor(881 / 20)] = 'Vienna';
capitals[Math.floor(1237 / 20)] = 'Berlin';
capitals[Math.floor(1323 / 20)] = 'Vilnius';
capitals[Math.floor(1614 / 20)] = 'Tirana';
capitals[Math.floor(1167 / 20)] = 'Copenhagen';
capitals[Math.floor(963 / 20)] = 'Luxembourg';
capitals[Math.floor(1067 / 20)] = 'Minsk';
capitals[Math.floor(1191 / 20)] = 'Dublin';
capitals[Math.floor(1275 / 20)] = 'Amsterdam';
capitals[Math.floor(752 / 20)] = 'Vatican';
capitals[Math.floor(1786 / 20)] = 'Reykjavík';
capitals[Math.floor(1200 / 20)] = 'Warsaw';
capitals[Math.floor(1872 / 20)] = 'Budapest';
capitals[Math.floor(856 / 20)] = 'Madrid';
capitals[Math.floor(1147 / 20)] = 'Moscow';


const getCity = (year) => capitals[Math.floor(year / 20)];
let city = getCity(1191);
console.log(city);