import type { VirtualDom } from "../types/Vdom";
import { DOM_TYPES } from "./constants";
import { mapTextNodes } from "./mapTextNodes";
import { withoutNulls } from "./withoutNulls";

export function hyperscriptFragment(children: any[]): VirtualDom {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNulls(children))
  }
}