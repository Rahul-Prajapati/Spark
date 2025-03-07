import React, { useState } from 'react'

import "./Appearance.css"
import Stack from '../assets/ApperancePics/Stack.png'
import Grid from '../assets/ApperancePics/Grid.png'
import Carousel from '../assets/ApperancePics/Carousel.png'

import AirBlack from '../assets/ApperancePics/AirBlack.png';
import AirGrey from '../assets/ApperancePics/AirGrey.png';
import AirSmoke from '../assets/ApperancePics/AirSmoke.png';
import Airsnow from '../assets/ApperancePics/Airsnow.png';

import MineralBlue from '../assets/ApperancePics/MineralBlue.png';
import MineralGreen from '../assets/ApperancePics/MineralGreen.png';
import MineralOrange from '../assets/ApperancePics/MineralOrange.png';
import MineralYellow from '../assets/ApperancePics/MineralYellow.png';

import FillCurvedButton from '../assets/ApperancePics/FillCurvedButton.png';
import FillRoundCorners from '../assets/ApperancePics/FillRoundCorners.png';
import FillSquareButton from '../assets/ApperancePics/FillSquareButton.png';

import OutlineCurvedBtn from '../assets/ApperancePics/OutlineCurvedBtn.png';
import OutlineRoundCorners from '../assets/ApperancePics/OutlineRoundCorners.png';
import OutlineSquareBtn from '../assets/ApperancePics/OutlineSquareBtn.png';

import SoftShadowCurvedBtn from '../assets/ApperancePics/SoftShadowCurvedBtn.png';
import SoftShadowRoundCorners from '../assets/ApperancePics/SoftShadowRoundCorners.png';
import SoftShadowSquareBtn from '../assets/ApperancePics/SoftShadowSquareBtn.png';

import HardShadowCurvedBtn from '../assets/ApperancePics/HardShadowCurvedBtn.png';
import HardShadowRoundCorners from '../assets/ApperancePics/HardShadowRoundCorners.png';
import HardShadowSquareBtn from '../assets/ApperancePics/HardShadowSquareBtn.png';

import Special1DessertBtn from '../assets/ApperancePics/Special1DessertBtn.png';
import Special2Wave from '../assets/ApperancePics/Special2Wave.png';
import Special3Rectangle from '../assets/ApperancePics/Special3Rectangle.png';
import Special4CurvedBtn from '../assets/ApperancePics/Special4CurvedBtn.png';
import Special5SquareRecCorners from '../assets/ApperancePics/Special5SquareRecCorners.png';
import Special6LeftRound from '../assets/ApperancePics/Special6LeftRound.png';


// Layout Options
const layouts = [
  { id: "stack", src: Stack, alt: "Stack" },
  { id: "grid", src: Grid, alt: "Grid" },
  { id: "carousel", src: Carousel, alt: "Carousel" },
];

// Button Categories with Styles
const buttonCategories = [
  {
    title: "Fill",
    buttons: [
      { id: "fill-curved", src: FillCurvedButton, alt: "Fill Curved" },
      { id: "fill-round", src: FillRoundCorners, alt: "Fill Round" },
      { id: "fill-square", src: FillSquareButton, alt: "Fill Square" },
    ],
  },
  {
    title: "Outline",
    buttons: [
      { id: "outline-curved", src: OutlineCurvedBtn, alt: "Outline Curved" },
      { id: "outline-round", src: OutlineRoundCorners, alt: "Outline Round" },
      { id: "outline-square", src: OutlineSquareBtn, alt: "Outline Square" },
    ],
  },
  {
    title: "Soft Shadow",
    buttons: [
      { id: "soft-curved", src: SoftShadowCurvedBtn, alt: "Soft Curved" },
      { id: "soft-round", src: SoftShadowRoundCorners, alt: "Soft Round" },
      { id: "soft-square", src: SoftShadowSquareBtn, alt: "Soft Square" },
    ],
  },
  {
    title: "Hard Shadow",
    buttons: [
      { id: "hard-curved", src: HardShadowCurvedBtn, alt: "Hard Curved" },
      { id: "hard-round", src: HardShadowRoundCorners, alt: "Hard Round" },
      { id: "hard-square", src: HardShadowSquareBtn, alt: "Hard Square" },
    ],
  },
  {
    title: "Special",
    buttons: [
      { id: "special-dessert", src: Special1DessertBtn, alt: "Dessert" },
      { id: "special-wave", src: Special2Wave, alt: "Wave" },
      { id: "special-rectangle", src: Special3Rectangle, alt: "Rectangle" },
      { id: "special-curved", src: Special4CurvedBtn, alt: "Curved" },
      { id: "special-square-corners", src: Special5SquareRecCorners, alt: "Square Corners" },
      { id: "special-left-round", src: Special6LeftRound, alt: "Left Round" },
    ],
  },
];

const themes = [
  { id: "air-black", src: AirBlack, alt: "Air Black" },
  { id: "air-grey", src: AirGrey, alt: "Air Grey" },
  { id: "air-smoke", src: AirSmoke, alt: "Air Smoke" },
  { id: "air-snow", src: Airsnow, alt: "Air Snow" },
  { id: "mineral-blue", src: MineralBlue, alt: "Mineral Blue" },
  { id: "mineral-green", src: MineralGreen, alt: "Mineral Green" },
  { id: "mineral-orange", src: MineralOrange, alt: "Mineral Orange" },
  { id: "mineral-yellow", src: MineralYellow, alt: "Mineral Yellow" }
];

const fonts = [
  "DM Sans",
  "Roboto",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Poppins",
  "Raleway",
  "Nunito",
  "Merriweather",
  "Playfair Display",
];

const Appearance = () => {
  const [layout, setLayout] = useState("stack"); // Default layout
  const [buttonStyle, setButtonStyle] = useState("fill-square"); // Default button style

  const [btncolor, setbtnColor] = useState('#FFFFFF');
  const [btnfontcolor, setbtnfontColor] = useState('#888888');

  const [savedfontFamily, setSavedfontfamily] = useState("");
  const [savedfontcolor, setSavedfontcolor] = useState("#888888");

  const [theme, setTheme] = useState("air-black");

  return (
    <div className="Appearance_container">
      {/* Layout Section */}
      <h2>Layout</h2>

      <section className="layout-section">

        <div className="layout-options">
          {layouts.map(({ id, src, alt }) => (
            <img key={id} src={src} alt={alt} onClick={() => setLayout(id)} className={layout === id ? "active" : ""} />
          ))}
        </div>
      </section>

      {/* Buttons Section */}
      <h2>Buttons</h2>

      <section className="buttons-section">

        {buttonCategories.map((category) => (
          <div key={category.title} className="button-category">
            <h3 className='title-regular'>{category.title}</h3>
            <div className="button-options">
              {category.buttons.map(({ id, src, alt }) => (
                <img key={id} src={src} alt={alt} onClick={() => setButtonStyle(id)} className={buttonStyle === id ? "active" : ""} />
              ))}
            </div>
          </div>
        ))}

        <h3 className='category-title'>Button color</h3>
        <div className='Font-container'>

          <div className="color-previewBox"
            style={{ backgroundColor: (btncolor) ? btncolor : "#ffffff" }}>

          </div>

          <div className='labelCode'>
            <label className="label">Button color</label>
            <input
              type="text"
              value={btncolor}
              onChange={(e) => setbtnColor(e.target.value)}
              className="color-code"
            />
          </div>

        </div>

        <h3 className='category-title'>Button font color</h3>
        <div className='Font-container'>

          <div className="color-previewBox"
            style={{ backgroundColor: (btnfontcolor) ? btnfontcolor : "#ffffff" }}>

          </div>

          <div className='labelCode'>
            <label className="label">Button font color</label>
            <input
              type="text"
              value={btnfontcolor}
              onChange={(e) => setbtnfontColor(e.target.value)}
              className="color-code"
            />
          </div>

        </div>



      </section>

      <h2>Fonts</h2>
      <section className='fonts-section'>

        <h3 className='category-title'>Fonts</h3>
        <div className="font-selector" style={{ fontFamily: savedfontFamily }}>

          <div className="font-preview">
            <span className="font-icon">Aa</span>
          </div>
          <select
            className="font-dropdown"
            value={savedfontFamily}
            onChange={(e) => setSavedfontfamily(e.target.value)}
          >
            {fonts.map((font, index) => (
              <option key={index} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>




        {/*  */}

        <div className='button-category'>
          <h3 className='category-title'>color</h3>
          <div className='Font-container'>

            <div className="color-previewBox"
              style={{ backgroundColor: (savedfontcolor) ? savedfontcolor : "#ffffff" }}>

            </div>

            <div className='labelCode'>
              <label className="label">color</label>
              <input
                type="text"
                value={savedfontcolor}
                onChange={(e) => setSavedfontcolor(e.target.value)}
                className="color-code"
              />
            </div>

          </div>

        </div>



      </section>

      {/* Themes */}
      <h2>Themes</h2>
      <section className="theme-section">

        <div className="theme-options">
          {themes.map(({ id, src, alt }) => (
            <div key={id} className="theme-item" onClick={() => setTheme(id)}>
              <img src={src} alt={alt} className={theme === id ? "active" : ""} />
              <p>{alt}</p>
            </div>
          ))}
        </div>
      </section>

      <div className='save-Div'>
      <button className='btn-save' onClick={""}>Save</button>
      </div>      
     


      {/* Preview Section */}
      <section className={`preview-section ${layout} ${theme}`}
        style={{
          color: `${savedfontcolor}`,
          fontFamily: `${savedfontFamily}`
        }}>
        <h2>Preview</h2>
        <button className={`preview-button ${buttonStyle}`}
          style={{
            color: `${btnfontcolor}`,
            backgroundColor: `${btncolor}`
          }}

        >Preview Button</button>
      </section>
    </div>
  );
};

export default Appearance;




