import type { Props } from "../types/Props";
import { DOM_TYPES } from "./constants";

export function hyperscript(tag: string, props: Props, children: any[]) {
  return {
    tag,
    props,
    children,
    type: DOM_TYPES.ELEMENT
  }
}