import type { ElementType, ReactNode } from "react";

type AnnotationProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export default function Annotation({
  children,
  as: Tag = "p",
  className,
}: AnnotationProps) {
  const classes = className ? `annotation ${className}` : "annotation";
  return <Tag className={classes}>{children}</Tag>;
}
