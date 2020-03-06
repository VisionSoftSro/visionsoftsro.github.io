import * as React from "react";
import {SectionComponentProps} from "../theme/Sections";
import {AssetCache} from "../../AssetCache";
import Wrapper from "../../../common/component/Wrapper";
import config from '../../../Config';


function Team() {
    return (
        <section id="team" className="has-scroll-top">
            <div className="container">
                <h2 className="text-center">Náš Tým</h2>
                <div className="spacer spacer-line border-primary">&nbsp;</div>
                <div className="spacer-2x">&nbsp;</div>
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <div className="team block image-block text-center">
                            <img src={AssetCache.Image.DAN} alt=""/>
                            <div className="team-content inner-space bg-white">
                                <h5 className="box-title">Daniel Rous</h5>
                                <h6 className="m-2 text-sm text-muted">CEO</h6>
                                <p>(řízení projektů, marketing, finance)</p>
                                <p>Telefon: <a href="tel:+420 774 861 500">+420 774 861 500</a></p>
                                <p>Email: <a href={`mailto:daniel.rous@vision-soft.cz`}>daniel.rous@vision-soft.cz</a></p>
                                {/*<div className="social-icons">*/}
                                {/*<a href="#x" className="btn-social btn-facebook-link p-2"><FontAwesomeIcon icon={faBrand.faFacebook}/></a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team block image-block text-center">
                            <img src={AssetCache.Image.LUKAS} alt=""/>
                            <div className="team-content inner-space bg-white">
                                <h5 className="box-title">Lukáš Treml</h5>
                                <h6 className="m-2 text-sm text-muted">CTO / Programátor</h6>
                                <p>(řízení projektů, informační technologie, vývoj)</p>
                                <p>Telefon: <a href="tel:+420 774 861 500">+420 774 861 500</a></p>
                                <p>Email: <a href={`mailto:lukas.treml@vision-soft.cz`}>lukas.treml@vision-soft.cz</a></p>
                                {/*<div className="social-icons">*/}
                                {/*<a href="#x" className="btn-social btn-facebook-link p-2"><FontAwesomeIcon icon={faBrand.faFacebook}/></a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export class ContactSection extends React.Component<SectionComponentProps> {

    render() {
        return <Wrapper>
            {/*<Team/>*/}
            <section id="contact" className="parallax-section small parallax dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="promo-box inner-space text-center">
                                <img src={AssetCache.Image.Icons.Map} alt="" className="promo-box-icon mb-3"/>
                                <h5 className="box-title">ADRESA</h5>
                                <p className="box-description">Rybná 716/24, Staré Město, 110 00 Praha 1</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="promo-box inner-space text-center">
                                <img src={AssetCache.Image.Icons.Phone} alt="" className="promo-box-icon mb-3"/>
                                <h5 className="box-title">TELEFON</h5>
                                <p className="box-description"><a href="tel:+420 774 861 500" className={"text-white"}>+420 774 861 500</a></p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="promo-box inner-space text-center">
                                <img src={AssetCache.Image.Icons.Envelop} alt="" className="promo-box-icon mb-3"/>
                                <h5 className="box-title">EMAIL</h5>
                                <p className="box-description"><a
                                    href={`mailto:${config.companyEmail}`} className={"text-white"}>{config.companyEmail}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<div className="cta-big bg-primary dark">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row vcenter">*/}
            {/*            <div className="col-lg-5">*/}
            {/*                <h4>Zanechce kontakt</h4>*/}
            {/*                <p className="text-sm mb-0">Zanechte nám Váš kontakt a mz se vám ozveme (dan upravit)</p>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-7">*/}
            {/*                <div className="input-group mt-3 mb-3">*/}
            {/*                    <input type="text" className="form-control border-faded mr-3"*/}
            {/*                           placeholder="Emailová adresa"/>*/}
            {/*                    <span className="input-group-btn">*/}
            {/*                        <a href="#x" className="btn btn-w-icon btn-info"><span><FontAwesomeIcon icon={faIcon.faPaperPlane}/></span></a>*/}
            {/*                    </span>*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Wrapper>
    }

    }
