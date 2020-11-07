import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

export const Button = ({ children, onClick, disable = false }) => (
  <StyledButton disabled= {disable} onClick={onClick}>{children}</StyledButton>
)

Button.propTypes = {
  onCLick: PropTypes.func, 
  disable: PropTypes.bool,
  children: PropTypes.node.isRequired
}