exports.main = async (event, callback) => {
    const now = new Date();
    const utcHour = now.getUTCHours();
    const utcDay = now.getUTCDay();
    const localHour = (utcHour - 5 + 24) % 24;
    const localDay = (utcHour - 5 < 0) ? (utcDay + 6) % 7 : utcDay;
    callback({
        outputFields: {
            es_laboral: localDay >= 1 && localDay <= 5 && localHour >= 9 && localHour < 18
        }
    });
}