import Link from "next/link";

interface ItemMenuProps {
  url: string;
  title: string;
  hasDropdown?: boolean;
}

export function ItemMenu({ url, title, hasDropdown }: ItemMenuProps) {
  return (
    <Link
      href={url}
      className="flex items-center gap-16 font-semibold text-gray-600
      hover:opacity-50 transition-colors"
    >
      {title} {hasDropdown}
    </Link>
  );
}
