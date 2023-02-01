import Link from "next/link";
import { useRouter } from "next/router";

const menuItems  = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' }
]

const MainNavbar = () => {
  const router = useRouter();
  return (
    <div className="hidden lg:flex lg:gap-x-12">11
      {menuItems.map(item => (
        <Link 
          key={item.path} 
          href={item.path} 
          className={`${router.pathname === item.path ? "underline " : ""} text-sm font-semibold leading-6 text-gray-900`}
        >
          {item.title}
        </Link>
    ))} 
    </div>
  )
}

const MobileNavbar = () => {
  const router = useRouter();
  return (
    <div className="space-y-2 py-6">22
      {menuItems.map(item => (
        <Link 
          key={item.path} 
          href={item.path} 
          className={`${router.pathname === item.path ? "underline " : ""} -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10`}
        >
          {item.title}
        </Link>
    ))} 
    </div>
  )
}

export { MainNavbar, MobileNavbar }
