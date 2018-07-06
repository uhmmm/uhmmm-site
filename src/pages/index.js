import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import './reset.css'
import './colors.css'
import './typography.css'

import Header from '../components/header/'
import styles from './index.module.css'
import background from './background.png'
import stick from './stick.png'
import left from './left.png'
import right from './right.png'

const IndexPage = ({ data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      {/* Style import image because of Gatsby v2 bug */}
      <div
        className={classnames(styles.block, styles.blockLanding)}
        style={{
          background: `url(${background})`,
          'background-size': 'cover',
        }}
      >
        <Header nav={data.site.siteMetadata.nav} />
        <div className={styles.block_body}>
          <div className={styles.text}>
            <p>
              uhmmm* is een journalistieke incubator. we hebben geen geld, maar
              wel creativiteit, technologie en redelijk goede smaak.
            </p>
          </div>
          <img src={stick} alt="" />
        </div>
      </div>
      <div className={classnames(styles.block, styles.blockBrown)}>
        <div className={styles.block_body}>
          <img src={left} alt="" />
          <div className={styles.text}>
            <p>
              uit de duisternis ontstond het licht. uit het licht ontstond het
              internet, en uit het internet ontstond uhmmm*.
            </p>
            <p>
              uhmmm maakt innovatieve mediatoepassingen voor innovatieve
              uitgeverijen.
            </p>
          </div>
        </div>
      </div>
      <div className={classnames(styles.block, styles.blockBrown)}>
        <div className={styles.block_body}>
          <div className={styles.text}>
            <p>
              wij zijn kinderen van onze tijd. we maakten onze eerste websites
              met Microsoft Frontpage.
            </p>
          </div>
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        nav
      }
    }
  }
`
