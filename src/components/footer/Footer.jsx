import React from 'react'

import './footer.css'
import logo from './logo-Icon.png'

function Footer() {
    return (
        <div className="footer">
            <div className="details">
                <div className="logo">
                    <div className="logo-footer">
                        <img src={logo} alt="" srcset=""/>
                    </div>
                </div>
                <div className="link">
                    <h5 class="little-title">Links</h5>
                    <ul class="list-unstyled">
                    <li>
                        <p>
                        <a target="_blank" href="../../assets/docs/TERMS_AND_CONDITIONS_2021.pdf">Terms & Conditions</a>
                        </p>
                    </li>
                    <li>
                        <p>
                        <a target="_blank" href="../../assets/docs/TERMS_OF_USE.pdf">Terms of Use</a>
                        </p>
                    </li>
                    <li>
                        <p>
                        <a target="_blank" href="../../assets/docs/PRIVACY_POLICY.pdf">Confidentiality</a>
                        </p>
                    </li>
                    <li>
                        <p>
                        <a target="_blank" href="../../assets/docs/AML_POLICY.pdf">AML Policy</a>
                        </p>
                    </li>
                    </ul>
                    <hr/>
                </div>
                <div className="address">
                    <h5 class="little-title">Address</h5>

                    <ul class="list-unstyled">
                    <li>
                        <p>
                        <i class="fas fa-home mr-3"></i> 17, rue Pache 75011 Paris</p>
                    </li>
                    <li>
                        <p>
                        <i class="fas fa-envelope mr-3"></i> info@ipercash.fr</p>
                    </li>
                    <li>
                        <p>
                        <i class="fas fa-phone mr-3"></i> +33 9 70 46 04 46</p>
                    </li>
                    <li>
                        <p>
                        <i class="fa fa-whatsapp mr-3" aria-hidden="true"></i> +33 7 56 92 26 96</p>
                    </li>
                    </ul>
                    <hr/>
                </div>
                <div className="follow">
                    <h5 class="little-title">Follow Us</h5>

                    <a type="button" class="btn-floating btn-fb">
                    <i class="fab fa-facebook-f"></i>
                    </a>
                    <a type="button" class="btn-floating btn-tw">
                    <i class="fab fa-twitter"></i>
                    </a> <br/>
                    <a type="button" class="btn-floating btn-gplus">
                    <i class="fab fa-google-plus-g"></i>
                    </a>
                    <a type="button" class="btn-floating btn-dribbble">
                    <i class="fab fa-dribbble"></i>
                    </a>
                </div>
            </div>
            <div class="footer-copyright">
                The website <a href="https://ipercash.fr/">www.ipercash.fr</a> is owned and operated by IPERCASH SAS
            </div>
        </div>
    )
}

export default Footer
