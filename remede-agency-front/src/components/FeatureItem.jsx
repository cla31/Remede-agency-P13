import React from 'react'
import '../style/components/featureItem.css'

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
