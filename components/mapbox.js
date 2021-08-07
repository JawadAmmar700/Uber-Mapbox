import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { useState, useRef, useCallback, useEffect } from "react"
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  Source,
  Layer,
} from "react-map-gl"
import Geocoder from "react-map-gl-geocoder"
import { fetchData, directionsApi } from "../useFetchData"
import Button from "@material-tailwind/react/Button"
import PaypalModel from "./paypalModel"

const MAPBOX_TOKEN = process.env.mapboxKEY

const navControlStyle = {
  right: 10,
  top: 10,
}

const Mapbox = ({ locationProp }) => {
  //defining States
  const [viewport, setViewport] = useState({})
  const mapRef = useRef()
  const [geo, setGeo] = useState({})
  const [markers, setMarkers] = useState([])
  const [showPopup, setShowpopup] = useState(-1)
  const [originName, setOriginName] = useState("")
  const [destinationName, setDestinationName] = useState("")
  const [show, setShow] = useState(false)
  const [location, setLocation] = useState(locationProp)
  const [ride, setRide] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // defining the style and the way the direction will be presented in the map
  const layerStyle = {
    id: "route",
    type: "line",
    source: "route",
    paint: {
      "line-color": "#fcfc03",
      "line-width": 5,
    },
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
  }

  // it will run once the component re-renders and stop, which is setting our current location and store them in the state
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setViewport({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 10,
        width: "100vw",
        height: "100vh",
      })
      setMarkers([
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      ])

      fetchData(position.coords.longitude, position.coords.latitude).then(
        name => {
          setOriginName(name)
        }
      )
    })
  }, [])

  //main function responsible for changing the view in the map
  const handleViewportChange = newViewport => {
    setViewport(newViewport)
  }

  //function to round a number
  function round(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)
  }

  // function is called whever the search component changes
  const handleGeocoderViewportChangeTo = newViewport => {
    const geocoderDefaultOverrides = {
      transitionDuration: newViewport.transitionDuration,
    }
    if (!newViewport) return
    setMarkers([
      ...markers,
      { latitude: newViewport.latitude, longitude: newViewport.longitude },
    ])
    directionsApi(markers, newViewport).then(data => setGeo(data))

    fetchData(newViewport.longitude, newViewport.latitude).then(name =>
      setDestinationName(name)
    )

    console.log("zoom", newViewport)
    setTimeout(() => {
      setShow(true)
    }, newViewport.transitionDuration)
    return handleViewportChange({
      ...newViewport,
      zoom: newViewport.zoom,
      ...geocoderDefaultOverrides,
    })
  }

  const clearSearch = () => {
    setGeo(null)
    setMarkers(markers.slice(0, 1))
    setShow(false)
    setLocation("")
  }

  return (
    <div>
      <div className="map">
        {/* rendering the map in the browser */}
        <ReactMapGL
          ref={mapRef}
          {...viewport}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          {/* navigation on the top-left corner of the map */}
          <NavigationControl style={navControlStyle} />
          {/* rendering the directions from one point to another */}
          {geo != null ? (
            <Source
              id="route"
              type="geojson"
              data={{
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: geo?.geometry?.coordinates,
                },
              }}
            >
              <Layer {...layerStyle} />
            </Source>
          ) : (
            <></>
          )}

          {markers.length &&
            markers.map((point, id) => (
              <div key={id}>
                <Marker
                  latitude={Number(point?.latitude)}
                  longitude={Number(point?.longitude)}
                  offsetLeft={-20}
                  offsetTop={-10}
                  draggable={false}
                  onClick={() => setShowpopup(id)}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/map-pin.png"
                    alt="location mark"
                  />
                </Marker>
                {showPopup === id && (
                  <Popup
                    latitude={point?.latitude}
                    longitude={point?.longitude}
                    closeButton={true}
                    closeOnClick={true}
                    anchor="top"
                    onClose={() => setShowpopup(-1)}
                  >
                    <div style={{ width: "300px" }}>
                      {id === 0 ? (
                        <p>Origin: {originName}</p>
                      ) : (
                        <div>
                          <p> Destination: {destinationName}</p>
                          <p>distance:{round(geo?.distance / 1000, 2)} km</p>
                          <p>durations:{round(geo?.duration / 60, 2)} min</p>
                        </div>
                      )}
                    </div>
                  </Popup>
                )}
              </div>
            ))}
        </ReactMapGL>
      </div>
      {/* rendering the Search places functionality  */}
      <div className="search">
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChangeTo}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
          placeholder="choose your destination"
          onClear={clearSearch}
          inputValue={location ? location : ""}
        />
      </div>
      {show == true ? (
        <div className="w-[240px] h-[300px] flex flex-col items-center rounded p-2 z-10 bg-white absolute top-[52px] left-[10px]">
          <h3>Choose a ride</h3>
          <div
            className="w-[80%] h-[50px] rounded  mt-4 flex justify-between items-center p-2 hover:bg-blue-300 bg-blue-400 cursor-pointer"
            onClick={() =>
              setRide(round(round(geo?.distance / 1000, 2) * 2.45, 2))
            }
          >
            <p>Uber X</p>
            <p>Price: {round(round(geo?.distance / 1000, 2) * 2.45, 2)}$</p>
          </div>
          <div
            className="w-[80%] h-[50px] rounded mt-4 flex justify-between items-center p-2 bg-blue-400 hover:bg-blue-300 cursor-pointer"
            onClick={() =>
              setRide(round(round(geo?.distance / 1000, 2) * 3.67, 2))
            }
          >
            <p>Uber XS</p>
            <p>Price: {round(round(geo?.distance / 1000, 2) * 3.67, 2)}$</p>
          </div>
          <div
            className="w-[80%] h-[50px] rounded mt-4 flex justify-between p-2 items-center bg-blue-400 hover:bg-blue-300 cursor-pointer"
            onClick={() =>
              setRide(round(round(geo?.distance / 1000, 2) * 4.55, 2))
            }
          >
            <p>Uber El</p>
            <p>Price: {round(round(geo?.distance / 1000, 2) * 4.55, 2)}$</p>
          </div>
          {ride && (
            <Button
              color="lightBlue"
              type="button"
              ripple="light"
              className="mt-4"
              onClick={() => setShowModal(true)}
            >
              Get ride {ride}$
            </Button>
          )}
        </div>
      ) : (
        ""
      )}

      <PaypalModel
        showModal={showModal}
        setShowModal={setShowModal}
        price={ride}
      />
    </div>
  )
}

export default Mapbox
