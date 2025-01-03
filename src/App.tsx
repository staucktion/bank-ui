import { Container, CssBaseline, Typography, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuditLogTable from "./components/AuditLogTable";

function App() {
	const themeMode = "light";

	const defaultTheme = createTheme({
		palette: { mode: themeMode },
		typography: { fontFamily: "Roboto, sans-serif" },
	});

	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<CssBaseline />
				<Container maxWidth="lg" sx={{ pt: 3 }}>
					<Paper elevation={10} sx={{ padding: 3 }}>
						<Typography variant="h4" color="primary" gutterBottom>
							Audit Logs
						</Typography>
						<Typography variant="subtitle1" color="textSecondary" gutterBottom>
							View detailed logs of actions performed in the bank application.
						</Typography>
						<AuditLogTable />
					</Paper>
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;
