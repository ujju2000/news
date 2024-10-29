'use client'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Moon } from 'lucide-react';
import {useProvider} from '@/app/Provider';

export function Header() {
  
  const  {data , setData , setLoading } = useProvider();
  const handleClick = async (category) => {
    setLoading(true);
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=${process.env.API_KEY}`)
    const res = await response.json();

    setData(res.articles);
    setLoading(false);
  }

  return (
    <div className = 'my-10'>
      <Menubar className = 'p-4 s'>
        <MenubarMenu>

        <MenubarTrigger onClick = {() => handleClick('sample')}>Explore</MenubarTrigger>
        <MenubarTrigger onClick = {() => handleClick('business')}>Business</MenubarTrigger>
        <MenubarTrigger onClick = {() => handleClick('sports')}>Sports</MenubarTrigger>
        <MenubarTrigger onClick = {() => handleClick('science')}>Science</MenubarTrigger>
        <MenubarTrigger onClick = {() => handleClick('science')}>Science</MenubarTrigger>
        <MenubarTrigger onClick = {() => handleClick('technology')}>Technology </MenubarTrigger>
        
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
