import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuditLogTable from "./components/AuditLogTable";

function App() {
	const themeMode = "light";

	const defaultTheme = createTheme({ palette: { mode: themeMode } });

	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<CssBaseline />
				<Container maxWidth="lg">
					<h1>Audit Logs</h1>
					<AuditLogTable />
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;
