import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className="main-footer">
           <div className="footer-middle">
            <div className="container">
               <div className="row">

                <div className="col-md-4 col-sm-6">
                    <h4>Product</h4>
                    <ul className="list-unstyled">
                        <li><a href="https://www.orowealth.com/why-oro/">FAQ</a></li>
                        <li><a href="https://www.orowealth.com/plans/">Pricing</a></li>
                        <li><a href="https://www.orowealth.com/mutual-funds/">Mutual Funds</a></li>
                        <li><a href="https://www.orowealth.com/calculators/">Calculators</a></li>
                    </ul>
                </div>

                <div className="col-md-4 col-sm-6">
                    <h4>Legal</h4>
                    <ul className="list-unstyled">
                        <li><a href="https://www.orowealth.com/disclaimer/">Disclaimer</a></li>
                        <li><a href="https://www.orowealth.com/privacy-policy/">Privacy Policy</a></li>
                        <li><a href="https://www.orowealth.com/terms-of-use/">Terms of Use</a></li>
                    </ul>
                </div>

                <div className="col-md-4 col-sm-6">
                    <h4>Company</h4>
                    <ul className="list-unstyled">
                        <li><a href="https://www.orowealth.com/about/">Team</a></li>
                        <li><a href="https://www.orowealth.com/why-oro/">Mission</a></li>
                        <li><a href="https://www.orowealth.com/contact/">Contact</a></li>
                        <li><a href="https://www.orowealth.com/insights/">Blog</a></li>
                    </ul>
                </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">Copyright &copy; Orowealth 2015-2019</p>
                    <h5>Disclaimer</h5>
                    <p>Mutual Funds are subjected to market risks please read the scheme information and other related documents carefully before investing.<br/> Past performance in not indicative of future returns. Please consider your specific requirements before choosing your funds,<br/> or designing a portfolio that suits your needs.</p>
                </div>
            </div>
          </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 10rem;
    padding-left: 10rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a{
    color: var(--mainGrey);
}

ul li a:hover{
    color: var(--mainLifgtGrey);
}
`;

