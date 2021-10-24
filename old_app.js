// import { useState, useEffect, useRef, Suspense } from 'react'
import '@google/model-viewer';
import { isMobile } from 'react-device-detect'; // https://www.npmjs.com/package/react-device-detect
import logo from './imgs/logo_voxpunks.png';
import twitter from './imgs/logo_twitter.png';
import discord from './imgs/logo_discord.png';
// import worldCube from './imgs/world_cube.png';

// import jbgBrownApe from './models/brown-ape-jbg-104.gltf';
import pigCop from './models/pig-cop-111.gltf';
// import bggMale from './models/male-bgg-119.gltf';
import brownApe from './models/brown-ape-122.gltf';
// import jbgFemale from './models/female-jbg-1010.gltf';
// import female from './models/female-1013.gltf';
import blackApe from './models/black-ape-1023.gltf';
import zombie from './models/zombie-1046.gltf';

const App = () =>{

	const grid = {
		display: "grid",
		width: '99%',
		height: '100vh',
		gridTemplateColumns: "repeat(8, 1fr)",
		gridTemplateRows: "repeat(8, 1fr)",
		gridGap: "1%",
		margin: "1%",
		fontFamily: 'PixelOperator',
		color: "white",
	}

	const clickable = { 
		fontSize: "1.8em", 
		cursor: "pointer",
		filter: "drop-shadow(2px 2px 0px #AAB8C2)"
	}

  return (
    <div>
	<div style = { grid } >
		<Area  color = "" rowStart = "1" rowEnd = "1" columnStart = "1" columnEnd = "1" />
		<Area 
			color = "" rowStart = "1" rowEnd = "1" columnStart = "2" columnEnd = "2"
			content = { <Model imgName = { zombie } altName = "Zombie Vox Punk" orientation = "60"/> }	
		/>
		<Area
			color = "" rowStart = "1" rowEnd = "1" columnStart = "3" columnEnd = "3" 
			content = { <Model imgName = { pigCop } altName = "Pig Cop Vox Punk" orientation = "60"/> }	
		/>
		<Area 
			color = "" rowStart = "1" rowEnd = "1" columnStart = "4" columnEnd = "4"
			content = { <Model imgName = { blackApe } altName = "Black Ape Vox Punk" orientation = "60"/> }	
		/>
		<Area 
			color = "" rowStart = "1" rowEnd = "1" columnStart = "5" columnEnd = "5"
			content = { <Model imgName = { brownApe } altName = "Brown Ape Vox Punk" orientation = "60" interactionPrompt = "none" /> }	
		/>
		<Area color = "" rowStart = "1" rowEnd = "1" columnStart = "6" columnEnd = "6" />
		<Area color = "" rowStart = "1" rowEnd = "1" columnStart = "7" columnEnd = "7" />
		<Area color = "" rowStart = "1" rowEnd = "1" columnStart = "8" columnEnd = "8" />

		{/* ROW TWO */}
		<Area  color = "" rowStart = "2" rowEnd = "2" columnStart = "1" columnEnd = "1" />

		{/* LOGO */}
		<Area  
			color = "black" rowStart = "2" rowEnd = "2" columnStart = "2" columnEnd = "5" 
			content = { <h1 style = {{ ...clickable, fontSize: "2.8em" }} >Vox Punks Club</h1> }
		/>
		<Area  color = "" rowStart = "2" rowEnd = "2" columnStart = "5" columnEnd = "5" />
		<Area
			color = "" rowStart = "2" rowEnd = "2" columnStart = "6" columnEnd = "6"
			content = { 
				<h2 style = {{ ...clickable, color: "#1DA1F2" }}
					onClick = {() => window.open( "http://twitter.com/voxpunksclub")} >
					Twitter
				</h2> 
			}
		/>
		<Area
			color = "" rowStart = "2" rowEnd = "2" columnStart = "7" columnEnd = "7"
			content = {
				<h2 style = {{ ...clickable, color: "#7289DA" }}
				onClick = {() => window.open( "https://discord.gg/uzJ5hvBQnp")} >
					Discord
				</h2>
			}
		/>
		<Area  color = "" rowStart = "2" rowEnd = "2" columnStart = "8" columnEnd = "8" />

		{/* ROW THREE */}
		<Area  color = "" rowStart = "3" rowEnd = "3" columnStart = "1" columnEnd = "1" />
		<Area  color = "" rowStart = "3" rowEnd = "3" columnStart = "2" columnEnd = "2" />
		<Area  color = "" rowStart = "3" rowEnd = "3" columnStart = "3" columnEnd = "3" />
		<Area  color = "" rowStart = "3" rowEnd = "3" columnStart = "4" columnEnd = "4" />
		<Area  color = "" rowStart = "3" rowEnd = "3" columnStart = "5" columnEnd = "5" />
		<Area  color = "" rowStart = "3" rowEnd = "3" columnStart = "6" columnEnd = "6" />
		<Area  color = "" rowStart = "3" rowEnd = "3" columnStart = "7" columnEnd = "7" />
		<Area  color = "" rowStart = "3" rowEnd = "3" columnStart = "8" columnEnd = "8" />

		{/* ROW FOUR */}
		<Area  color = "" rowStart = "4" rowEnd = "4" columnStart = "1" columnEnd = "1" />

		{/* MAIN CONTENT */}
		<Area
			style = {{ padding: "1em"}}
			color = "black" rowStart = "4" rowEnd = "6" columnStart = "2" columnEnd = "7"
			content = { <>
				<h2 style = {{ ...clickable, margin: ".5em" }} >Welcome to the Club!</h2>
				<div style = {{ fontSize: "1.2em", margin: ".5em" }} >
					Vox Punks Club is a collection of 5000 NFTs minted on the Solana Blockchain! We’ve used voxel modeling to reimagine the original Crypto Punks and make them interactable characters in the metaverse. The Vox Punks were minted on September 30th and sold out in minutes.
				</div>
			</> }
		/>
		<Area  color = "" rowStart = "4" rowEnd = "4" columnStart = "7" columnEnd = "7" />
		<Area  color = "" rowStart = "4" rowEnd = "4" columnStart = "8" columnEnd = "8" />

		{/* ROW FIVE */}
		<Area  color = "" rowStart = "5" rowEnd = "5" columnStart = "1" columnEnd = "1" />
		<Area  color = "" rowStart = "5" rowEnd = "5" columnStart = "7" columnEnd = "7" />
		<Area  color = "" rowStart = "5" rowEnd = "5" columnStart = "8" columnEnd = "8" />

		{/* ROW SIX */}
		<Area  color = "" rowStart = "6" rowEnd = "6" columnStart = "1" columnEnd = "1" />
		<Area  color = "" rowStart = "6" rowEnd = "6" columnStart = "2" columnEnd = "2" />

		{/* MARKETPLACES */}
		<Area
			color = "black" rowStart = "6" rowEnd = "6" columnStart = "3" columnEnd = "8"
			content = { <>
				<p style = {{ fontSize: "1.2em", margin: ".5em", marginBottom: "0em"}} >Find Us On These Marketplaces</p>
				<div style = {{ ...clickable, fontSize: "1.5em", margin: ".25em", fontWeight: "bold" }} >
					<Clickable text = "Magic Eden" link = "https://magiceden.io/marketplace/voxpunksclub" />
					<Clickable text = "Digital Eyes" link = "https://digitaleyes.market/collections/Vox%20Punks%20Club" />
					<Clickable text = "Solsea" link = "https://solsea.io/collection/615af1d44b6611e17fb574a1" />
					<Clickable text = "Alpha Art" link = "https://alpha.art/collection/vox-punks-club" />
				</div>
				</> }
		/>

		<Area  color = "" rowStart = "6" rowEnd = "6" columnStart = "8" columnEnd = "8" />

		{/* ROW SEVEN */}
		<Area  color = "" rowStart = "7" rowEnd = "7" columnStart = "1" columnEnd = "1" />
		<Area  color = "" rowStart = "7" rowEnd = "7" columnStart = "2" columnEnd = "2" />
		<Area  color = "" rowStart = "7" rowEnd = "7" columnStart = "3" columnEnd = "3" />
		<Area  color = "" rowStart = "7" rowEnd = "7" columnStart = "4" columnEnd = "4" />
		<Area  color = "" rowStart = "7" rowEnd = "7" columnStart = "5" columnEnd = "5" />
		<Area  color = "" rowStart = "7" rowEnd = "7" columnStart = "6" columnEnd = "6" />
		<Area  color = "" rowStart = "7" rowEnd = "7" columnStart = "7" columnEnd = "7" />
		<Area  color = "" rowStart = "7" rowEnd = "7" columnStart = "8" columnEnd = "8" />

		{/* ROW EIGHT */}
		<Area  color = "" rowStart = "8" rowEnd = "8" columnStart = "1" columnEnd = "1" />
		<Area  color = "" rowStart = "8" rowEnd = "8" columnStart = "2" columnEnd = "2" />
		<Area  color = "" rowStart = "8" rowEnd = "8" columnStart = "3" columnEnd = "3" />
		<Area  color = "" rowStart = "8" rowEnd = "8" columnStart = "4" columnEnd = "4" />
		<Area  color = "" rowStart = "8" rowEnd = "8" columnStart = "5" columnEnd = "5" />
		<Area  color = "" rowStart = "8" rowEnd = "8" columnStart = "6" columnEnd = "6" />
		<Area  color = "" rowStart = "8" rowEnd = "8" columnStart = "7" columnEnd = "7" />
		<Area  color = "" rowStart = "8" rowEnd = "8" columnStart = "8" columnEnd = "8" />
		</div>
	<div style = { grid } >
	</div>
    </div>
  );
}

const Area = ({ rowStart, rowEnd, columnStart, columnEnd, color, content = false, style = {} }) => {
	
	const areaStyle = { 
		display : "flex", flexDirection: "column",
		backgroundColor: color,
		justifyContent: 'center', alignItems: 'center',
		gridRowStart: rowStart, gridRowEnd: rowEnd,
		gridColumnStart: columnStart, gridColumnEnd: columnEnd,
	}

	return (
		<div style = {{ ...areaStyle, ...style }} >
			{ content }
		</div>
	)
}

const Clickable = ({ text, link }) => {
	const style = {
		padding: ".5em",
		cursor: "pointer" 
	}
	return (
		<span 
			style = { style } 
			onMouseOver = { (e) => e.target.style.color = "#1DA1F2" }
			onMouseOut 	= { (e) => e.target.style.color = "white" }
			onMouseDown = { (e) => e.target.style.color = "" }
			onMouseUp 	= { (e) => e.target.style.color = "#1DA1F2" }
			onClick = {() => window.open(link)}>
			{ text }
		</span>
	)
}

const Model = ({ imgName, altName, orientation = 90 }) => {
	return (
		<model-viewer 
			style={{ width: '100%', height: '100%' }}
			src = { imgName }
			alt = { altName }
			orientation = { `0deg 0deg ${orientation}deg` }
			shadow-intensity="1"
			auto-rotate
			camera-controls
		/>
	)
}

export default App;