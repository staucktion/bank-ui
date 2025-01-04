import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import axiosInstance from "../utils/axiosApi";
import { formatToLocalTimezone } from "../utils/timeUtils";

interface AuditLog {
	id: number;
	action: string;
	performed_at: string;
}

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 90, align: "center", headerAlign: "center" },
	{ field: "action", headerName: "Action", width: 800 },
	{
		field: "timestamp",
		headerName: "Timestamp",
		width: 200,
		valueGetter: (_, row) => formatToLocalTimezone(row.performed_at),
	},
];

const AuditLogTable = () => {
	const [logs, setLogs] = React.useState<AuditLog[]>([]);

	const fetchLogs = async () => {
		try {
			const response = await axiosInstance.get("/auditlogs");
			setLogs(response.data);
		} catch (error) {
			console.error("Error fetching audit logs:", error);
		}
	};

	React.useEffect(() => {
		fetchLogs();
	}, []);

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
				<IconButton color="primary" onClick={fetchLogs}>
					<RefreshIcon />
				</IconButton>
			</Box>

			<DataGrid rows={logs} columns={columns} initialState={{ pagination: { paginationModel: { pageSize: 5 } } }} pageSizeOptions={[5, 25, 50]} disableRowSelectionOnClick />
		</Box>
	);
};

export default AuditLogTable;
