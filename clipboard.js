// import { useState, useEffect, useRef, Suspense } from 'react'

import '@google/model-viewer';

import { isMobile } from 'react-device-detect';

import logo from './imgs/logo_voxpunks.png';
import twitter from './imgs/logo_twitter.png';
import discord from './imgs/logo_discord.png';
// import worldCube from './imgs/world_cube.png';
// import './fonts/pixel_operator/pixeloperator-webfont.woff2';
// import './fonts/pixel_operator/pixeloperator-bold-webfont.woff2';


// import jbgBrownApe from './models/brown-ape-jbg-104.gltf';
import pigCop from './models/pig-cop-111.gltf';
// import bggMale from './models/male-bgg-119.gltf';
import brownApe from './models/brown-ape-122.gltf';
// import jbgFemale from './models/female-jbg-1010.gltf';
// import female from './models/female-1013.gltf';
// import blackApe from './models/black-ape-1023.gltf';
// import robot from './models/robot-1050.gltf';
import zombie from './models/zombie-1046.gltf';


// background: linear-gradient(90deg,rgba(152,69,254,.6),rgba(0,209,139,.6));

const App = () =>{

	const grid = {
		display: "grid",
		width: '100%',
		height: '100vh',
		gridTemplateColumns: "repeat(7, 1fr)",
		gridTemplateRows: "repeat(7, 1fr)",
		gridGap: "1%",
		margin: "1%",
		// fontFamily: 'PixelOperator',
		// color: 'white'
	}
	// useEffect(() => {
	// 	window.addEventListener('mousemove', handleMouseMove, , { passive: true })
	// 	return () => window.removeEventListener('mousemove', handleMouseMove)
	// },[])

  return (
    <div style = { grid } >

		{/* <Model imgName = { jbgBrownApe } altName = { "Brown Ape Juice Box Gang Vox Punk" } /> */}
		{/* <Model imgName = { pigCop } altName = { "Pig Cop Vox Punk" } /> */}
		{/* <Model imgName = { bggMale } altName = { "Bubble Gum Gang Male Vox Punk" } /> */}
		{/* <Model imgName = { brownApe } altName = { "Brown Ape Vox Punk" } /> */}
		{/* <Model imgName = { jbgFemale } altName = { "Female Juice Box Gang Vox Punk" } /> */}
		{/* <Model imgName = { female } altName = { "Female Vox Punk" } /> */}
		{/* <Model imgName = { blackApe } altName = { "Black Ape Vox Punk" } /> */}
		{/* <Model imgName = { robot } altName = { "Robot Vox Punk" } /> */}
		{/* <Model imgName = { zombie } altName = { "Zombie Vox Punk" } /> */}

		{/* <div style = {{ 
			display : "flex",
			backgroundColor: 'red',
			gridColumnStart: '2',
			gridColumnEnd: '4',
			gridRowStart: '1',
			gridRowEnd: '2',
			fontFamily: 'PixelOperator',
			color: 'white'
		}}>
			<img 
				src = { logo } 
				alt = "vox punks club logo"
				onClick = {() => { window.open("https://voxpunks.club") }}
				style = {{
					objectFit: 'contain',
					width: '40%',
					maxWidth: '400px'
				}}
			/>
		</div> */}

		<Area rowStart = "1" rowEnd = "1" columnStart = "1" columnEnd = "1" color = "purple" />


		<div style = {{ 
			display : "flex",
			backgroundColor: 'purple',
			gridColumnStart: '6',
			gridColumnEnd: '7',
			gridRowStart: '3',
			gridRowEnd: '4'
		}}>
			<model-viewer 
				style={{ width: '100%', height: '100%' }}
				src = { pigCop }
				alt = "Pig Cop Vox Punk"
				auto-rotate
				shadow-intensity="1"
				orientation = "0deg 0deg 60deg"
				// poster="assets/NeilArmstrong.webp" 
				camera-controls
			/>
		</div>
    </div>
  );
}

const Area = ({ rowStart, rowEnd, columnStart, columnEnd, color }) => {
	
	const style = { 
		display : "flex", backgroundColor: color,
		gridRowStart: rowStart, gridRowEnd: rowEnd,
		gridColumnStart: columnStart, gridColumnEnd: columnEnd,
	}

	return (
		<div style = { style } />
	)
}

const Logo = ( ) => {
	const style = {
		display: "grid",
		gridColumnStart: '1',
		gridColumnEnd: '1',
		gridRowStart: '1',
		gridRowEnd: '1',
	}

	return (
		<div style = { style } >
			<img 
				src = { logo } 
				alt = "vox punks club logo"
				onClick = {() => { window.open("https://voxpunks.club") }}
			/>
			<h3 style = {{ fontFamily: 'PixelOperator' }}>Vox Punks Club</h3>
		</div>
	)
}

const Twitter = ( ) => {
	const style = {
		display: "grid",
		gridColumnStart: '1',
		gridColumnEnd: '1',
		gridRowStart: '1',
		gridRowEnd: '1',
	}

	return (
		<div style = { style } >
			<img 
				src = { twitter } 
				alt = "twitter logo"
				onClick = {() => { window.open("https://twitter.com/voxpunksclub") }}
			/>
		</div>
	)
}

const Discord = ( ) => {
	const style = {
		display: "grid",
		gridColumnStart: '1',
		gridColumnEnd: '1',
		gridRowStart: '1',
		gridRowEnd: '1',
	}

	return (
		<div style = { style } >
			<img 
				src = { discord } 
				alt = "discord logo"
				onClick = {() => { window.open("https://discord.gg/uzJ5hvBQnp") }}
			/>
		</div>
	)
}

// const MagicEden = ({ }) => {
// 	return (
// 		<></>
// 		// <img 
// 		// 	src = {  } 
// 		// 	style = {  } 
// 		// 	alt = " logo"
// 		// 	onClick = {() => { window.open(") }}
// 		// />
// 	)
// }

// const DigitalEyes = ({ }) => {
// 	return (
// 		<></>
// 		// <img 
// 		// 	src = {  } 
// 		// 	style = { l } 
// 		// 	alt = " logo"
// 		// 	onClick = {() => { window.open(") }}
// 		// />
// 	)
// }

// const SolSea = ({ }) => {
// 	return (
// 		<></>
// 		// <img 
// 		// 	src = {  } 
// 		// 	style = { l } 
// 		// 	alt = " logo"
// 		// 	onClick = {() => { window.open(") }}
// 		// />
// 	)
// }

// const AlphaArt = ({ }) => {
// 	return (
// 		<></>
// 		// <img 
// 		// 	src = {  } 
// 		// 	style = { l } 
// 		// 	alt = " logo"
// 		// 	onClick = {() => { window.open(") }}
// 		// />
// 	)
// }

// const Model = ({ imgName, altName }) => {

// 	const style = {
// 		// border: '1px solid black', 
// 		// height: '400px', 
// 		// width: '400px'
// 		// backgroundColor: 'red',
// 		// gridColumnStart: '1',
// 		// gridColumnEnd: '3',
// 		// gridRowStart:
// 		// gridRowEnd:
// 	}

// 	return (
// 		<model-viewer 
// 			style={ style }
// 			src = { imgName }
// 			alt = { altName }
// 			auto-rotate
// 			// shadow-intensity="1"
// 			// poster="assets/NeilArmstrong.webp" 
// 			camera-controls
// 		/>
// 	)
// }

// const Header = () => {
// 	const containerStyle = { display: "flex" }
// 	const logoStyle = { maxWidth: '100px', cursor: 'pointer' }
// 	return (
// 		<div style = { containerStyle } >
// 			<Logo logoStyle = { logoStyle } />
// 			<Twitter logoStyle = { logoStyle } />
// 			<Discord logoStyle = { logoStyle } />
// 		</div>
// 	)
// }

// const Splash = () => {
// 	const containerStyle = { display: "flex", alignItems: "center", justifyContent: "center", margin: "1% 10%" }
// 	const subStyle = { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "50%" }
// 	return (
// 		<div style = { containerStyle } >
// 			<div style = { subStyle } >
// 				<h2>Splash</h2>
// 				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
// 			</div>
// 			<div style = { subStyle } >
// 				<Model imgName = { zombie } altName = { "Zombie Vox Punk" } />
// 			</div>
// 		</div>
// 	)
// }


// const Roadmap = () => {
// 	const containerStyle = { display: "flex", alignItems: "center", justifyContent: "center", margin: "1% 10%" }
// 	const subStyle = { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "50%" }
// 	return (
// 		<div style = { containerStyle } >
// 			<div style = { subStyle } >
// 				<Model imgName = { brownApe } altName = { "Brown Ape Vox Punk" } />
// 			</div>
// 			<div style = { subStyle } >
// 				<h2>Splash</h2>
// 				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
// 			</div>
// 		</div>
// 	)
// }

// const Footer = () => {
// 	return (
// 		<></>
// 	)
// }

export default App;

// Discord Color: #7289da
// Twitter Color: #1da1f2