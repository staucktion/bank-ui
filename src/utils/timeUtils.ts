export const formatToLocalTimezone = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat("default", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).format(date);
};
