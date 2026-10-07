import Link from "next/link";

type CTAProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTA({
  eyebrow = "Private Visits",
  title,
  description,
  buttonText = "Begin a Conversation",
  buttonHref = "/contact",
}: CTAProps) {
  return (
    <section className="section cta">
      <div className="container">
        <div className="cta__inner">
          <div>
            <span className="eyebrow">{eyebrow}</span>

            <h2 className="cta__title">{title}</h2>
          </div>

          <div className="cta__action">
            {description && (
              <p className="body-large">{description}</p>
            )}

            <Link
              href={buttonHref}
              className="button button--light"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}