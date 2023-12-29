export const cityCoordinates = async (city) => {
  const position = fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=96aaccbc-e728-4c64-bcf3-ba18bc4c3d20&geocode=${city}&format=json`,
  )
    .then((geo) => geo.json())
    .then((g) => g.response)
    .then((g) => g.GeoObjectCollection)
    .then((g) => g.featureMember[0])
    .then((g) => g.GeoObject)
    .then((g) => g.Point)
    .then((g) => g.pos);
  // console.log((await position).split(" ").map((el) => Number(el)))
  return (await position).split(" ").map((el) => Number(el));
};
