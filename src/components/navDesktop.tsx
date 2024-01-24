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
        const { title } = route;
        return (
          <li key={route.title}>
            <Link
              className="flex items-center pb-1 underline-hover"
              href={{
                pathname: route.href,
                query: router.query,
              }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
