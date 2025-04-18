'use client';

import { useSession } from 'next-auth/react';
import { UserButton } from './UserButton';
import { SiweSignInButton } from './SiweSignInButton';

export const RightHeaderButton = () => {
  const { data: session } = useSession();

  if (!session || !session?.isVerified) {
    return <SiweSignInButton />;
  }

  return <UserButton />;
};
