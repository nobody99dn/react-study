import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  [props: string]: any;
}

export const Typography: React.FC<TypographyProps> = ({ children, ...props }) => (<div>{children}</div>)
  
