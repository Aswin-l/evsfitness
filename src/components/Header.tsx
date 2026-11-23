 "use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [{href:"/",label:"Home"},{href:"/programs",label:"Programs"},{href:"/membership",label:"Membership"},{href:"/gallery",label:"Gallery"},{href:"/contact",label:"Contact"}];
export default function Header(){
 const [open,setOpen]=useState(false);
 return <header className="site-header"><Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">EV<span>S</span></span><span className="brand-copy">FITNESS STUDIO<small>TINDIVANAM · EST. FOR YOUR GOALS</small></span></Link>
 <button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 <nav className={open?"nav-links open":"nav-links"}>{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}<Link className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>Start training <ArrowUpRight size={16}/></Link></nav></header>
}