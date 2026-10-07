type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className={`eyebrow ${dark ? "text-[#f2eee5]/65" : ""}`}>
          {eyebrow}
        </p>
      )}

      <h2
        className={`display display-md ${
          dark ? "text-[#f2eee5]" : "text-[#1d2924]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`body-large ${
            dark ? "text-[#f2eee5]/75" : "text-[#59645e]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}