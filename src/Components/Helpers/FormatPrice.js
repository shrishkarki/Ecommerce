import React from 'react'

const FormatPrice = ({price}) => {
  return (
    Intl.NumberFormat('en-IN', { style: 'currency', currency: 'NPR' }).format(price/100)
  )
}

export default FormatPrice;