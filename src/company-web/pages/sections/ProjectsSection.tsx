import * as React from "react";
import {SectionComponentProps} from "../theme/Sections";
import {AssetCache} from "../../AssetCache";

export class ProjectsSection extends React.Component<SectionComponentProps> {

    render() {
        return <section id={this.props.id} className="bg-white">
            <div className="container">
                <h2 className="text-center">Naše projekty</h2>
                <div className="spacer spacer-line border-primary">&nbsp;</div>
                <div className="spacer">&nbsp;</div>
                <div className="row vcenter">
                    <div className="col-lg-6">
                        <h3><a href="https://seznamseonline.cz">Seznam se Online</a></h3>
                        Seznamování přes internet je velký fenomén dnešní doby. Seznam se Online je bezkonkurenční česká online seznamka cílená na snadné seznámení.
                        Mezi hlavní přednosti a výhody seznamky proti konkurenci patří nulové poplatky, transparentnost všech funkcí
                        a rychlé založení profilu bez zdlouhavého vyplňování.
                    </div>
                    <div className="col-lg-6 lightbox">
                        <div className="video-testimonial">
                            <img src={AssetCache.Image.SSO} alt="" className="video-testimonial-image"/>
                        </div>
                    </div>
                </div>
                <div className="row vcenter">
                    <div className="col-lg-6 lightbox">
                        <div className="video-testimonial">
                            <img src={AssetCache.Image.SMERSEVER} alt="" className="video-testimonial-image"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3><a href="https://smersever.cz">Směr sever</a></h3>
                        <h4>Informační databáze výletních destinací a kulturních tipů severních čech.</h4>

                        Chystáte se na sever čech a chcete podniknout výlet nebo se zůčastnit nějaké kulturní akce? Či na severu čech bydlíte a chcete mít přehled o vašem kraji?
                        Webový portál SMĚR SEVER vás informuje o nejbližších kulturních akcích nejrůznějšího typu a nabízí desítky tipů na nejkrásnější místa severu čech.
                    </div>
                </div>
                <div className="row vcenter">
                    <div className="col-lg-6">
                        <h3><a href="https://oslavyadarky.cz">OSLAVY A DÁRKY.CZ</a></h3>
                        Pořádáte dětskou oslavu a sháníte dětské dárky?
                        Dekorace pro dětské oslavy a dárky pro děti. Vše na jednom místě!
                    </div>
                    <div className="col-lg-6 lightbox">
                        <div className="video-testimonial">
                            <img src={AssetCache.Image.OSLAVYADARKY} alt="" className="video-testimonial-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }

}
