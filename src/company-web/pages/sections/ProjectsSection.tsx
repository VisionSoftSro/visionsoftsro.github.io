import * as React from "react";
import {SectionComponentProps} from "../theme/Sections";
import {AssetCache} from "../../AssetCache";

export class ProjectsSection extends React.Component<SectionComponentProps> {

    render() {
        return <section id={this.props.id} className="bg-white">
            <div className="container">
                <h2 className="text-center">O nás</h2>
                <div className="spacer spacer-line border-primary">&nbsp;</div>
                <div className="spacer">&nbsp;</div>
                <div className="row vcenter" style={{marginBottom:"20px"}}>
                    <div className="col-lg-12">
                        Jsme Vision Soft - společnost působící na trhu od roku 2016.<br/>
                        Zaměřujeme se na import/export, prodej a marketing.<br/>
                        Naším cílem je pomáhat lidem snižovat spotřebu energií bez ztráty komfortu pomocí technologických produktů.
                    </div>
                </div>
                <div className="row vcenter">
                    <div className="col-lg-6">
                        <h3><a href="https://www.alexalab.cz/">Alexa LAB</a></h3>
                    </div>
                </div>
                <div className="row vcenter">
                    <div className="col-lg-6">
                        <h3><a href="https://smersever.cz">Směr sever</a></h3>
                        <h4>Informační databáze výletních destinací a kulturních tipů severních čech.</h4>

                        Chystáte se na sever čech a chcete podniknout výlet nebo se zůčastnit nějaké kulturní akce? Či na severu čech bydlíte a chcete mít přehled o vašem kraji?
                        Webový portál SMĚR SEVER vás informuje o nejbližších kulturních akcích nejrůznějšího typu a nabízí desítky tipů na nejkrásnější místa severu čech.
                    </div>
                    <div className="col-lg-6 lightbox">
                        <div className="video-testimonial">
                            <img src={AssetCache.Image.SMERSEVER} alt="" className="video-testimonial-image"/>
                        </div>
                    </div>
                </div>
                <div className="row vcenter">
                    <div className="col-lg-6">
                        <h3><a href="https://www.energyupgrade.cz/">Energy Upgrade</a></h3>
                        Vytvořte si chytrou a energeticky úspornou domácnost i s pomocí solární energie nejen na vaší zahradě.
                    </div>
                    <div className="col-lg-6 lightbox">
                        <div className="video-testimonial">
                            <img src={AssetCache.Image.ENERGY_UPGRADE} alt="" className="video-testimonial-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }

}
