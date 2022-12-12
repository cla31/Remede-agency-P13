import React from 'react'
import '../style/components/featureItem.css'
import PropTypes from 'prop-types'

const FeatureItem = ({ source, alt, title, paragraph }) => {
  return (
    <div className="feature-item">
      <img src={source} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{paragraph}</p>
    </div>
  )
}
export default FeatureItem

//Proptypes
FeatureItem.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}
