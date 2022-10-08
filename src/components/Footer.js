import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; José Antonio Solís Martínez. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
        <a href="https://www.gixen.com/index.php" name="8f1f86341412d93ee2e31b58f2cf6712" target="_blank" > Auction Sniper </a>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
