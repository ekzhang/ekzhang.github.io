import strftime from "strftime";

const utc = strftime.timezone("0000");

export function formatTime(format: string, date: Date | string): string {
  return utc(format, new Date(date));
}
