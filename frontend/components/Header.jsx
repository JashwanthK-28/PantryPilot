"use client";
import React from 'react';
import { useUser } from '@clerk/nextjs';
import UserDropdown from './UserDropdown';
import Link from 'next/link';
import Image from 'next/image';
import { UtensilsCrossed, Cookie } from 'lucide-react';

const Header = () => {
  const { user } = useUser();
  return (
    <header className="flex justify-between items-center py-5 px-8 border-b border-gray-100 bg-white dark:bg-zinc-950 dark:border-zinc-800 shadow-sm">
      <Link href={user ? "/dashboard" : "/"} className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
          PantryPilot
        </span>
      </Link>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
        <Link href="/recipes" className="hover:text-orange-600 transition-colors flex gap-1.5 items-center">
        <Cookie size={18} />
          Recipes
        </Link>
        <Link href="/pantry"  className="hover:text-orange-600 transition-colors flex gap-1.5 items-center">
        <UtensilsCrossed size={18} />
          Pantry
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        {!user ? (
          <>
            <Link href="/sign-in">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium px-4 py-2 transition-colors">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <UserDropdown />
        )}
      </div>
    </header>
  );
};

export default Header;