import React from 'react'
import '../style/components/featureItem.css'
import PropTypes from 'prop-types'

/**
 * Creation of a feature item for the profile page
 * @component
 * @param {string} source
 * @param {string} alt
 * @param {string} title
 * @param {string} paragraph
 * @returns {JSX.Element} FeatureItem component
 */
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
