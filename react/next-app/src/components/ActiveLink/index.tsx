import { useRouter } from 'next/router';
import { MouseEvent, MouseEventHandler, ReactNode } from 'react';

function ActiveLink({ children, href }: { children: ReactNode; href: string }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black'
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
