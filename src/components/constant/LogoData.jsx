import Bjerke from "../../images/about/logos/bjerke.svg";
import Brakar from "../../images/about/logos/brakar.svg";
import Cinderella from "../../images/about/logos/cinderella.svg";
import FormatEiendom from "../../images/about/logos/f-e.svg";
import Fjordline from "../../images/about/logos/fjordline.svg";
import HoytLavt from "../../images/about/logos/h&l.svg";
import Jotun from "../../images/about/logos/jotun.svg";
import Subway from "../../images/about/logos/subway.svg";
import Vkt from "../../images/about/logos/vkt.svg";

const companieLogos = [
  {
    id: 1,
    name: "Bjerke logo",
    src: Bjerke,
  },
  {
    id: 2,
    name: "Brakar logo",
    src: Brakar,
  },
  {
    id: 3,
    name: "Cinderella logo",
    src: Cinderella,
  },
  {
    id: 4,
    name: "Format Eiendom logo",
    src: FormatEiendom,
  },
  {
    id: 5,
    name: "Fjordline logo",
    src: Fjordline,
  },
  {
    id: 6,
    name: "Høyt & Lavt logo",
    src: HoytLavt,
  },
  {
    id: 7,
    name: "Jotun logo",
    src: Jotun,
  },
  {
    id: 8,
    name: "Subway logo",
    src: Subway,
  },
  {
    id: 9,
    name: "Vestfold kollektivtrafikk logo",
    src: Vkt,
  },
];

export default function LogoData() {
  return (
    <>
      {companieLogos.map((logo) => {
        return (
          <div className="logo-container" key={logo.id}>
            <img src={logo.src} alt={logo.name} />
          </div>
        );
      })}
    </>
  );
}
