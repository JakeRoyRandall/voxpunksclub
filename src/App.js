import { useState } from 'react'
import '@google/model-viewer';
import { isMobile } from 'react-device-detect'; // https://www.npmjs.com/package/react-device-detect
import twitterWhite from "./imgs/pixelated_twitter_logo_white.png"
import twitterBlue from "./imgs/pixelated_twitter_logo_blue.png"
import discordWhite from "./imgs/pixelated_discord_logo_white.png"
import discordPurple from "./imgs/pixelated_discord_logo_purple.png"
import pixelHeart from "./imgs/pixelated_heart.png"
import pixelCheck from "./imgs/pixelated_checkmark.png"
import couchVox from "./imgs/couch_vox.png"
import qrCode from "./imgs/QR.png"
import arVox from './imgs/ar_vox.png';
import worldCube from './imgs/world_cube.png';
import pigCop from './models/pig-cop-111.glb';
import bggMale from './models/male-bgg-119.glb';
import brownApe from './models/brown-ape-122.glb';
import jbgFemale from './models/female-jbg-1010.glb';
import blackApe from './models/black-ape-1023.glb';
import zombie from './models/zombie-1046.glb';
// import jbgBrownApe from './models/brown-ape-jbg-104.gltf';
// import female from './models/female-1013.gltf';

const App = () => { 
	const app = { minHeight: "100vh" }
	return (
		<div style = { app } >
			{ !isMobile ? <Header /> : <MobileHeader /> }
			{ !isMobile ? <Splash /> : <MobileSplash />}
			{  isMobile && <MobileAR />}
			{ !isMobile ? <Marketplaces /> : <MobileMarketplaces />}
			{ !isMobile && <QR /> }
			{ !isMobile ? <Community /> : <MobileCommunity /> }
			{ !isMobile ? <Roadmap /> : <MobileRoadmap />}
			{ !isMobile && <Footer /> }
		</div>
	);
}

const Header = ( ) => {
	const areaStyle = {
		backgroundColor: "black", color: "white", height: "120px",
		display : "flex", fontFamily: "PixelOperatorHB8",
		justifyContent: 'space-around', alignItems: 'center'
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
					style = {{ cursor: "pointer" }}
				/>
				<img 
					src = { twitterWhite } 
					alt = "twitter logo"
					onClick = {() => { window.open("https://twitter.com/voxpunksclub")}}
					onMouseOver = {(e) => e.target.src = twitterBlue }
					onMouseOut = {(e) => e.target.src = twitterWhite }
					style = {{ cursor: "pointer" }}
				/>
			</div>
		</div>
	)
}

const MobileHeader = ( ) => {
	const areaStyle = {
		display : "flex", justifyContent: 'space-around', alignItems: 'center',
		backgroundColor: "black", color: "white", height: "80px", fontFamily: "PixelOperatorHB8"
	}
	const imgStyle = { height: "24px", width: "24px" }
	const divStyle = { display : "flex", justifyContent: 'space-around', alignItems: 'center', width: "100px" }
	return (
		<div style = { areaStyle } >
			<h4>Vox Punks Club</h4>
			<div style = { divStyle } >
				<img 
					src = { discordWhite } alt = "discord logo" style = { imgStyle }	
					onClick = {() => { window.open("https://discord.gg/uzJ5hvBQnp")}}
				/>
				<img 
					src = { twitterWhite } alt = "twitter logo" style = { imgStyle }
					onClick = {() => { window.open("https://twitter.com/voxpunksclub")}}
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
		justifyContent: 'space-around',
		height: "500px", width: "500px",
	}

	const arContainerStyle = { 
		display: "flex", justifyContent: 'center', alignItems: 'center',
		height: "500px", width: "500px", top: "50px"
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
	const textStyle = { width: "500px", fontFamily: "PixelOperatorMono", fontSize: "1.2em" }

	return (
		<div style = { areaStyle } >
			<div style = { textContainerStyle } >
				<h1 style = { headerStyle } >Welcome to the Club!</h1>
				<p style = { textStyle } >Vox Punks Club is a collection of 5001 NFTs minted on the Solana Blockchain! We’ve used voxel modeling to reimagine the original Crypto Punks and make them interactable characters in the metaverse. Complete with angels, devils, cops, & cowgirls, the Vox Punk Club has something for everyone.</p>
				<Clickable text = "EXPLORE THE COLLECTION" link = "https://voxpunksclub.com/rarity" baseStyle = {{ width: "230px" }} />
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

const MobileSplash = ( ) => {
	const areaStyle = { display : "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', backgroundColor: "white", fontFamily: "PixelOperatorMonoHB" }
	const textContainerStyle = { display : "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", width: "80%" }
	const headerStyle = { fontSize: "1.5em", margin: "1em 0em .5em 0em" }
	const textStyle = { fontFamily: "PixelOperatorMono", fontSize: "1em" }
	return (
		<div style = { areaStyle } >
			<div style = { textContainerStyle } >
				<h4 style = { headerStyle } >Welcome to the Club!</h4>
				<p style = { textStyle } >Vox Punks Club is a collection of 5001 NFTs minted on the Solana Blockchain! We’ve used voxel modeling to reimagine the original Crypto Punks and make them interactable characters in the metaverse. Complete with angels, devils, cops, & cowgirls, the Vox Punk Club has something for everyone.</p>
				<Clickable text = "EXPLORE THE COLLECTION" link = "https://voxpunksclub.com/rarity" baseStyle = {{ width: "280px" }} />
			</div>
		</div>
	)
}

const MobileAR = ( ) => {
	const [selected, setSelected] = useState(0);
	const areaStyle = { display : "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', backgroundColor: "white", fontFamily: "PixelOperatorMonoHB" }
	const arContainerStyle = { display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: "330px", margin: "1em 0em" }
	const arStyle = { height: "300px", minWidth: "300px" }
	const blockContainerStyle = { display: "flex", flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', width: "80%" }
	const blockStyle = { height: "30px", width: "30px", cursor: "pointer" }
	const selectedStyle = { height: "35px", width: "35px", border: "2px solid black" }

	return (
		<div style = { areaStyle } >
			<div style = { arContainerStyle }>
				<div style = { arStyle } >
					{ selected === 0 && <Model imgName = { zombie } altName = "zombie vox punk" modelID = { 0 } /> }
					{ selected === 1 && <Model imgName = { brownApe } altName = "brown ape vox punk" modelID = { 1 } /> }
					{ selected === 2 && <Model imgName = { blackApe } altName = "black ape vox punk" modelID = { 2 } /> }
					{ selected === 3 && <Model imgName = { pigCop } altName = "pig cop vox punk" modelID = { 3 } /> }
					{ selected === 4 && <Model imgName = { bggMale } altName = "male buble gum gang vox punk" modelID = { 4 } /> }
					{ selected === 5 && <Model imgName = { jbgFemale } altName = "female juice box gang vox punk" modelID = { 5 } /> }
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
										<div 
						style = {{  backgroundColor: "#E6B500", ...blockStyle, ...(selected === 3 ? selectedStyle : {}) }}  
						onClick = { () => setSelected(3) }
					/>
					<div 
						style = {{  backgroundColor: "#9E0EC7", ...blockStyle, ...(selected === 4 ? selectedStyle : {}) }} 
						onClick = { () => setSelected(4) }
					/>
					<div 
						style = {{  backgroundColor: "#5EAA78", ...blockStyle, ...(selected === 5 ? selectedStyle : {}) }} 
						onClick = { () => setSelected(5) }
					/>
				</div>
			</div>
			<Clickable baseStyle = {{ width: "280px", margin: "1em 0em .5em 0em" }} text = "VIEW THIS VOX IN AR" link = "https://voxpunksclub.com/portal" />
			<Clickable baseStyle = {{ width: "280px", margin: ".5em 0em 1em 0em" }} text = "GET YOUR 3D FILES" link = "https://voxpunksclub.com/portal" />
		</div>
	)
}

const Model = ({ imgName, altName, id = 0 }) => {
	return (
		<model-viewer 
			ar
			auto-rotate
			camera-controls
			style = {{ width: '100%', height: '100%' }}
			src = { imgName }
			alt = { altName }
			orientation = { `0deg 0deg 90deg` }
			shadow-intensity="1"
			ar-modes="webxr scene-viewer quick-look"
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

	const arContainerStyle = {
		display: "flex", justifyContent: 'center', alignItems: 'center',
		height: "700px", width: "500px"
	}
	const blockContainerStyle = { 
		display: "flex", 
		flexDirection: "column", 
		justifyContent: 'space-around', 
		alignItems: 'center',
		height: "300px"
	}
	const textContainerStyle = { 
		display : "flex", flexDirection: "column",
		justifyContent: 'space-around',
		height: "500px", width: "500px",
	}
	const headerStyle = { width: "500px", fontSize: "2em" }
	const blockStyle = { height: "30px", width: "30px", cursor: "pointer" }
	const selectedStyle = { height: "35px", width: "35px", border: "2px solid black" }
	const arStyle = { height: "500px", width: "500px"}
	const textStyle = { width: "500px", fontFamily: "PixelOperatorMono", fontSize: "1.2em" }
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
			<div style = { textContainerStyle } >
				<h1 style = { headerStyle } >Looking for a Vox?</h1>
				<p style = { textStyle } >The Vox Punks were minted on September 30th, 2021 and sold out in minutes. To get your very own Vox Punk, visit our marketplace partners.</p>
					<div>
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
		</div>
	)
}

const MobileMarketplaces = ( ) => {
	const areaStyle = { display : "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', backgroundColor: "white", fontFamily: "PixelOperatorMonoHB" }
	const textContainerStyle = { display : "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", width: "80%" }
	const divStyle = { width: "100%", display: "flex", justifyContent: 'space-between', margin: "20px 20px 20px 0px" }
	const headerStyle = { fontSize: "1.5em", margin: "1em 0em .5em 0em" }
	const textStyle = { fontFamily: "PixelOperatorMono", fontSize: "1em" }
	return (
		<div style = { areaStyle } >
			<div style = { textContainerStyle } >
				<h1 style = { headerStyle } >Looking for a Vox?</h1>
				<p style = { textStyle } >The Vox Punks were minted on September 30th, 2021 and sold out in minutes. To get your very own Vox Punk, visit our marketplace partners.</p>
					<div>
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
			onMouseOver = { (e) => e.target.style.background= "linear-gradient(90deg,rgba(152,69,254,1),rgba(0,209,139,1))" }
			onMouseOut 	= { (e) => e.target.style.background = "black" }
			onClick = {() => window.open(link)}>
			{ text }
		</span>
	)
}

const QR = ( ) => {
	const areaStyle = {
		backgroundColor: "#F2F2F2", fontFamily: "PixelOperatorMonoHB",
		height: "700px", display : "flex", flexDirection: "row",
		justifyContent: 'center', alignItems: 'center', position: "relative"
	}
	const divStyle = { 
		display: "block", position: "absolute", 
		width: "260px", backgroundColor: "white",
		padding: "20px 20px",
	}

	const imgStyle = { display: "block", width: "100%"}
	const qrStyle = { display: "block", position: "absolute", width: "300px", top: "100px"}
	return (
		<div style = { areaStyle } >
			<img style = { qrStyle } src = { qrCode } alt = "qr code" />
			<div style = {{ ...divStyle, top: "425px" }}>Use the above QR code to check out Vox Punks in VR. Already own a Vox? Click the below button to download the 3D files.</div>
			<Clickable baseStyle = {{ position: "absolute", top: "600px", width: "280px" }} text = "SEE YOUR VOX IN 3D" link = "https://voxpunksclub.com/portal" />
			<img style = { imgStyle } src = { couchVox } alt = "a couch with a angel andd evil vox punk" />
		</div>
	)
}

const Community = ( ) => {
	
	const imgStyle = { display: "block", width: "100%" }

	const areaStyle = { 
		backgroundColor: "white", padding: "4em 8em",
		maxWidth: "80%",
		fontFamily: "PixelOperatorMonoHB",
		display : "flex", flexDirection: "column",
		justifyContent: 'center', alignItems: 'center',
	}

	const divStyle = { 
		backgroundColor: "white",
		display : "flex", flexDirection: "row",
		justifyContent: 'space-around', alignItems: 'center',
		width: "100%"
	}

	const textDivStyle = { 
		backgroundColor: "white", maxWidth: "500px",
		display : "flex", flexDirection: "column",
		justifyContent: 'center'
	}

	const clickableStyle = {
		padding: ".5em 1em",
		cursor: "pointer",
		width: "260px",
		backgroundColor: "black",
		color: "white",
		fontFamily: "PixelOperatorMonoHB",
		display : "flex", flexDirection: "row", alignItems: "center",
		justifyContent: "space-around",
		margin: "1em 0"
		
	}

	const textStyle = { fontFamily: "PixelOperatorMono", fontSize: "1.2em" }

	return (
		<>
		<div style = { areaStyle } >
			<div style = { divStyle }>
				<div style = {{ display: "flex", margin: "2em" }} >
					<img src = { worldCube } alt = "world cube" />
				</div>
				<div style = { textDivStyle }>
					<h1>Join our Community!</h1>
					<p style = { textStyle } >
						Since the launch of the Vox Punks Club, community has been one of our strongest assets. In fact, the images you see above and below were captured by community members for our ongoing "Vox in the World" AR games. If you're brand new to NFTs, or a grizzled vetren, we'd love to have you join our community.
					</p>
					<span 
						style = { clickableStyle }
						onMouseOver = { (e) => e.target.style.backgroundColor = "#5865F2" }
						onMouseOut 	= { (e) => e.target.style.backgroundColor = "black" }
						onClick = {() => window.open("https://discord.gg/uzJ5hvBQnp")}
					>
						<img
							style = {{ backgroundColor: "inherit", height: "24px"}}
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

const MobileCommunity = ( ) => {
	const headerStyle = { fontSize: "1.5em", margin: "1em 0em .5em 0em" }
	const imgStyle = { display: "block", width: "100%" }
	const areaStyle = { display : "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', backgroundColor: "white", fontFamily: "PixelOperatorMonoHB" }
	const textContainerStyle = { display : "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", width: "80%" }
	const clickableStyle = {
		padding: ".5em 1em",
		cursor: "pointer",
		width: "260px",
		backgroundColor: "black",
		color: "white",
		fontFamily: "PixelOperatorMonoHB",
		display : "flex", flexDirection: "row", alignItems: "center",
		justifyContent: "space-around",
		margin: "1em 0"
	}
	const textStyle = { fontFamily: "PixelOperatorMono", fontSize: "1em" }

	return (
		<>
		<div style = { areaStyle } >
			<div style = { textContainerStyle }>
				<h4 style = { headerStyle }>Join our Community!</h4>
				<p style = { textStyle } >
					Since the launch of the Vox Punks Club, community has been one of our strongest assets. In fact, the images you see above and below were captured by community members for our ongoing "Vox in the World" AR games. If you're brand new to NFTs, or a grizzled vetren, we'd love to have you join our community.
				</p>
				<span style = { clickableStyle } onClick = {() => window.open("https://discord.gg/uzJ5hvBQnp")} >
					<img
						style = {{ backgroundColor: "inherit", height: "24px"}}
						src = { discordWhite } 
						alt = "discord"
					/>
					JOIN US ON DISCORD
				</span>
			</div>
		</div>
		<img style = { imgStyle } src = { arVox } alt = "three vox in Houston" />
		</>
	)
}

const Roadmap = ( ) => {
	const areaStyle = {
		backgroundColor: "black", color: "white", fontFamily: "PixelOperatorMonoHB",
		display : "flex", flexDirection: "column", padding: "3em 8em",
		justifyContent: 'center', alignItems: 'center',
	}
	const spanStyle = {
		borderBottom: "5px solid white",
		margin: "0px 0px 25px 0px",
		width: "75%"
	}
	const divStyle = { width: "75%" }
	const itemStyle = { display: "flex", flexDirection: "row", minHeight: "200px" }
	const blockStyle = { 
		fontSize: "1.5em",
		display : "flex", justifyContent: "center", alignItems: "center",
		minWidth: "140px", height: "140px", border: "5px solid white", margin: "25px 50px 25px 0px",
	}
	return (
		<div style = { areaStyle } >
			<span style = { spanStyle } ><h1>Roadmap</h1></span>
			<div style = { divStyle } >
				{/* Mint & Listing */}
				<div style = { itemStyle } >
					<div style = {{ ...blockStyle, backgroundColor: "green" }} ><img src = { pixelCheck } alt = "pixelated checkmark" /></div>
					<div><h2>Mint & Listing</h2>
						<p>We successfully completed our mint on Sept 30th, selling out in just 8 minutes. The mint price was .3 SOL. Shortly after the collection was listed on Magic Eden. Over the next few days the collection quickly spread to the other leading marketplaces.</p>
					</div>
				</div>
				{/* Rarity Site Complete */}
				<div style = { itemStyle } ><div style = {{ ...blockStyle, backgroundColor: "green" }} ><img src = { pixelCheck } alt = "pixelated checkmark" /></div>
					<div><h2>Rarity Site</h2>
						<p>
							Two days after mint, Vox Punks Club launched a custom rarity site where collectors can explore the entire collection and the rankings of their Vox Punks.{' '}
							<a style={{ color: "white" }} href="http://voxpunksclub.com/rarity" target="_blank" rel="noreferrer">Visit the Rarity Site</a>.
						</p>
					</div>
				</div>
				{/* 3D Files */}
				<div style = { itemStyle } ><div style = {{ ...blockStyle, backgroundColor: "green" }} ><img src = { pixelCheck } alt = "pixelated checkmark" /></div>
					<div><h2>3D File Portal</h2>
						<p>
							Shortly after mint, Vox Punks Club set up a portal for all holders to download .gltf and .glb files for their Vox Punks. This allows holders to have fun with their Vox Punks in Augmented Reality, unlocking the creativity of our community.{' '}
							<a style={{ color: "white" }} href="http://voxpunksclub.com/portal" target="_blank" rel="noreferrer">Visit the 3D Portal</a>.
						</p>
					</div>
				</div>
				{/* Upcoming Breeding */}
				<div style = { itemStyle } ><div style = { blockStyle } >NOV 2021</div>
					<div><h2>Upcoming Breeding</h2>
						<p>
							Beeding is coming! The 5,000 Vox Punks will be able to breed 2,500 Baby Vox Punks. Rarity matters-- each Vox Punk has a chance to pass on their traits to the babies they breed.{' '}
							<a style={{ color: "white" }} href="https://discord.gg/uzJ5hvBQnp" target="_blank" rel="noreferrer">Join our discord</a> to get the latest updates.
						</p>
					</div>
				</div>
				{/* Grape DAO */}
				<div style = { itemStyle } >
					<div style = { blockStyle } >NOV 2021</div>
					<div><h2>Grape DAO</h2>
						<p>Community is everything! We’re implementing GRAPE DAO in order to ensure every holder has a voice in the future of the project. We’ve amassed a significant community fund in order to support future projects decided by the DAO.</p>
					</div>
				</div>
				{/* Full Body Avatar */}
				<div style = { itemStyle } >
					<div style = { blockStyle } >DEC 2021</div>
					<div><h2>Full Body Avatars</h2>
						<p>Ever seen a punk dance? Full body avatars are a big step forward toward dancing, games, and more for your Vox. More details coming in November.</p>
					</div>
				</div>
				{/* Holiday Themed Drop */}
				<div style = { itemStyle } >
					<div style = { blockStyle } >DEC 2021</div>
					<div><h2>Holiday Themed Drop</h2>
						<p>December is the season for giving! More details coming in November.</p>
					</div>
				</div>
				{/* Games */}
				<div style = { itemStyle } >
					<div style = { blockStyle } >2022</div>
					<div><h2>Future Plans</h2>
						<p>At the Vox Punks Club, we focus on building and not over-promising. However, we are in this for the long-term and are excited to continue bringing value to all club members.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const MobileRoadmap = ( ) => {
	const areaStyle = {
		display : "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center',
		backgroundColor: "black", color: "white", fontFamily: "PixelOperatorMonoHB"
	}
	const divStyle = { width: "80%" }
	const headerStyle = { fontSize: "1.5em", margin: "1em 0em .5em 0em" }
	return (
		<div style = { areaStyle } >
			<div style = { divStyle } >

				<h2 style = { headerStyle }>Roadmap</h2>
				<div style = {{ borderTop: "5px solid white" }} >
					{/* Mint & Listing */}
					<div>
						<div><h3>Mint & Listing ✔</h3>
							<p>We successfully completed our mint on Sept 30th, selling out in just 8 minutes. The mint price was .3 SOL. Shortly after the collection was listed on Magic Eden. Over the next few days the collection quickly spread to the other leading marketplaces.</p>
						</div>
					</div>

					{/* Rarity Site Complete */}
					<div>
						<div><h3>Rarity Site ✔</h3>
							<p>
								Two days after mint, Vox Punks Club launched a custom rarity site where collectors can explore the entire collection and the rankings of their Vox Punks.{' '}
								<a style={{ color: "white" }} href="http://voxpunksclub.com/rarity" target="_blank" rel="noreferrer">Visit the Rarity Site</a>.
							</p>
						</div>
					</div>

					{/* 3D Files */}
					<div>
						<div><h3>3D File Portal ✔</h3>
							<p>
								Shortly after mint, Vox Punks Club set up a portal for all holders to download .gltf and .glb files for their Vox Punks. This allows holders to have fun with their Vox Punks in Augmented Reality, unlocking the creativity of our community.{' '}
								<a style={{ color: "white" }} href="http://voxpunksclub.com/portal" target="_blank" rel="noreferrer">Visit the 3D Portal</a>.
							</p>
						</div>
					</div>

					{/* Upcoming Breeding */}
					<div>
						<div><h3>Breeding & Babies</h3><h4>NOV 2021</h4>
							<p>
								Beeding is coming! The 5,000 Vox Punks will be able to breed 2,500 Baby Vox Punks. Rarity matters-- each Vox Punk has a chance to pass on their traits to the babies they breed.{' '}
								<a style={{ color: "white" }} href="https://discord.gg/uzJ5hvBQnp" target="_blank" rel="noreferrer">Join our discord</a> to get the latest updates.
							</p>
						</div>
					</div>

					{/* Grape DAO */}
					<div>
						<div><h3>Grape DAO</h3><h4>NOV 2021</h4>
							<p>Community is everything! We’re implementing GRAPE DAO in order to ensure every holder has a voice in the future of the project. We’ve amassed a significant community fund in order to support future projects decided by the DAO.</p>
						</div>
					</div>

					{/* Full Body Avatar */}
					<div>
						<div><h3>Full Body Avatars</h3><h4>DEC 2021</h4>
							<p>Ever seen a punk dance? Full body avatars are a big step forward toward dancing, games, and more for your Vox. More details coming in November.</p>
						</div>
					</div>

					{/* Holiday Themed Drop */}
					<div>
						<div><h3>Holiday Themed Drop</h3><h4>DEC 2021</h4>
							<p>December is the season for giving! More details coming in November.</p>
						</div>
					</div>

					{/* Games */}
					<div>
						<div><h3>Future Plans</h3><h4>2022</h4>
							<p>At the Vox Punks Club, we focus on building and not over-promising. However, we are in this for the long-term and are excited to continue bringing value to all club members.</p>
						</div>
					</div>
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
	const hStyle = { display: 'flex', justifyContent: 'space-around', width: '480px' }
	const spanStyle = { cursor: "pointer" }

	return (
		<div style = { areaStyle } >
			<h3 style = { hStyle } >
				Made with
					<img src = { pixelHeart } style = {{ width: "24px" }} alt = "pixel heart" />
				by

					<span style = { spanStyle } onClick = { () => window.open("https://twitter.com/0xExplodingHead") } >
				ExplodingHead
					</span> 
				& 

					<span style = { spanStyle } onClick = { () => window.open("https://twitter.com/heleemelon") } >
				heleemelon
					</span>
			</h3>
		</div>
	)
}

export default App;