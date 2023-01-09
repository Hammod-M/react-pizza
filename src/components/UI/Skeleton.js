import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
        speed={2}
        width={300}
        height={500}
        viewBox="0 0 300 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="160" cy="115" r="116" /> 
        <rect x="0" y="252" rx="0" ry="10" width="300" height="27" /> 
        <rect x="35" y="296" rx="10" ry="10" width="230" height="88" /> 
        <rect x="14" y="423" rx="10" ry="10" width="75" height="27" /> 
        <rect x="155" y="412" rx="0" ry="0" width="155" height="44" />
  </ContentLoader>
)

export default Skeleton