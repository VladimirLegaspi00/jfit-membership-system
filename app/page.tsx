import InquiryForm from "./components/InquiryForm";
import Image from "next/image";

const membershipPlans = [
  {
    name: "1 Month",
    price: "₱1,400",
    description: "Flexible monthly access",
    featured: false,
  },
  {
    name: "3 Months",
    price: "₱3,200",
    description: "Great for building consistency",
    featured: false,
  },
  {
    name: "6 Months",
    price: "₱5,200",
    description: "Long-term training value",
    featured: false,
  },
  {
    name: "12 Months",
    price: "₱9,200",
    description: "Best value for committed members",
    featured: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        {/* Larger JFIT logo */}
        <a
          href="#home"
          className="relative block h-20 w-44 shrink-0 sm:h-24 sm:w-56"
        >
          <Image
            src="/jfit-logo.png"
            alt="JFIT Fitness Master logo"
            fill
            priority
            sizes="224px"
            className="object-contain object-left"
          />
        </a>

        <div className="hidden items-center gap-8 text-base text-zinc-300 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#facilities" className="transition hover:text-white">
            Facilities
          </a>

          <a href="#plans" className="transition hover:text-white">
            Membership Plans
          </a>

          <a href="#location" className="transition hover:text-white">
            Location
          </a>
        </div>

        <button
          type="button"
          className="shrink-0 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium transition hover:border-white"
        >
          Staff Login
        </button>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            Stronger every day
          </p>

          <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">
              Build <span className="text-amber-300">Strength.</span>
            </span>

            <span className="mt-4 block">
              Build <span className="text-amber-300">Confidence.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Train in a supportive gym environment with flexible membership
            plans designed for every fitness level.
          </p>

          <div className="mt-7 flex items-center gap-3 text-zinc-300">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700">
              📍
            </span>

            <div>
              <p className="text-sm text-zinc-500">Visit us at</p>
              <p className="font-semibold">Mamatid, Cabuyao, Laguna</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#plans"
              className="rounded-full bg-white px-7 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              View Plans
            </a>

            <a
              href="#join"
              className="rounded-full border border-zinc-700 px-7 py-3 font-semibold transition hover:border-white"
            >
              Join JFIT
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-10 border-t border-zinc-800 pt-8">
            <div>
              <p className="text-2xl font-bold">2 Floors</p>
              <p className="mt-1 text-sm text-zinc-500">
                Training facilities
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">4 Plans</p>
              <p className="mt-1 text-sm text-zinc-500">
                Membership options
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">Full Access</p>
              <p className="mt-1 text-sm text-zinc-500">
                Included in every plan
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900 shadow-2xl sm:min-h-[560px]">
          <Image
            src="/gym/second-floor-cardio.jpg"
            alt="JFIT bright cardio and training area"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              JFIT Fitness Master
            </p>

            <p className="mt-2 text-xl font-bold">
              Train in a bright and modern fitness space.
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Enjoy cardio equipment, strength machines, and complete access
              to both training floors.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-y border-zinc-800 bg-zinc-900/40"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              About JFIT
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A place to become stronger.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-zinc-400">
              JFIT provides an accessible and supportive training environment
              for beginners, regular gym members, and committed fitness
              enthusiasts.
            </p>

            <p className="mt-4 leading-8 text-zinc-400">
              Every membership plan grants full access to both training floors
              and the available gym facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Our Facilities
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to train.
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Explore spacious areas equipped for lower-body training, strength
            workouts, cardio, and full-body exercise.
          </p>

          {/* Cleaner access information */}
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-amber-300/30 bg-amber-300/[0.06] px-5 py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-zinc-950">
              ✓
            </span>

            <p className="text-sm font-semibold text-zinc-200">
              Every plan includes full access to both training floors.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* First-floor leg area */}
          <figure className="group relative min-h-[430px] overflow-hidden rounded-3xl border border-zinc-800 lg:col-span-7 lg:min-h-[620px]">
            <Image
              src="/gym/first-floor.jpg"
              alt="JFIT first floor dedicated leg training area"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <figcaption className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xl font-bold">
                First Floor — Leg Training Area
              </p>

              <p className="mt-1 text-sm leading-6 text-zinc-300">
                Dedicated lower-body equipment for complete and focused leg
                workouts.
              </p>
            </figcaption>
          </figure>

          <div className="grid gap-5 lg:col-span-5">
            {/* Strength equipment */}
            <figure className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-zinc-800">
              <Image
                src="/gym/second-floor-strength.jpg"
                alt="JFIT strength training equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-bold">Strength Equipment</p>

                <p className="mt-1 text-sm text-zinc-300">
                  Machines for focused upper-body and full-body workouts.
                </p>
              </figcaption>
            </figure>

            {/* Second floor */}
            <figure className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-zinc-800">
              <Image
                src="/gym/second-floor-mezzanine.jpg"
                alt="JFIT second floor training area"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-bold">
                  Second Floor Training Area
                </p>

                <p className="mt-1 text-sm leading-6 text-zinc-300">
                  Additional machines and space for a complete training
                  experience.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Membership plans */}
      <section
        id="plans"
        className="border-y border-zinc-800 bg-zinc-900/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Membership
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Choose your plan.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              All membership plans include full access to the gym facilities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {membershipPlans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex min-h-[365px] flex-col rounded-3xl border p-7 transition hover:-translate-y-1 ${
                  plan.featured
                    ? "border-amber-300/70 bg-amber-300/[0.06] shadow-[0_0_35px_rgba(252,211,77,0.08)]"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-600"
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-wide text-zinc-950">
                    Best Value
                  </span>
                )}

                <p className="text-lg font-semibold">{plan.name}</p>

                <p className="mt-5 text-4xl font-black tracking-tight">
                  {plan.price}
                </p>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {plan.description}
                </p>

                <div className="mt-6 border-t border-zinc-800 pt-5">
                  <p className="text-sm leading-6 text-zinc-300">
                    ✓ Full gym facility access
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href="#join"
                    className={`block rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                      plan.featured
                        ? "bg-amber-300 text-zinc-950 hover:bg-amber-200"
                        : "bg-white text-zinc-950 hover:bg-zinc-200"
                    }`}
                  >
                    Choose Plan
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Location
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Train with us in Cabuyao.
            </h2>

            <p className="mt-5 text-lg text-zinc-400">
              Mamatid, Cabuyao, Laguna
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
            <p className="text-sm text-zinc-500">Gym address</p>

            <p className="mt-2 text-xl font-semibold">
              Mamatid, Cabuyao, Laguna
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              The complete street address, operating hours, contact number, and
              Google Maps link can be added once confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* Join */}
      {/* Inquiry */}
<section
  id="join"
  className="border-t border-zinc-800 bg-zinc-900/40"
>
  <div className="mx-auto max-w-3xl px-6 py-24">
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
        Start today
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Send us an inquiry.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        Interested in joining JFIT? Fill out the form and we’ll contact you
        regarding membership plans and other gym inquiries.
      </p>
    </div>

    <InquiryForm />
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 JFIT Fitness Master. All rights reserved.</p>
          <p>Mamatid, Cabuyao, Laguna</p>
        </div>
      </footer>
    </main>
  );
}