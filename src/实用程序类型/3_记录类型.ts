/**
 * Record: 记录类型， 主要用于将一个类型的属性映射到另一个类型。
 */

interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

/**
 * 使用 ts 内置的 Record 属性，进行映射
 */
const nav1: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};

/**
 * 手写映射
 */
const nav2: { [P in Page]: PageInfo } = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};

nav1.about;
nav2.about;
