import * as React from "react";

export interface BadgeProps {
  baseColor: string;
  name: string;
}

export function Badge(props: BadgeProps) {
  const { baseColor, name } = props;
  return (
    <div
      style={{
        backgroundColor: baseColor,
      }}
    >
      {name}
    </div>
  );
}
