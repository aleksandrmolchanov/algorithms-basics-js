let capitals = [];

capitals[881 % 20] = 'Vienna';
capitals[1237 % 20] = 'Berlin';
capitals[1323 % 20] = 'Vilnius';
capitals[1614 % 20] = 'Tirana';
capitals[1167 % 20] = 'Copenhagen';
capitals[963 % 20] = 'Luxembourg';
capitals[1067 % 20] = 'Minsk';
capitals[1191 % 20] = 'Dublin';
capitals[1275 % 20] = 'Amsterdam';
capitals[752 % 20] = 'Vatican';
capitals[1786 % 20] = 'Reykjavík';
capitals[1200 % 20] = 'Warsaw';
capitals[1872 % 20] = 'Budapest';
capitals[856 % 20] = 'Madrid';
capitals[1147 % 20] = 'Moscow';


const getCity = (year) => capitals[year % 100];
let city = getCity(1167);
console.log(city);