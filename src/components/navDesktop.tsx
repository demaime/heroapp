import Link from "next/link";
import { useRouter } from "next/router";

export const NavDesktop = () => {
  const routes = [
    {
      title: "Search",
      href: `/`,
    },

    {
      title: "My Team",
      href: `/team`,
    },
    {
      title: "About",
      href: `/about`,
    },
  ];

  const router = useRouter();

  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm text-white w-full justify-evenly p-2 font-bold">
      {routes.map((route) => {
        const { href, title } = route;
        return (
          <li key={route.title}>
            <Link
              href={{
                pathname: route.href,
                query: router.query,
              }}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
