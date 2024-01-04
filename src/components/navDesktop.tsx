interface navProps {
  routes: { title: string; href: string }[];
}

export const NavDesktop = ({ routes }: navProps) => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm text-white w-full justify-evenly p-2 font-bold">
      {routes.map((route) => {
        const { href, title } = route;
        return (
          <li key={route.title}>
            <a
              href={href}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
