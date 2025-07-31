import type { Props } from "../types/Props";
import type { VirtualDom } from "../types/Vdom";
import { DOM_TYPES } from "./constants";

export function hyperscript(tag: string, props: Props, children: any[]): VirtualDom {
  return {
    tag,
    props,
    children,
    type: DOM_TYPES.ELEMENT
  }
}