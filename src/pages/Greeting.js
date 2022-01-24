import { useContext, useState } from "react"
import { Card, Col, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import InterestMap from "../components/InterestMap"
import PostContext from "../utils/PostContext"

function Greeting() {
  const { interests, interestPicked, profile } = useContext(PostContext)

  if (!profile) {
    return <h1>Loading...</h1>
  }

  let currentDate = new Date()
  currentDate = currentDate.getHours()

  let greeting = ""

  if (currentDate >= 1 && currentDate < 12) {
    greeting = "Good Morning"
  } else if (currentDate >= 12 && currentDate < 19) {
    greeting = "Good afternoon"
  } else {
    greeting = "Good Evening"
  }

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: 100,
          fontSize: 50,
          color: "darksalmon",
          border: "black",
          border: "solid",
          border: 5,
          padding: 50,
          backgroundColor: "blanchedalmond",
        }}
      >
        <span>{greeting}</span>
        <span>, {profile.firstName}</span> <br />
        <p>Tell us What is your interests?</p>
      </h1>

      <Form onSubmit={interestPicked}>
        <Row md={5} style={{ marginTop: 200 }}>
          {interests.map(interest => (
            <>
              <InterestMap interest={interest} key={interest._id} />
            </>
          ))}
        </Row>
        <button style={{ marginLeft: 950, marginTop: 30, border: "none" }} type="submit">
          Done
        </button>
      </Form>
    </>
  )
}

export default Greeting
