import React, { Component } from "react";
import FeedbackOptions from "./atoms/FeedbackOptions/FeedbackOptions"
import Statistics from "./atoms/Statistics/Statistics"
import Section from "./atoms/Section/Section"
import Notification from "./atoms/Notification/Notification"
import styled from "styled-components";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (event) => {
    const name = event.target.name
    console.log('clicked!')
    this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}))
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad
    return total
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback()
    const { good } = this.state

    const percentage = good / total * 100
    return Math.round(percentage)
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()


    const objKey = Object.keys(this.state)
    return (
      <>
      <StyledWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
        </Section >

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
              <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          </Section>
          )}
        </StyledWrapper>
      </>
    )
  }
}

const StyledWrapper = styled.div`
  width: 25vw;
  max-width: 25vw;
  margin: 10vh 25vw;
  padding: 1rem;
  background-color: rgba(255, 243, 243, 0.7);
  border-radius: 15px;
`
export default App;