export function SectionEyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={light ? "kicker kicker--light" : "kicker"}>{children}</p>;
}
