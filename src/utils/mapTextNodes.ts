import { hyperscriptString } from "./hypescriptString";

export function mapTextNodes(children: any[]) {
  return children.map(child => typeof child === 'string' ? hyperscriptString(child) : child);
}