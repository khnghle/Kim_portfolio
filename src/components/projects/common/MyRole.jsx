import { Box, useTheme, Typography } from "@mui/material";


const styles = ({ theme, tableType }) => ({
	display: "flex",
	flexDirection: 'column',
	marginTop: "30px",
	alignItems: "center",
  gap:'10px',
  '.responsibilies--img': {
    width: tableType === 'typeA'? '400px': '300px'
  },
  '.designProcessFlow--img': {
    width: '100%',
    marginTop: '20px',
  }
});

function MyRole({data}) {
	const theme = useTheme();

	return (
		<Box sx={styles({ theme, tableType: data.roleTableType })}>
			<Typography variant="h2">My Role</Typography>
			<Typography>
				{data.myRole}
			</Typography>
			<img src={data.roleTable} className="responsibilies--img"/>

			<Box>
				<Typography>Product Type: {data.productType}</Typography>
				<Typography>Tools: {data.tools} </Typography>
			</Box>

			<img src={data.designProcessFlow} className="designProcessFlow--img"/>
		</Box>
	);
}

export default MyRole;
