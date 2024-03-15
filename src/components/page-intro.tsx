import React, { PropsWithChildren } from "react";

export const PageIntroTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
      {children}
    </h1>
  );
};
export const PageIntroDescription: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  );
};

const PageIntro: React.FC<PropsWithChildren> = ({ children }) => {
  return <header className="max-w-2xl">{children}</header>;
};

export default PageIntro;
