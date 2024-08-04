import type { PlateLeafProps } from "@udecode/plate-common";

import { PlateLeaf } from "@udecode/plate-common";

import { cn } from "~/utils";

const BoldLeaf = ({ children, className, ref, ...props }: PlateLeafProps) => (
  <PlateLeaf
    asChild
    className={cn("text-primary", className)}
    ref={ref}
    {...props}
  >
    <strong>{children}</strong>
  </PlateLeaf>
);

BoldLeaf.displayName = "BoldLeaf";

export { BoldLeaf };
