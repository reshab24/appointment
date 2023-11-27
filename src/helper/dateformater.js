
const buildDateTime = (date, time) => {
    const [year, month, day] = date.split("-").map(Number);
    const [hours, minutes] = time.split(":").map(Number);
    return new Date(year, month - 1, day, hours, minutes);
}
export default buildDateTime;

export const fromDateTimeToDateAndTime = (inputDateTime) => {
    const inputDate = new Date(inputDateTime).toISOString();
    const formattedDate = inputDate?.substring(0, inputDate.indexOf('T'));
    const formattedTime = inputDate?.substring(11, 16);

    return { formattedDate, formattedTime }
}