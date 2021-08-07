export const fetchData = async (x, y) => {
  let name = ''
  await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${x},${y}.json?access_token=pk.eyJ1IjoiamF3YWRhbW1hcjEyIiwiYSI6ImNrcm42aG42NDRlM3oydXA4NWoza2N6dG8ifQ.UjeHP4M3MlTJg78K0THqRQ `
  )
    .then(res => res.json())
    .then(data => {
      name = data.features[0].place_name
    })
    .catch(err => console.log(err))

  return name
}

export const directionsApi = async (markers, newViewport) => {
  let direction = {}
  await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${markers[0].longitude},${markers[0].latitude};${newViewport?.longitude},${newViewport?.latitude}?geometries=geojson&access_token=pk.eyJ1IjoiamF3YWRhbW1hcjEyIiwiYSI6ImNrcm42aG42NDRlM3oydXA4NWoza2N6dG8ifQ.UjeHP4M3MlTJg78K0THqRQ`
  )
    .then(res => res.json())
    .then(data => {
      direction = data.routes[0]
    })
    .catch(err => console.log(err))
  return { ...direction }
}
