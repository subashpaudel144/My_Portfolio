import { useState } from "react"
import "./contact.scss"

export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        {/* <img src="assets/shake.svg" alt="" /> */}
        <iframe
          style={{
            width: "100%",
            height: "100%",
          }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=satdobato%20lalitpur%20nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
