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

const collectionBreakdown = [
  {
    label: "Membership payments",
    amount: "₱78,200",
  },
  {
    label: "Renewals",
    amount: "₱6,800",
  },
  {
    label: "Other fees",
    amount: "₱1,400",
  },
];

const membershipStatuses = [
  {
    label: "Active",
    value: 104,
    color: "bg-[#ffd21f]",
  },
  {
    label: "Expiring",
    value: 9,
    color: "bg-black",
  },
  {
    label: "Inactive",
    value: 15,
    color: "bg-neutral-300",
  },
];

const maximumCollection = Math.max(
  ...monthlyCollections.map((item) => item.amount),
);

const topPlanMembers = 42;
const totalMembers = 128;
const topPlanPercentage = (topPlanMembers / totalMembers) * 100;

function formatCurrency(value: number) {
  return `₱${value.toLocaleString("en-PH")}`;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
      {children}
    </p>
  );
}

function StatCard({
  label,
  value,
  note,
  highlighted = false,
}: {
  label: string;
  value: string;
  note: string;
  highlighted?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border px-5 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] ${
        highlighted
          ? "border-[#e5c849] bg-[#fff8d6]"
          : "border-black/[0.08] bg-white"
      }`}
    >
      <p
        className={`text-xs font-medium ${
          highlighted ? "text-[#776315]" : "text-neutral-500"
        }`}
      >
        {label}
      </p>

      <p className="mt-2 text-[30px] font-extrabold leading-none tracking-[-0.045em]">
        {value}
      </p>

      <p
        className={`mt-2 text-[11px] font-semibold ${
          highlighted ? "text-[#776315]" : "text-neutral-600"
        }`}
      >
        {note}
      </p>
    </article>
  );
}

function MovementMetric({
  label,
  value,
  note,
  type = "default",
}: {
  label: string;
  value: string;
  note: string;
  type?: "default" | "positive" | "warning";
}) {
  const styles = {
    default: {
      card: "border-black/[0.07] bg-[#fafaf8]",
      value: "text-black",
    },
    positive: {
      card: "border-emerald-200 bg-emerald-50/60",
      value: "text-emerald-700",
    },
    warning: {
      card: "border-red-200 bg-red-50/60",
      value: "text-red-700",
    },
  };

  return (
    <article
      className={`flex min-h-[104px] min-w-0 flex-col rounded-xl border px-3.5 py-3 ${styles[type].card}`}
    >
      <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-neutral-500">
        {label}
      </p>

      <p
        className={`mt-1.5 text-[21px] font-extrabold leading-none tracking-[-0.04em] ${styles[type].value}`}
      >
        {value}
      </p>

      <p className="mt-auto pt-2 text-[8px] leading-4 text-neutral-500">
        {note}
      </p>
    </article>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#111111]">
      <div className="min-h-screen lg:grid lg:grid-cols-[230px_minmax(0,1fr)]">
        {/* Desktop sidebar */}
        <aside className="hidden h-screen flex-col border-r border-white/10 bg-[#090909] px-4 py-5 text-white lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[230px]">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#ffd21f]">
              JFIT
            </p>

            <h1 className="mt-2.5 text-[21px] font-extrabold tracking-[-0.035em]">
              Staff Dashboard
            </h1>

            <p className="mt-2 max-w-[185px] text-[10px] leading-[17px] text-neutral-500">
              Membership operations and payment monitoring.
            </p>
          </div>

          <nav className="mt-7 space-y-1">
            {navigationItems.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`w-full rounded-xl px-4 py-2.5 text-left text-[11px] font-semibold transition ${
                  index === 0
                    ? "bg-[#ffd21f] text-black shadow-[0_8px_20px_rgba(255,210,31,0.16)]"
                    : "text-neutral-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
            <p className="text-[11px] font-bold">Demo Mode</p>

            <p className="mt-1.5 text-[9px] leading-[15px] text-neutral-500">
              Dashboard values currently use sample data. Real member records
              will be connected during the backend phase.
            </p>
          </div>
        </aside>

        {/* Main dashboard */}
        <section className="min-w-0 lg:col-start-2">
          {/* Mobile header */}
          <div className="border-b border-white/10 bg-black px-4 py-4 text-white lg:hidden">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#ffd21f]">
                  JFIT
                </p>

                <p className="mt-1 font-bold">Staff Dashboard</p>
              </div>

              <a
                href="/"
                className="rounded-full border border-white/25 px-4 py-2 text-xs font-semibold"
              >
                View Website
              </a>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {navigationItems.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold ${
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
          <header className="hidden border-b border-black/[0.07] bg-white lg:block">
            <div className="mx-auto flex min-h-[72px] w-full max-w-[1450px] items-center justify-between px-6 xl:px-8">
              <div>
                <SectionLabel>Overview</SectionLabel>

                <h2 className="mt-1 text-[24px] font-extrabold tracking-[-0.04em]">
                  Good morning, JFIT Staff.
                </h2>
              </div>

              <a
                href="/"
                className="rounded-full border border-black/50 px-5 py-2.5 text-[11px] font-bold transition hover:bg-black hover:text-white"
              >
                View Website
              </a>
            </div>
          </header>

          {/* Dashboard content */}
          <div className="mx-auto w-full max-w-[1450px] px-4 py-5 sm:px-6 lg:px-6 lg:py-5 xl:px-8">
            {/* Mobile heading */}
            <div className="mb-5 lg:hidden">
              <SectionLabel>Overview</SectionLabel>

              <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.04em]">
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
                highlighted
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

            {/* Payments and collection */}
            <div className="mt-4 grid items-start gap-4 xl:grid-cols-[minmax(0,2fr)_350px]">
              {/* Pending confirmations */}
              <section className="self-start overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center justify-between border-b border-black/[0.07] px-5 py-4">
                  <div>
                    <SectionLabel>Payment Review</SectionLabel>

                    <h3 className="mt-1 text-[17px] font-bold tracking-[-0.025em]">
                      Pending confirmations
                    </h3>
                  </div>

                  <button
                    type="button"
                    className="rounded-full border border-black/15 px-4 py-2 text-[10px] font-bold transition hover:bg-black hover:text-white"
                  >
                    View all
                  </button>
                </div>

                {/* Desktop payment table */}
                <div className="hidden overflow-x-auto sm:block">
                  <table className="w-full min-w-[680px] table-fixed text-left">
                    <thead>
                      <tr className="border-b border-black/[0.07] bg-[#fafaf8] text-[9px] uppercase tracking-[0.09em] text-neutral-500">
                        <th className="w-[27%] px-5 py-3 font-bold">
                          Member
                        </th>

                        <th className="w-[18%] px-4 py-3 font-bold">
                          Plan
                        </th>

                        <th className="w-[16%] px-4 py-3 font-bold">
                          Amount
                        </th>

                        <th className="w-[23%] px-4 py-3 font-bold">
                          Reference
                        </th>

                        <th className="w-[16%] px-4 py-3 font-bold">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {pendingPayments.map((payment) => (
                        <tr
                          key={payment.reference}
                          className="border-b border-black/[0.07] last:border-b-0 hover:bg-[#fafaf8]"
                        >
                          <td className="px-5 py-4 text-[12px] font-bold">
                            {payment.member}
                          </td>

                          <td className="px-4 py-4 text-[11px] text-neutral-600">
                            {payment.plan}
                          </td>

                          <td className="px-4 py-4 text-[11px] font-bold">
                            {payment.amount}
                          </td>

                          <td className="px-4 py-4 font-mono text-[9px] text-neutral-500">
                            {payment.reference}
                          </td>

                          <td className="px-4 py-4">
                            <span className="rounded-full bg-[#fff0a8] px-3 py-1.5 text-[8px] font-extrabold uppercase text-[#715700]">
                              Pending
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile payment cards */}
                <div className="space-y-2 p-3 sm:hidden">
                  {pendingPayments.map((payment) => (
                    <article
                      key={payment.reference}
                      className="rounded-xl border border-black/[0.08] bg-[#fafaf8] p-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-bold">
                            {payment.member}
                          </p>

                          <p className="mt-1 text-xs text-neutral-500">
                            {payment.plan}
                          </p>
                        </div>

                        <span className="rounded-full bg-[#fff0a8] px-2.5 py-1 text-[8px] font-extrabold uppercase text-[#715700]">
                          Pending
                        </span>
                      </div>

                      <div className="mt-3 flex items-end justify-between gap-3">
                        <p className="font-mono text-[10px] text-neutral-500">
                          {payment.reference}
                        </p>

                        <p className="text-sm font-bold">
                          {payment.amount}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Monthly collection */}
              <section className="self-start rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <SectionLabel>Monthly Collection</SectionLabel>

                    <p className="mt-2 text-[32px] font-extrabold leading-none tracking-[-0.045em]">
                      ₱86,400
                    </p>

                    <p className="mt-2 text-[10px] text-neutral-500">
                      Sample payment total for July 2026
                    </p>
                  </div>

                  <span className="rounded-full bg-[#f4f4f1] px-3 py-1.5 text-[9px] font-bold text-neutral-600">
                    July
                  </span>
                </div>

                <div className="mt-5 divide-y divide-black/[0.07]">
                  {collectionBreakdown.map((item, index) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between py-3 ${
                        index === 0 ? "pt-0" : ""
                      } ${
                        index === collectionBreakdown.length - 1
                          ? "pb-0"
                          : ""
                      }`}
                    >
                      <p className="text-[11px] text-neutral-600">
                        {item.label}
                      </p>

                      <p className="text-[11px] font-bold">
                        {item.amount}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-black px-4 py-3 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[10px] font-medium text-neutral-400">
                      Monthly target progress
                    </p>

                    <p className="text-[11px] font-bold text-[#ffd21f]">
                      72%
                    </p>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full w-[72%] rounded-full bg-[#ffd21f]" />
                  </div>
                </div>
              </section>
            </div>

            {/* Activity and analytics */}
            <div className="mt-4 grid items-start gap-4 xl:grid-cols-[390px_minmax(0,1fr)]">
              {/* Left column */}
              <div className="grid gap-4">
                {/* Recent inquiries */}
                <section className="self-start rounded-2xl border border-black/[0.08] bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <SectionLabel>Leads</SectionLabel>

                      <h3 className="mt-1 text-[16px] font-bold tracking-[-0.025em]">
                        Recent inquiries
                      </h3>
                    </div>

                    <span className="rounded-full bg-black px-3 py-1.5 text-[9px] font-bold text-white">
                      14 total
                    </span>
                  </div>

                  <div className="mt-3 space-y-2">
                    {recentInquiries.map((inquiry) => (
                      <article
                        key={inquiry.name}
                        className="flex items-center justify-between gap-3 rounded-xl border border-black/[0.07] bg-[#fafaf8] px-4 py-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-[11px] font-bold">
                            {inquiry.name}
                          </p>

                          <p className="mt-1 truncate text-[9px] text-neutral-500">
                            {inquiry.details}
                          </p>
                        </div>

                        <p className="shrink-0 text-[9px] text-neutral-400">
                          {inquiry.time}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Expiring memberships */}
                <section className="self-start rounded-2xl border border-black/[0.08] bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <SectionLabel>Renewals</SectionLabel>

                      <h3 className="mt-1 text-[16px] font-bold tracking-[-0.025em]">
                        Expiring memberships
                      </h3>
                    </div>

                    <span className="rounded-full bg-red-100 px-3 py-1.5 text-[9px] font-bold text-red-700">
                      Action needed
                    </span>
                  </div>

                  <div className="mt-3 space-y-2">
                    {expiringMemberships.map((membership) => (
                      <article
                        key={membership.name}
                        className="flex items-center justify-between gap-3 rounded-xl border border-black/[0.07] bg-[#fafaf8] px-4 py-3.5"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-[11px] font-bold">
                            {membership.name}
                          </p>

                          <p className="mt-1 truncate text-[9px] text-neutral-500">
                            {membership.details}
                          </p>
                        </div>

                        <span className="shrink-0 rounded-full bg-red-100 px-3 py-1.5 text-[9px] font-bold text-red-700">
                          {membership.days}
                        </span>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right column */}
              <div className="grid gap-4">
                {/* Business analytics */}
                <section className="self-start rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <SectionLabel>Business Analytics</SectionLabel>

                      <h3 className="mt-1 text-[18px] font-bold tracking-[-0.025em]">
                        Collection performance
                      </h3>

                      <p className="mt-1 text-[11px] text-neutral-500">
                        Monthly payment collections for the last six months.
                      </p>
                    </div>

                    <div className="self-start rounded-xl bg-[#f4f4f1] px-4 py-3">
                      <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-neutral-500">
                        Growth
                      </p>

                      <p className="mt-1 text-[16px] font-extrabold">
                        +10.3%
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_200px]">
                    {/* Bar chart */}
                    <div className="min-w-0">
                      <div className="flex h-[205px] items-end gap-3 border-b border-black/[0.08] px-1 sm:gap-5">
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
                              <p className="mb-2 text-center text-[8px] font-semibold text-neutral-500">
                                {formatCurrency(item.amount)}
                              </p>

                              <div className="flex h-[150px] w-full items-end justify-center">
                                <div
                                  className={`w-full max-w-[50px] rounded-t-lg transition-all ${
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

                      <div className="mt-2 flex gap-3 px-1 sm:gap-5">
                        {monthlyCollections.map((item) => (
                          <p
                            key={item.month}
                            className="min-w-0 flex-1 text-center text-[9px] font-semibold text-neutral-500"
                          >
                            {item.month}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Donut chart */}
                    <div className="rounded-2xl bg-[#f7f7f4] p-4">
                      <p className="text-[11px] font-bold">
                        Membership distribution
                      </p>

                      <div className="mt-3 flex justify-center">
                        <div
                          className="relative h-28 w-28 rounded-full"
                          style={{
                            background:
                              "conic-gradient(#ffd21f 0% 81%, #111111 81% 88%, #d4d4d4 88% 100%)",
                          }}
                        >
                          <div className="absolute inset-[14px] flex flex-col items-center justify-center rounded-full bg-[#f7f7f4]">
                            <p className="text-[24px] font-extrabold leading-none tracking-[-0.045em]">
                              128
                            </p>

                            <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.1em] text-neutral-500">
                              Members
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        {membershipStatuses.map((status) => (
                          <div
                            key={status.label}
                            className="flex items-center justify-between gap-3"
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={`h-2 w-2 rounded-full ${status.color}`}
                              />

                              <p className="text-[9px] text-neutral-600">
                                {status.label}
                              </p>
                            </div>

                            <p className="text-[9px] font-bold">
                              {status.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Compact membership movement */}
                <section className="self-start rounded-2xl border border-black/[0.08] bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <SectionLabel>Membership Movement</SectionLabel>

                      <h3 className="mt-1 text-[16px] font-bold tracking-[-0.025em]">
                        Member activity this month
                      </h3>

                      <p className="mt-1 text-[10px] text-neutral-500">
                        Registrations, renewals, expirations, and net growth.
                      </p>
                    </div>

                    <span className="self-start rounded-full bg-[#f4f4f1] px-3 py-1.5 text-[9px] font-bold text-neutral-600">
                      July 2026
                    </span>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(4,minmax(0,1fr))_minmax(150px,1.1fr)]">
                    <MovementMetric
                      label="New members"
                      value="8"
                      note="+2 compared with June"
                    />

                    <MovementMetric
                      label="Renewals"
                      value="17"
                      note="74% renewal completion"
                    />

                    <MovementMetric
                      label="Expired"
                      value="5"
                      note="Follow-up recommended"
                      type="warning"
                    />

                    <MovementMetric
                      label="Net growth"
                      value="+3"
                      note="Positive monthly movement"
                      type="positive"
                    />

                    {/* Top membership plan */}
                    <article className="flex min-h-[104px] min-w-0 flex-col rounded-xl border border-[#ead36a] bg-[#fff8d6] px-3.5 py-3">
                      <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#776315]">
                        Top plan
                      </p>

                      <p className="mt-1.5 text-[18px] font-extrabold leading-none tracking-[-0.035em]">
                        3 Months
                      </p>

                      <div className="mt-auto pt-2">
                        <div className="flex items-center justify-between gap-2">
                          <p className="min-w-0 truncate text-[8px] text-[#776315]">
                            42 of 128 members
                          </p>

                          <p className="shrink-0 text-[8px] font-bold text-[#776315]">
                            32.8%
                          </p>
                        </div>

                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-black/10">
                          <div
                            className="h-full rounded-full bg-[#ffd21f]"
                            style={{
                              width: `${topPlanPercentage}%`,
                            }}
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </section>
              </div>
            </div>

            <div className="h-6" />
          </div>
        </section>
      </div>
    </main>
  );
}