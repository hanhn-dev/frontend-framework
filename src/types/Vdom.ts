export type VirtualDom = {
  type: "element" | "text" | "fragment";
  tag?: string;
  props?: Record<string, any>;
  children?: VirtualDom[];
  key?: string | number;
}