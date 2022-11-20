import React from 'react'
import '../style/pages/home.css'
import chatIcon from '../assets/icon-chat.png'
import iconMoney from '../assets/icon-money.png'
import iconSecurity from '../assets/icon-security.png'
import Banner from '../components/Banner'
import FeatureItem from '../components/FeatureItem'

const datasFeature = [
  {
    source: chatIcon,
    alt: 'Chat Icon',
    title: 'You are our #1 priority',
    paragraph:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    source: iconMoney,
    alt: 'Money Icon',
    title: 'More savings means higher rates',
    paragraph:
      'The more you save with us, the higher your interest rate will be!',
  },
  {
    source: iconSecurity,
    alt: 'Security Icon',
    title:
      ' We use top of the line encryption to make sure your data and money is always safe.',
    paragraph:
      ' We use top of the line encryption to make sure your data and money is always safe.',
  },
]

const Home = () => {
  return (
    <div>
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {datasFeature.map((item, index) => (
            <FeatureItem
              key={'features' + index}
              source={item.source}
              alt={item.alt}
              title={item.title}
              paragraph={item.paragraph}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default Home
