"use client"

import { useState } from "react"

const serviceOptions = ["Photography", "Videography", "Drone coverage", "Livestream", "Prints & branding"]

export default function BookingPlanner() {
  const [eventType, setEventType] = useState("Wedding")
  const [eventDate, setEventDate] = useState("")
  const [location, setLocation] = useState("")
  const [guestCount, setGuestCount] = useState("50–100")
  const [selectedServices, setSelectedServices] = useState<string[]>(["Photography", "Videography"])

  function toggleService(service: string) {
    setSelectedServices((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service])
  }

  const message = [
    "Hello Boony Studios! I’d love to plan coverage for my event.",
    `Event: ${eventType}`,
    `Date: ${eventDate || "Still deciding"}`,
    `Location: ${location || "Please advise"}`,
    `Guests: ${guestCount}`,
    `Interested in: ${selectedServices.length ? selectedServices.join(", ") : "I’d love your recommendation"}`,
  ].join("\n")
  const whatsappHref = `https://wa.me/254790903246?text=${encodeURIComponent(message)}`

  return (
    <div className="planner-card">
      <div className="planner-top"><span className="planner-step">YOUR EVENT BRIEF <span>01 / 01</span></span><h3>Let’s start with the details.</h3><p>We’ll take it from here.</p></div>
      <div className="planner-fields">
        <label className="planner-field"><span>What are you celebrating?</span><select value={eventType} onChange={(event) => setEventType(event.target.value)}><option>Wedding</option><option>Birthday</option><option>Corporate event</option><option>Portrait session</option><option>Other celebration</option></select></label>
        <label className="planner-field"><span>When is the big day?</span><input type="date" value={eventDate} onChange={(event) => setEventDate(event.target.value)} /></label>
        <label className="planner-field"><span>Where will it be?</span><input type="text" placeholder="Town or venue" value={location} onChange={(event) => setLocation(event.target.value)} /></label>
        <label className="planner-field"><span>How many guests, roughly?</span><select value={guestCount} onChange={(event) => setGuestCount(event.target.value)}><option>Under 50</option><option>50–100</option><option>100–200</option><option>200+</option><option>Just me / a few</option></select></label>
      </div>
      <fieldset className="service-picker"><legend>What would you like us to take care of?</legend><div className="service-options">{serviceOptions.map((service) => <label className={`service-option${selectedServices.includes(service) ? " selected" : ""}`} key={service}><input type="checkbox" checked={selectedServices.includes(service)} onChange={() => toggleService(service)} /><span className="checkbox-mark" aria-hidden="true">{selectedServices.includes(service) ? "✓" : "+"}</span>{service}</label>)}</div></fieldset>
      <a className="button button-dark planner-submit" href={whatsappHref} target="_blank" rel="noreferrer">Send my event brief <span aria-hidden="true">↗</span></a>
      <p className="planner-privacy">Opens WhatsApp with your details ready to send. No commitment, just a good first conversation.</p>
    </div>
  )
}
