import { DOM_TYPES } from "./constants";
import { mapTextNodes } from "./mapTextNodes";
import { withoutNulls } from "./withoutNulls";

export function hyperscriptFragment(children: any[]) {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNulls(children))
  }
}