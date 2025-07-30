import { DOM_TYPES } from "./constants";

export function hyperscriptString(str: string) {
  return {
    type: DOM_TYPES.TEXT,
    value: str
  }
}