import React from "react"
import Mapbox from "../components/mapbox"
import { useRouter } from "next/router"

const Map = () => {
  const router = useRouter()
  const location = router.query.location

  return (
    <div>
      <Mapbox locationProp={location} />
    </div>
  )
}

export default Map
