import { useState } from "react";
import { Box, useTheme } from "@mui/material";

const styles = ({ theme, position }) => ({
	overflow: "hidden",
	".carousel--slider": {
		display: "flex",
		flexDirection: "row",
		gap: "20px",
		transform: `translateX(${position * -80}%)`,
    transition: 'transform 250ms ease-in-out'
	},

	".carousel--img": {
		width: "160px",
	},

	".isBlur": {
		filter: "blur(1px)",
	},
});

// Breakpoints -- items to show
function Carousel({ images }) {
	const theme = useTheme();
	const [position, setPosition] = useState(0);

	const handleRight = () => {
		setPosition((currPosition) => {
			if (currPosition + 1 > 1) return currPosition;
			return currPosition + 1;
		});
	};

	const handleLeft = () => {
		setPosition((currPosition) => {
			if (currPosition - 1 < 0) return currPosition;
			return currPosition - 1;
		});
	};

	const checkIfBlur = () => {
		if (position === 0) return 3;
		if (position === 1) return 2;
	};
	return (
		<Box sx={styles({ theme, position })}>
			<Box className="carousel--slider">
				{images.map((currImage, idx) => (
					<img
						src={currImage}
						key={`carousel--image#${idx}`}
						className={`carousel--img centerImage ${
							checkIfBlur() === idx && "isBlur"
						}`}
					/>
				))}
			</Box>
			<button onClick={handleLeft}>Left</button>
			<button onClick={handleRight}>Right</button>
		</Box>
	);
}

export default Carousel;
