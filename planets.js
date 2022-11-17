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
  description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days.',
  link: 'https://en.wikipedia.org/wiki/Mars'
 },
 {
  name: 'Jupiter',
  image: './img/jupiter.jpg', 
  description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days.',
  link: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
 },
 {
  name: 'Saturn',
  image: './img/saturn.jpg', 
  description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days.',
  link: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
 },
 {
  name: 'Uranus',
  image: './img/uranus.jpg', 
  description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days.',
  link: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
 },
 {
  name: 'Neptune',
  image: './img/neptune.jpg', 
  description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days.',
  link: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
 },
 {
  name: 'Pluto',
  image: './img/pluto.jpg',
  description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days.',
  link: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
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






