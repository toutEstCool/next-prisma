import { IconType } from "react-icons";

export interface IPropsCategoryBox {
  key: string;
  label: string;
  description?: string;
  icon: IconType;
  selected?: boolean;
}