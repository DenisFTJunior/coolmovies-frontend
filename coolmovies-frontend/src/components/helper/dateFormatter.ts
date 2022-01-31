import moment from "moment";

const dateFormatter = (date: Date, format: string = "DD/MM/YYYY HH:mm") => {
  const dateFormatted = moment(date).format(format);
  return dateFormatted;
};

export default dateFormatter;
