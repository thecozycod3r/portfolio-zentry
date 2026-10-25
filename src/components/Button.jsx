import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, href, download }) => {
  const Tag = href ? "a" : "button";
  const external = href && /^https?:/.test(href);

  return (
    <Tag
      id={id}
      href={href}
      download={download}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <span className="block translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </span>
        <span aria-hidden="true" className="absolute block translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </span>
      </span>

      {rightIcon}
    </Tag>
  );
};

export default Button;
