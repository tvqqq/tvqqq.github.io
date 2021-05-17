import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import config from '../../../utils/siteConfig'

const ImageMeta = ({ image }) => {
    if (!image) {
        return null
    }

    return (
        <Helmet>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content={config.shareImageWidth} />
            <meta property="og:image:height" content={config.shareImageHeight} />
            {/* Google Analytics
            GA4: 14/02/2021
            GA Universal (UA): 17/05/2021
            */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-D8J42ZP344"></script>
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-D8J42ZP344');
                    gtag('config', 'UA-189687920-1');
                `}
            </script>
        </Helmet >
    )
}

ImageMeta.propTypes = {
    image: PropTypes.string,
}

export default ImageMeta
