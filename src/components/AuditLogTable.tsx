import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
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
		valueGetter: (value, row) => formatToLocalTimezone(row.performed_at),
	},
];

const AuditLogTable: React.FC = () => {
	const [logs, setLogs] = React.useState<AuditLog[]>([]);

	React.useEffect(() => {
		const fetchLogs = async () => {
			try {
				const response = await axiosInstance.get("/auditlogs");
				setLogs(response.data);
			} catch (error) {
				console.error("Error fetching audit logs:", error);
			}
		};
		fetchLogs();
	}, []);

	return (
		<Box sx={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={logs}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
			/>
		</Box>
	);
};

export default AuditLogTable;
