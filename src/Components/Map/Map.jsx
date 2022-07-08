import { Height } from "@material-ui/icons"
import React from "react"

export default function Map() {
  return (
    <div className="location">
      <div>
        <h1>My Location</h1>
      </div>
      <div>
        <iframe
          style={{
            width: "100%",
            height: "90vh",
          }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=satdobato%20lalitpur%20nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  )
}
