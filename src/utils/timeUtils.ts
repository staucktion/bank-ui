export const formatToLocalTimezone = (timestamp: string) => {
	const date = new Date(timestamp);
	return new Intl.DateTimeFormat("default", {
		hour: "2-digit",
		minute: "2-digit",
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour12: false, // 24-hour format
	}).format(date);
};
