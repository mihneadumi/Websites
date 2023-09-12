/* eslint-disable react/prop-types */
import { StyledTitle } from "./styles/Title.styled"

export const Title = ({ title }) => {
  return (
    <StyledTitle>
        <h1>{title}</h1>
    </StyledTitle>
  )
}
