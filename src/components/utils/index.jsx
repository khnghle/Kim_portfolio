import { Typography } from "@mui/material";

export const generateOrderedNumLists = (list, identifier) => (
	<ol>
		{list.map((listItem, idx) => (
			<li key={`${identifier}-li${idx}`}>{listItem}</li>
		))}
	</ol>
);

export const generateUnorderedNumLists = (list, identifier) => (
	<ul>
		{list.map((listItem, idx) => (
			<li key={`${identifier}-li${idx}`}>{listItem}</li>
		))}
	</ul>
);

export const generateCustomText = (list, identifier) => {
	return (
		<div>
			{list.map((listItem, idx) => {
				if (listItem.type === "string")
					return (
						<Typography key={`${identifier}-string${idx}`}>
							{listItem.text}
						</Typography>
					);
				if (listItem.type === "ol")
					return (
						<div key={`${identifier}-ol${idx}`}>
							{generateOrderedNumLists(listItem.text, identifier)}
						</div>
					);
			})}
		</div>
	);
};

export default {
	generateOrderedNumLists,
	generateUnorderedNumLists,
	generateCustomText,
};
