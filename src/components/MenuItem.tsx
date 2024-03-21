import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  address: string;
  Icon: React.FC<{ className: string }>;
}

const MenuItem = ({ title, address, Icon }: Props) => {
  return (
    <Link href={address} className="hover:text-amber-400">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
