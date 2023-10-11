import './footer.css'
export default function FooterLinks() {
    return (
        <div className="wrapper__footer_links">
        <div className="container__footer_links">
           <a href="https://www.stitchfix.com/terms" className="footer_link">Terms of Use</a> - 
            <a href="https://www.stitchfix.com/privacy" className="footer_link"> Privacy Policy</a> - 
            <a href="https://www.stitchfix.com/supply-chain-information" className="footer_link"> Supply Chain Information</a> -
            <a href="https://www.stitchfix.com/privacy#marketing-companies" className="footer_link"> Ad Choices</a> -
            <a href="https://www.stitchfix.com/privacy#ca-notice" className="footer_link"> CA Notice at Collection</a> -
            <a href="" className="footer_link"> Your Privacy Choices</a> -
            <a href="https://www.stitchfix.com/sitemap" className="footer_link"> Sitemap</a>
        </div>
        <p className="trademark">Stitch Fix and Fix are trademarks of Stitch Fix, Inc.</p>
    </div>
    )
}