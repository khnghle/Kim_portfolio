import { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";

const styles = ({ theme, position }) => ({
	overflow: "hidden",
	".carousel--slider": {
		display: "flex",
		flexDirection: "row",
		gap: "20px",
		transform: `translateX(${position * -85}%)`,
		transition: "transform 250ms ease-in-out",
	},

	".carousel--img": {
		height: "225px",
	},

	".isBlur": {
		filter: "blur(1px)",
		"&:hover": {
			filter: "brightness(75%) blur(1px)",
		},
	},
	".carousel-image--container": {
		position: "relative",
		cursor: "pointer",
		":hover>.overlay": {
			opacity: 1,
		},
	},
	".overlay": {
		opacity: 0,
		transition: "opacity 80ms",
		width: "35px",
		position: "absolute",
		top: "45%",
		left: position ? "75%" : "10%",
		pointerEvents: "none",
	},
});

// Breakpoints -- items to show
function Carousel({ images }) {
	const theme = useTheme();
	const [position, setPosition] = useState(0);
	const [next, setNext] = useState(3);
	const [prev, setPrev] = useState(null);

	const handleRight = () => {
		setPosition((currPosition) => {
			if (currPosition + 1 > 2) return currPosition;
			return currPosition + 1;
		});
	};

	const handleLeft = () => {
		setPosition((currPosition) => {
			if (currPosition - 1 < 0) return currPosition;
			return currPosition - 1;
		});
	};

	useEffect(() => {
		if (position === 0) {
			setNext(2);
			setPrev(null);
		}
		if (position === 1) {
			setNext(4);
			setPrev(1);
		}
    if (position === 2) {
			setNext(null);
			setPrev(3);
		}
	}, [position]);

	return (
		<Box sx={styles({ theme, position })}>
			<Box className="carousel--slider">
				{images.map((currImage, idx) => (
					<div
						key={`carousel--image#${idx}`}
						className="carousel-image--container"
						onClick={() => {
							if (prev === idx) handleLeft();
							if (next === idx) handleRight();
						}}
					>
						<img
							src={currImage}
							className={`carousel--img centerImage ${
								(next === idx || prev === idx) && "isBlur"
							}`}
						/>
						{prev === idx && <img src={leftArrow} className="overlay" />}
						{next === idx && <img src={rightArrow} className="overlay" />}
					</div>
				))}
			</Box>
		</Box>
	);
}

export default Carousel;
