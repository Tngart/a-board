import { ListData } from "./types";

export const SetToLabel = (message?: string) => {
  if (!message) return "";
  return (
    message.charAt(0).toUpperCase() +
    message
      .replaceAll("_", " ")
      .replaceAll("-", " ")
      .slice(1)
      .toLocaleLowerCase()
  );
};
export const EnumToOptions = (enumObj: Record<string, string>): ListData[] => {
  return Object.keys(enumObj).map((key) => ({
    value: enumObj[key],
    label: SetToLabel(enumObj[key]),
  }));
};
