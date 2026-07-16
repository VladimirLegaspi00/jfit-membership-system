const pendingPayments = [
  {
    member: "Maria Santos",
    plan: "12 Months",
    amount: "₱9,200",
    reference: "GCASH-482193",
  },
  {
    member: "Joshua Ramirez",
    plan: "3 Months",
    amount: "₱3,200",
    reference: "GCASH-884271",
  },
  {
    member: "Angela Cruz",
    plan: "1 Month",
    amount: "₱1,400",
    reference: "BANK-129550",
  },
];

const recentInquiries = [
  {
    name: "Carlo Mendoza",
    details: "6 Months · Build muscle",
    time: "12 min ago",
  },
  {
    name: "Nicole Reyes",
    details: "3 Months · Lose weight",
    time: "35 min ago",
  },
  {
    name: "Mark Villanueva",
    details: "12 Months · General fitness",
    time: "1 hr ago",
  },
];

const expiringMemberships = [
  {
    name: "Jason Lim",
    details: "Expires Jul 18, 2026",
    days: "2 days",
  },
  {
    name: "Samantha Rivera",
    details: "Expires Jul 20, 2026",
    days: "4 days",
  },
  {
    name: "Adrian Cruz",
    details: "Expires Jul 22, 2026",
    days: "6 days",
  },
];

const monthlyCollections = [
  { month: "Feb", amount: 58400 },
  { month: "Mar", amount: 63200 },
  { month: "Apr", amount: 71800 },
  { month: "May", amount: 69500 },
  { month: "Jun", amount: 78300 },
  { month: "Jul", amount: 86400 },
];

const navigationItems = [
  "Overview",
  "Inquiries",
  "Pending Payments",
  "Members",
  "Renewals",
  "Reports",
];

const maximumCollection = Math.max(
  ...monthlyCollections.map((item) => item.amount),
);

function formatCurrency(value: number) {
  return `₱${value.toLocaleString("en-PH")}`;
}

function StatCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-sm font-medium text-neutral-500">{label}</p>

      <p className="mt-3 text-3xl font-black tracking-tight text-black">
        {value}
      </p>

      <p className="mt-2 text-xs font-bold text-neutral-600">{note}</p>
    </article>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f0] text-black">
      <div className="min-h-screen lg:grid lg:grid-cols-[260px_minmax(0,1fr)]">
        {/* Desktop sidebar */}
        <aside className="hidden min-h-screen flex-col border-r border-white/10 bg-[#090909] px-5 py-6 text-white lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[260px]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ffd21f]">
              JFIT
            </p>

            <h1 className="mt-3 text-2xl font-black">Staff Dashboard</h1>

            <p className="mt-2 max-w-[190px] text-sm leading-6 text-neutral-500">
              Membership operations and payment monitoring.
            </p>
          </div>

          <nav className="mt-10 space-y-2">
            {navigationItems.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
                  index === 0
                    ? "bg-[#ffd21f] text-black shadow-[0_8px_20px_rgba(255,210,31,0.16)]"
                    : "text-neutral-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-sm font-bold text-white">Demo Mode</p>

            <p className="mt-2 text-xs leading-5 text-neutral-500">
              Dashboard values currently use sample data. Real member records
              will be connected in the backend phase.
            </p>
          </div>
        </aside>

        {/* Main dashboard */}
        <section className="min-w-0 lg:col-start-2">
          {/* Mobile header */}
          <div className="border-b border-black/10 bg-black px-5 py-4 text-white lg:hidden">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ffd21f]">
                  JFIT
                </p>

                <p className="mt-1 font-black">Staff Dashboard</p>
              </div>

              <a
                href="/"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold transition hover:border-[#ffd21f] hover:text-[#ffd21f]"
              >
                View Website
              </a>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {navigationItems.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${
                    index === 0
                      ? "bg-[#ffd21f] text-black"
                      : "bg-white/10 text-neutral-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop header */}
          <header className="hidden border-b border-black/10 bg-white lg:block">
            <div className="mx-auto flex max-w-[1320px] items-center justify-between px-8 py-6 xl:px-10">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-neutral-500">
                  Overview
                </p>

                <h2 className="mt-1 text-3xl font-black tracking-tight">
                  Good morning, JFIT Staff.
                </h2>
              </div>

              <a
                href="/"
                className="rounded-full border border-black px-5 py-2.5 text-sm font-bold transition hover:bg-black hover:text-white"
              >
                View Website
              </a>
            </div>
          </header>

          <div className="mx-auto max-w-[1320px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8 xl:px-10">
            {/* Mobile heading */}
            <div className="mb-6 lg:hidden">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-neutral-500">
                Overview
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight">
                Good morning, JFIT Staff.
              </h2>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                label="Total Members"
                value="128"
                note="+8 this month"
              />

              <StatCard
                label="Active Memberships"
                value="104"
                note="81% of all members"
              />

              <StatCard
                label="Pending Payments"
                value="6"
                note="Needs verification"
              />

              <StatCard
                label="Expiring This Week"
                value="9"
                note="Follow-up recommended"
              />
            </div>

            {/* Payment review and monthly collection */}
            <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(290px,0.95fr)]">
              {/* Pending confirmations */}
              <section className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 sm:px-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-500">
                      Payment Review
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      Pending confirmations
                    </h3>
                  </div>

                  <button
                    type="button"
                    className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold transition hover:border-black hover:bg-black hover:text-white"
                  >
                    View all
                  </button>
                </div>

                {/* Desktop table */}
                <div className="hidden overflow-x-auto sm:block">
                  <table className="w-full min-w-[680px] text-left">
                    <thead>
                      <tr className="border-b border-black/10 bg-[#fafaf8] text-[11px] uppercase tracking-wider text-neutral-500">
                        <th className="px-6 py-4 font-bold">Member</th>
                        <th className="px-6 py-4 font-bold">Plan</th>
                        <th className="px-6 py-4 font-bold">Amount</th>
                        <th className="px-6 py-4 font-bold">Reference</th>
                        <th className="px-6 py-4 font-bold">Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {pendingPayments.map((payment) => (
                        <tr
                          key={payment.reference}
                          className="border-b border-black/10 last:border-b-0 hover:bg-[#fafaf7]"
                        >
                          <td className="px-6 py-5 text-sm font-black">
                            {payment.member}
                          </td>

                          <td className="px-6 py-5 text-sm text-neutral-600">
                            {payment.plan}
                          </td>

                          <td className="px-6 py-5 text-sm font-bold">
                            {payment.amount}
                          </td>

                          <td className="px-6 py-5 font-mono text-xs text-neutral-500">
                            {payment.reference}
                          </td>

                          <td className="px-6 py-5">
                            <span className="rounded-full bg-[#fff1ad] px-3 py-1.5 text-[10px] font-black uppercase text-[#765b00]">
                              Pending
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile payment cards */}
                <div className="space-y-3 p-4 sm:hidden">
                  {pendingPayments.map((payment) => (
                    <article
                      key={payment.reference}
                      className="rounded-xl border border-black/10 bg-[#fafaf8] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-black">{payment.member}</p>

                          <p className="mt-1 text-sm text-neutral-500">
                            {payment.plan}
                          </p>
                        </div>

                        <span className="rounded-full bg-[#fff1ad] px-3 py-1 text-[10px] font-black uppercase text-[#765b00]">
                          Pending
                        </span>
                      </div>

                      <div className="mt-4 flex items-end justify-between gap-3">
                        <p className="font-mono text-xs text-neutral-500">
                          {payment.reference}
                        </p>

                        <p className="font-black">{payment.amount}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Monthly collection summary */}
              <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-500">
                  Monthly Collection
                </p>

                <p className="mt-4 text-4xl font-black tracking-tight">
                  ₱86,400
                </p>

                <p className="mt-2 text-sm text-neutral-500">
                  Sample payment total for July 2026
                </p>

                <div className="mt-7 divide-y divide-black/10">
                  <div className="flex items-center justify-between py-4 first:pt-0">
                    <p className="text-sm text-neutral-600">
                      Membership payments
                    </p>

                    <p className="font-black">₱78,200</p>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <p className="text-sm text-neutral-600">Renewals</p>

                    <p className="font-black">₱6,800</p>
                  </div>

                  <div className="flex items-center justify-between py-4 last:pb-0">
                    <p className="text-sm text-neutral-600">Other fees</p>

                    <p className="font-black">₱1,400</p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-black p-4 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-bold text-neutral-400">
                      Monthly target progress
                    </p>

                    <p className="text-sm font-black text-[#ffd21f]">72%</p>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full w-[72%] rounded-full bg-[#ffd21f]" />
                  </div>
                </div>
              </section>
            </div>

            {/* Compact activity column and analytics */}
            <div className="mt-5 grid gap-5 xl:grid-cols-[0.82fr_1.38fr]">
              {/* Left compact column */}
              <div className="grid gap-5">
                {/* Recent inquiries */}
                <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-500">
                        Leads
                      </p>

                      <h3 className="mt-1 text-lg font-black">
                        Recent inquiries
                      </h3>
                    </div>

                    <span className="rounded-full bg-black px-3 py-1.5 text-[10px] font-bold text-white">
                      14 total
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    {recentInquiries.map((inquiry) => (
                      <article
                        key={inquiry.name}
                        className="rounded-xl border border-black/10 bg-[#fafaf8] px-4 py-3 transition hover:border-black/25"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-black">{inquiry.name}</p>

                            <p className="mt-1 text-xs text-neutral-500">
                              {inquiry.details}
                            </p>
                          </div>

                          <p className="shrink-0 text-[10px] text-neutral-400">
                            {inquiry.time}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Expiring memberships */}
                <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-500">
                        Renewals
                      </p>

                      <h3 className="mt-1 text-lg font-black">
                        Expiring memberships
                      </h3>
                    </div>

                    <span className="rounded-full bg-red-100 px-3 py-1.5 text-[10px] font-black text-red-700">
                      Action needed
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    {expiringMemberships.map((membership) => (
                      <article
                        key={membership.name}
                        className="rounded-xl border border-black/10 bg-[#fafaf8] px-4 py-3 transition hover:border-red-200"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-black">
                              {membership.name}
                            </p>

                            <p className="mt-1 text-xs text-neutral-500">
                              {membership.details}
                            </p>
                          </div>

                          <span className="shrink-0 rounded-full bg-red-100 px-3 py-1.5 text-[10px] font-black text-red-700">
                            {membership.days}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              {/* Analytics */}
              <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-500">
                      Business Analytics
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      Collection performance
                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      Monthly payment collections for the last six months.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f4f4f1] px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                      Growth
                    </p>

                    <p className="mt-1 text-lg font-black">+10.3%</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px]">
                  {/* Bar chart */}
                  <div className="min-w-0">
                    <div className="flex h-[240px] items-end gap-3 border-b border-black/10 px-1 sm:gap-5">
                      {monthlyCollections.map((item, index) => {
                        const barHeight =
                          (item.amount / maximumCollection) * 100;

                        const isCurrentMonth =
                          index === monthlyCollections.length - 1;

                        return (
                          <div
                            key={item.month}
                            className="flex h-full min-w-0 flex-1 flex-col items-center justify-end"
                          >
                            <p className="mb-2 text-[10px] font-bold text-neutral-500">
                              {formatCurrency(item.amount)}
                            </p>

                            <div className="flex h-[185px] w-full items-end justify-center">
                              <div
                                className={`w-full max-w-[52px] rounded-t-lg transition-all ${
                                  isCurrentMonth
                                    ? "bg-[#ffd21f]"
                                    : "bg-black"
                                }`}
                                style={{
                                  height: `${Math.max(barHeight, 15)}%`,
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-3 flex gap-3 px-1 sm:gap-5">
                      {monthlyCollections.map((item) => (
                        <p
                          key={item.month}
                          className="min-w-0 flex-1 text-center text-xs font-bold text-neutral-500"
                        >
                          {item.month}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Donut chart */}
                  <div className="rounded-2xl bg-[#f7f7f4] p-5">
                    <p className="text-sm font-black">
                      Membership distribution
                    </p>

                    <div className="mt-6 flex justify-center">
                      <div
                        className="relative h-36 w-36 rounded-full"
                        style={{
                          background:
                            "conic-gradient(#ffd21f 0% 81%, #111111 81% 88%, #d4d4d4 88% 100%)",
                        }}
                      >
                        <div className="absolute inset-[18px] flex flex-col items-center justify-center rounded-full bg-[#f7f7f4]">
                          <p className="text-3xl font-black">128</p>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                            Members
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd21f]" />

                          <p className="text-xs text-neutral-600">Active</p>
                        </div>

                        <p className="text-xs font-black">104</p>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-black" />

                          <p className="text-xs text-neutral-600">Expiring</p>
                        </div>

                        <p className="text-xs font-black">9</p>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />

                          <p className="text-xs text-neutral-600">Inactive</p>
                        </div>

                        <p className="text-xs font-black">15</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <footer className="mt-8 border-t border-black/10 py-5 text-center text-xs text-neutral-400">
              JFIT Membership System · Dashboard Demo
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}