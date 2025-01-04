import { Container, CssBaseline, Typography, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuditLogTable from "./components/AuditLogTable";

function App() {
	const themeMode = "light";

	const defaultTheme = createTheme({ palette: { mode: themeMode }, typography: { fontFamily: "Roboto, sans-serif" } });

	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<CssBaseline />
				<div style={{ minHeight: "100vh", background: "linear-gradient(330deg,rgb(255, 228, 108) 5%,rgb(233, 253, 248) 50%)" }}>
					<Container disableGutters maxWidth="lg" sx={{ pt: { xs: 2, md: 4 }, px: { xs: 0.5 } }}>
						<Paper elevation={10} sx={{ padding: { xs: 1, md: 3 } }}>
							<Typography variant="h4" color="primary" gutterBottom>
								Audit Logs
							</Typography>
							<Typography variant="subtitle1" color="textSecondary" gutterBottom>
								View detailed logs of actions performed in the bank application.
							</Typography>
							<AuditLogTable />
						</Paper>
					</Container>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
