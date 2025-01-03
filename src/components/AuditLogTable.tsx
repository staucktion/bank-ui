import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import axiosInstance from "../utils/axiosApi";
import { formatToLocalTimezone } from "../utils/timeUtils";

interface AuditLog {
	id: number;
	action: string;
	timestamp: string;
	performed_at: string;
}

const AuditLogTable = () => {
	const [logs, setLogs] = useState<AuditLog[]>([]);

	useEffect(() => {
		const fetchLogs = async () => {
			try {
				const response = await axiosInstance.get("/auditlogs");
				console.log(response);
				setLogs(response.data);
			} catch (error) {
				console.error("Error fetching audit logs:", error);
			}
		};
		fetchLogs();
	}, []);

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Action</TableCell>
						<TableCell>Timestamp</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{logs.map((log) => (
						<TableRow key={log.id}>
							<TableCell>{log.id}</TableCell>
							<TableCell>{log.action}</TableCell>
							<TableCell>{formatToLocalTimezone(log.performed_at)}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default AuditLogTable;
