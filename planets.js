const planets = [
 {
  name: 'Mercury',
  image: './img/mercury.jpg',
  description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun\'s planets.It is named after the Roman god Mercurius(Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes(Ἑρμῆς).Like Venus, Mercury orbits the Sun within Earth\'s orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight.',
  link: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
 },
 {
  name: 'Venus',
  image: './img/venus.jpg', 
  description: 'Venus is the second planet from the Sun. It is sometimes called Earth\'s "sister" or "twin" planet as it is almost as large and has a similar composition.As an interior planet to Earth, Venus(like Mercury) appears in Earth\'s sky never far from the Sun, either as morning star or evening star. Aside from the Sun and Moon, Venus is the brightest natural object in Earth\'s sky, capable of casting visible shadows on Earth at dark conditions and being visible to the naked eye in broad daylight.',
  link: 'https://en.wikipedia.org/wiki/Venus'
 },
 {
  name: 'Earth',
  image: './img/earth.jpg', 
  description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth\'s surface is made up of the ocean, dwarfing Earth\'s polar ice, lakes, and rivers. The remaining 29% of Earth\'s surface is land, consisting of continents and islands.Earth\'s surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes, and earthquakes. Earth\'s liquid outer core generates the magnetic field that shapes Earth\'s magnetosphere, deflecting destructive solar winds. (Wikipedia)',
  link: 'https://en.wikipedia.org/wiki/Earth'
 },
 {
  name: 'Mars',
  image: './img/mars.jpg', 
  description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere (less than 1% that of Earth\'s), and has a crust primarily composed of elements similar to Earth\'s crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes, and polar ice caps. It has two small and irregularly shaped moons: Phobos and Deimos.',
  link: 'https://en.wikipedia.org/wiki/Mars'
 },
 {
  name: 'Jupiter',
  image: './img/jupiter.jpg', 
  description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth\'s night sky after the Moon and Venus, and it has been observed since prehistoric times.',
  link: 'https://en.wikipedia.org/wiki/Jupiter'
 },
 {
  name: 'Saturn',
  image: './img/saturn.jpg', 
  description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.',
  link: 'https://en.wikipedia.org/wiki/Saturn'
 },
 {
  name: 'Uranus',
  image: './img/uranus.jpg', 
  description: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus (Caelus), who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.',
  link: 'https://en.wikipedia.org/wiki/Uranus'
 },
 {
  name: 'Neptune',
  image: './img/neptune.jpg', 
  description: 'Neptune is the eighth planet from the Sun and the farthest known planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. It is referred to as one of the solar system\'s two ice giant planets(the other one being Uranus).',
  link: 'https://en.wikipedia.org/wiki/Neptune'
 },
 {
  name: 'Pluto',
  image: './img/pluto.jpg',
  description: 'Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume, by a small margin, but is slightly less massive than Eris. Like other Kuiper belt objects, Pluto is made primarily of ice and rock and is much smaller than the inner planets. Compared to Earth\'s moon, Pluto has only one sixth its mass and one third its volume.',
  link: 'https://en.wikipedia.org/wiki/Pluto'
 }
]
const listElements = document.querySelectorAll('li')
const img = document.querySelector('img')
const header = document.querySelector('h2')
const link = document.querySelector('a')
const planetDescription = document.getElementById('planetDescriptipm')

let index = 0


header.innerText = planets[0].name
planetDescription.innerText = planets[0].description
link.href = `${planets[0].link}`

for (let index = 0; index < listElements.length; index++) {
 listElements[index].addEventListener('click', () => {
  header.innerText = planets[index].name
  link.href = `${planets[index].link}`
  planetDescription.innerText = planets[index].description
  img.setAttribute('src', planets[index].image)
 })
 
}






