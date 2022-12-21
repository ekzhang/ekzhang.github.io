import strftime from "strftime";

const utc = strftime.utc(); // YAML dates are in UTC

export function formatTime(format: string, date: Date | string): string {
  return utc(format, new Date(date));
}
