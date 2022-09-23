import { TagName } from "@/types";

function createElement(tagName: TagName = "div", className: string = ""): HTMLElement {
  const element = document.createElement(tagName);

  if (className.length) {
    element.className = className;
  }

  return element;
}

export const p = (className: string = ""): HTMLElement => createElement("p", className);
export const div = (className: string = ""): HTMLElement => createElement("div", className);
export const section = (className: string = ""): HTMLElement => createElement("section", className);
export const article = (className: string = ""): HTMLElement => createElement("article", className);
