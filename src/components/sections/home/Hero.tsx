import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { heroCopy, heroSlides, heroStats } from "@/data/hero";
import { imageSizes } from "@/lib/images";

/**
 * Homepage hero.
 *
 * Editorial split: the claim and the proof row on the left, two photographs
 * of the actual product range on the right. No slider, no controls — a plain
 * page opening that reads straight into the sections below.
 */
export default function Hero() {
  const [primaryShot, secondaryShot] = heroSlides;

  return (
    <section className="ba-hero" aria-labelledby="hero-title">
      <Container className="ba-hero__inner">
        <div className="ba-hero__copy">
          <p className="ba-hero__kicker">{heroCopy.eyebrow}</p>

          <h1 id="hero-title" className="ba-hero__title">
            {heroCopy.title} <em>{heroCopy.titleAccent}</em>
          </h1>

          <p className="ba-hero__lead">{heroCopy.lead}</p>

          <div className="ba-hero__actions">
            <Link href={heroCopy.primaryHref} className="ba-hero__cta">
              {heroCopy.primaryLabel}
              <ArrowUpRight aria-hidden="true" size={14} />
            </Link>

            <Link href={heroCopy.secondaryHref} className="ba-hero__link">
              {heroCopy.secondaryLabel}
              <ArrowUpRight aria-hidden="true" size={13} />
            </Link>
          </div>

          <div className="ba-hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="ba-hero__stat">
                <span className="ba-hero__stat-value">{stat.value}</span>
                <span className="ba-hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {primaryShot ? (
          <div className="ba-hero__stage">
            <div className="ba-hero__frame ba-hero__frame--main">
              <Image
                src={primaryShot.image}
                alt={primaryShot.imageAlt}
                fill
                priority
                sizes={imageSizes.half}
                className="ba-hero__img"
                style={{ objectPosition: primaryShot.focus }}
              />
            </div>

            {secondaryShot ? (
              <div className="ba-hero__frame ba-hero__frame--inset">
                <Image
                  src={secondaryShot.image}
                  alt={secondaryShot.imageAlt}
                  fill
                  sizes={imageSizes.card}
                  className="ba-hero__img"
                  style={{ objectPosition: secondaryShot.focus }}
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
