import { text } from "styles/theme/typography";

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
        fontSize: `${text.fontSize}`,
        lineHeight: `${text.lineHeight}`,
        borderRadius: "10px",
        padding: "2px 8px",
        color: "white",
      }}
    >
      {name}
    </div>
  );
}
