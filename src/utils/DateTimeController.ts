import moment from "moment";
import jmoment from "moment-jalaali";
class DateTimeController {
  getDate(format: string, offset = 0) {
    let now = Date.now() + offset;
    let toDayObj:any = {
      "YYYY-MM-DD": moment(now).format("YYYY-MM-DD"),
    };
    return toDayObj[format];
  }
  parseToJDate(date:any, format:string) {
    return jmoment(date).format(format);
  }
}
export default new DateTimeController();
