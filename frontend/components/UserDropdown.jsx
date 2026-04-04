"use client";

import { UserButton } from '@clerk/nextjs';
import { UtensilsCrossed, Cookie } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function UserDropdown() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially on client-side mount
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <UserButton afterSignOutUrl="/">
      <UserButton.MenuItems>
        {isMobile && (
          <UserButton.Link
            label="Recipes"
            labelIcon={<Cookie size={15} />}
            href="/recipes"
          />
        )}
        {isMobile && (
          <UserButton.Link
            label="Pantry"
            labelIcon={<UtensilsCrossed size={15} />}
            href="/pantry"
          />
        )}
      </UserButton.MenuItems>
    </UserButton>
  );
}
