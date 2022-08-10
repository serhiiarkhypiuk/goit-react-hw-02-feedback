import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledWrapper>
      {options.map((option) => (
        <StyledButton type="button" key={option.index} name={option} onClick={() => onLeaveFeedback(option)}>{option}</StyledButton>
      ))}
    </StyledWrapper>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledButton = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 3px white solid;
  background-color: rgb(255, 243, 243);
  cursor: pointer;
`

export default FeedbackOptions
