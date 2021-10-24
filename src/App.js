import { useState } from 'react'
import '@google/model-viewer';
// import { isMobile } from 'react-device-detect'; // https://www.npmjs.com/package/react-device-detect

import twitterWhite from "./imgs/pixelated_twitter_logo_white.png"
import twitterBlue from "./imgs/pixelated_twitter_logo_blue.png"
import discordWhite from "./imgs/pixelated_discord_logo_white.png"
import discordPurple from "./imgs/pixelated_discord_logo_purple.png"

import couchVox from "./imgs/couch_vox.png"
import qrCode from "./imgs/QR.png"
import arVox from './imgs/ar_vox.png';
import worldCube from './imgs/world_cube.png';


// import jbgBrownApe from './models/brown-ape-jbg-104.gltf';
import pigCop from './models/pig-cop-111.gltf';
import bggMale from './models/male-bgg-119.gltf';
import brownApe from './models/brown-ape-122.gltf';
import jbgFemale from './models/female-jbg-1010.gltf';
// import female from './models/female-1013.gltf';
import blackApe from './models/black-ape-1023.gltf';
import zombie from './models/zombie-1046.gltf';

const App = () =>{

	const app = {
		minHeight: "100vh",
	}

  return (
	<div style = { app } >
		<Header />
		<Splash />
		<Marketplaces />
		<QR />
		<Community />
		<Roadmap />
		<Footer />
    </div>
  );
}


const Header = ( ) => {
	const areaStyle = {
		backgroundColor: "black", color: "white", height: "120px",
		display : "flex", fontFamily: "PixelOperatorHB8",
		justifyContent: 'space-around', alignItems: 'center',
		
	}

	const divStyle = { 
		display : "flex", justifyContent: 'space-around', 
		alignItems: 'center', width: "150px"
	}

	return (
		<div style = { areaStyle } >
			<h2>Vox Punks Club</h2>
			<div style = { divStyle } >
				<img 
					src = { discordWhite } 
					alt = "discord logo"
					onClick = {() => { window.open("https://discord.gg/uzJ5hvBQnp")}}
					onMouseOver = {(e) => e.target.src = discordPurple }
					onMouseOut = {(e) => e.target.src = discordWhite }
				/>
				<img 
					src = { twitterWhite } 
					alt = "twitter logo"
					onClick = {() => { window.open("https://twitter.com/voxpunksclub")}}
					onMouseOver = {(e) => e.target.src = twitterBlue }
					onMouseOut = {(e) => e.target.src = twitterWhite }
				/>
			</div>
		</div>
	)
}

const Splash = ( ) => {
	const [selected, setSelected] = useState(0);
	const areaStyle = {
		backgroundColor: "white", fontFamily: "PixelOperatorMonoHB",
		height: "600px", display : "flex", flexDirection: "row",
		justifyContent: 'center', alignItems: 'center',
	}

	const textContainerStyle = { 
		display : "flex", flexDirection: "column",
		justifyContent: 'center',
		height: "1", width: "550px",
	}

	const arContainerStyle = { 
		display: "flex", justifyContent: 'center', alignItems: 'center',
		height: "500px", width: "40%", top: "50px"
	}

	const arStyle = { height: "500px", width: "500px"}
	const blockContainerStyle = { 
		display: "flex", 
		flexDirection: "column", 
		justifyContent: 'space-around', 
		alignItems: 'center',
		height: "300px"
	}

	const blockStyle = { height: "30px", width: "30px", cursor: "pointer" }
	const selectedStyle = { height: "35px", width: "35px", border: "2px solid black" }

	const headerStyle = { width: "500px", fontSize: "2em" }
	const textStyle = { width: "500px", fontFamily: "PixelOperatorMono" }

	return (
		<div style = { areaStyle } >
			<div style = { textContainerStyle } >
				<h1 style = { headerStyle } >Some amazing header of text</h1>
				<p style = { textStyle } >Vox Punks Club is a collection of 5000 NFTs minted on the Solana Blockchain! We’ve used voxel modeling to reimagine the original Crypto Punks and make them interactable characters in the metaverse. The Vox Punks were minted on September 30th and sold out in minutes.</p>
				<Clickable text = "SEE THE COLLECTION!" link = "https://voxpunksclub.com/rarity" baseStyle = {{ width: "230px" }} />
			</div>
			<div style = { arContainerStyle }>
				<div style = { arStyle } >
					{ selected === 0 && <Model imgName = { zombie } altName = "zombie vox punk" modelID = { 0 } /> }
					{ selected === 1 && <Model imgName = { brownApe } altName = "brown ape vox punk" modelID = { 1 } /> }
					{ selected === 2 && <Model imgName = { blackApe } altName = "black ape vox punk" modelID = { 2 } /> }
				</div>
				<div style = { blockContainerStyle } >
					<div 
						style = {{  backgroundColor: "#E6B500", ...blockStyle, ...(selected === 0 ? selectedStyle : {}) }}  
						onClick = { () => setSelected(0) }
					/>
					<div 
						style = {{  backgroundColor: "#9E0EC7", ...blockStyle, ...(selected === 1 ? selectedStyle : {}) }} 
						onClick = { () => setSelected(1) }
					/>
					<div 
						style = {{  backgroundColor: "#5EAA78", ...blockStyle, ...(selected === 2 ? selectedStyle : {}) }} 
						onClick = { () => setSelected(2) }
					/>
				</div>
			</div>
		</div>
	)
}

const Model = ({ imgName, altName, id = 0 }) => {
	return (
		<model-viewer 
			style={{ width: '100%', height: '100%' }}
			src = { imgName }
			alt = { altName }
			orientation = { `0deg 0deg 90deg` }
			shadow-intensity="1"
			auto-rotate
			camera-controls
		/>
	)
}

const Marketplaces = ( ) => {
	const [selected, setSelected] = useState(0);
	const areaStyle = {
		backgroundColor: "#F2F2F2", fontFamily: "PixelOperatorMonoHB",
		height: "600px", display : "flex", flexDirection: "row",
		justifyContent: 'center', alignItems: 'center',
	}

	// const linkContainerStyle = { 
	// 	backgroundColor: "black", color: "white",
	// 	display : "flex", flexDirection: "column",
	// 	justifyContent: 'center', alignItems: 'center',
	// 	height: "1", width: "550px",
	// }

	const arContainerStyle = {
		display: "flex", justifyContent: 'center', alignItems: 'center',
		height: "700px", width: "40%"
	}
	const blockContainerStyle = { 
		display: "flex", 
		flexDirection: "column", 
		justifyContent: 'space-around', 
		alignItems: 'center',
		height: "300px"
	}
	const blockStyle = { height: "30px", width: "30px", cursor: "pointer" }
	const selectedStyle = { height: "35px", width: "35px", border: "2px solid black" }
	const arStyle = { height: "500px", width: "500px"}
	const textStyle = { width: "500px", fontFamily: "PixelOperatorMono" }
	const divStyle = { width: "320px", display: "flex", justifyContent: 'space-between', margin: "20px 20px 20px 0px" }
	return (
		<div style = { areaStyle } >
			<div style = { arContainerStyle }>
				<div style = { blockContainerStyle } >
					<div 
						style = {{  backgroundColor: "#E6B500", ...blockStyle, ...(selected === 0 ? selectedStyle : {}) }}  
						onClick = { () => setSelected(0) }
					/>
					<div 
						style = {{  backgroundColor: "#9E0EC7", ...blockStyle, ...(selected === 1 ? selectedStyle : {}) }} 
						onClick = { () => setSelected(1) }
					/>
					<div 
						style = {{  backgroundColor: "#5EAA78", ...blockStyle, ...(selected === 2 ? selectedStyle : {}) }} 
						onClick = { () => setSelected(2) }
					/>
				</div>
				<div style = { arStyle } >
					{ selected === 0 && <Model imgName = { pigCop } altName = "pig cop vox punk" /> }
					{ selected === 1 && <Model imgName = { bggMale } altName = "male buble gum gang vox punk" /> }
					{ selected === 2 && <Model imgName = { jbgFemale } altName = "female juice box gang vox punk" /> }
				</div>
			</div>
			<div>
				<p style = { textStyle } >The Vox Punks were minted on September 30th, 2021 and sold out in minutes! To get your very own, get them out on the second markets:</p>
					<div style = { divStyle } >
						<Clickable text = "DIGITAL EYES" link = "https://digitaleyes.market/collections/Vox%20Punks%20Club" />
						<Clickable text = "ALPHA ART" link = "https://alpha.art/collection/vox-punks-club" />
					</div>
					<div style = { divStyle } >
						<Clickable text = "SOLSEA" link = "https://solsea.io/collection/615af1d44b6611e17fb574a1" />
						<Clickable text = "MAGIC EDEN" link = "https://magiceden.io/marketplace/voxpunksclub" />
					</div>
			</div>
		</div>
	)
}

const Clickable = ({ text, link, baseStyle = {} }) => {
	const style = {
		padding: ".5em",
		cursor: "pointer",
		background: "black",
		color: "white",
		textAlign: "center",
		// textDecoration: "underline",
		width: "130px"
	}
	return (
		<span 
			style = {{ ...style, ...baseStyle }}
			onMouseOver = { (e) => e.target.style.background= "linear-gradient(90deg,rgba(152,69,254,.6),rgba(0,209,139,.6))" }
			onMouseOut 	= { (e) => e.target.style.background = "black" }
			onClick = {() => window.open(link)}>
			{ text }
		</span>
	)
}

const QR = ( ) => {
	
	const areaStyle = {
		backgroundColor: "white", fontFamily: "PixelOperatorMonoHB",
		height: "700px", display : "flex", flexDirection: "row",
		justifyContent: 'center', alignItems: 'center', position: "relative"
	}

	const imgStyle = { display: "block", width: "100%"}
	const qrStyle = { display: "block", position: "absolute", width: "300px",}
	const divStyle = { 
		display: "block", position: "absolute", 
		width: "260px", backgroundColor: "white",
		bottom: "75px", padding: "20px 20px",
	}

	return (
		<div style = { areaStyle } >
			<img style = { qrStyle } src = { qrCode } alt = "qr code" />
			<div style = { divStyle }>Use the above QR code to check out Vox Punks in VR!</div>
			<img style = { imgStyle } src = { couchVox } alt = "a couch with a angel andd evil vox punk" />
		</div>
	)
}

const Community = ( ) => {
	
	const imgStyle = { display: "block", width: "100%" }

	const areaStyle = { 
		backgroundColor: "white", padding: "4em 8em",
		fontFamily: "PixelOperatorMonoHB",
		display : "flex", flexDirection: "column",
		justifyContent: 'center', alignItems: 'center',
	}

	const divStyle = { 
		backgroundColor: "white", width: "80%",
		display : "flex", flexDirection: "row",
		justifyContent: 'space-between', alignItems: 'center',
	}

	const textDivStyle = { 
		backgroundColor: "white", width: "500px",
		display : "flex", flexDirection: "column",
		justifyContent: 'center', alignItems: 'center',
	}

	const clickableStyle = {
		padding: ".5em 1em",
		cursor: "pointer",
		width: "250px",
		textDecoration: "underline",
		backgroundColor: "black",
		color: "white",
		fontFamily: "PixelOperatorMonoHB",
		display : "flex", flexDirection: "row", alignItems: "center",
		justifyContent: "space-between"
		
	}

	return (
		<>
		<div style = { areaStyle } >
			<div style = { divStyle }>
				<div >
					<img src = { worldCube } alt = "world cube" />
				</div>
				<div style = { textDivStyle }>
					<h1>Join our Community</h1>
					<p>
					We intend to build a great community around this idealogy that the initial owners and future owners will be part of DAO (Dcentralized autonomous organization) and take decisions what we will make from funds received and collected...
					</p>
					<span 
						style = { clickableStyle }
						onMouseOver = { (e) => e.target.style.backgroundColor = "#5865F2" }
						onMouseOut 	= { (e) => e.target.style.backgroundColor = "black" }
						onClick = {() => window.open("https://discord.gg/uzJ5hvBQnp")}
					>
						<img
							style = {{ backgroundColor: "inherit" }}
							src = { discordWhite } 
							alt = "discord"
						/>
						JOIN US ON DISCORD
					</span>
				</div>
			</div>
		</div>
		<img style = { imgStyle } src = { arVox } alt = "three vox in Houston" />
		</>
	)
}


const Roadmap = ( ) => {
	
	const areaStyle = {
		backgroundColor: "black", color: "white", fontFamily: "PixelOperatorMonoHB",
		display : "flex", flexDirection: "column", padding: "4em 8em",
		justifyContent: 'center', alignItems: 'center',
	}

	const spanStyle = {
		borderBottom: "4px solid white",
		width: "75%"
	}

	const divStyle = {
		width: "75%"
	}

	return (
		<div style = { areaStyle } >
			<span style = { spanStyle } >
				<h1>Roadmap</h1>
			</span>
			<div style = { divStyle } >
				<div>
					<h2>Upcoming Breeding</h2>
					<p>
						The Punks will be able to breed Baby Punks which are entirely different set of NFTs absolutely free for the owners and the DAO/Owners can decide if we will go with this decision or not.
					</p>
				</div>
				<div>
					<h2>Upcoming Breeding</h2>
					<p>
						The Punks will be able to breed Baby Punks which are entirely different set of NFTs absolutely free for the owners and the DAO/Owners can decide if we will go with this decision or not.
					</p>
				</div>
				<div>
					<h2>Upcoming Breeding</h2>
					<p>
						The Punks will be able to breed Baby Punks which are entirely different set of NFTs absolutely free for the owners and the DAO/Owners can decide if we will go with this decision or not.
					</p>
				</div>
			</div>
		</div>
	)
}

const Footer = ( ) => {
	
	const areaStyle = { 
		backgroundColor: "white", height: "80px",
		display : "flex", flexDirection: "column",
		justifyContent: 'center', alignItems: 'center',
		fontFamily: "PixelOperatorMonoHB"
	}

	const spanStyle = {
		cursor: "pointer",
		// background: "black",
		// webkitBackgroundClip: "text !important",
		// backgroundClip: "text !important",
		// webkitTextFillColor: "transparent",
		// color: "transparent"
	}

	return (
		<div style = { areaStyle } >
			<h3>Made with ❤️ by 
				<span
					// onMouseOver = { (e) => e.target.style.color= "linear-gradient(90deg,rgba(152,69,254,.6),rgba(0,209,139,.6))" }
					// onMouseOut 	= { (e) => e.target.style.color = "black" }
					onClick = { () => window.open("https://twitter.com/0xExplodingHead") }
					style = { spanStyle }
				>
					{` ExplodingHead `}
				</span> 
				& 
				<span
					// onMouseOver = { (e) => e.target.style.color = "linear-gradient(90deg,rgba(152,69,254,.6),rgba(0,209,139,.6))" }
					// onMouseOut 	= { (e) => e.target.style.color = "black" }
					onClick = { () => window.open("https://twitter.com/heleemelon") }
					style = { spanStyle }
				>
					{` heleemelon`}
				</span>
			</h3>
		</div>
	)
}

export default App;