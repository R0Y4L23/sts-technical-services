import { Drawer } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
const DrawerComponent = ({ setOpen, open }) => {

  const router = useRouter()

  const active = "text-xl font-bold text-center"
  const inactive = "text-xl text-center"

  return (
    <Drawer placement="right" onClose={() => { setOpen(false) }} open={open}>
      <div className='flex flex-col justify-center items-center gap-5'>
        <Link href={"/"}><p className={router.pathname == "/" ? active : inactive} onClick={() => { setOpen(false) }}>Home</p></Link>
        <Link href={"/services"}><p className={router.pathname == "/services" || router.pathname.indexOf("/services") != -1 ? active : inactive} onClick={() => { setOpen(false) }}>Services</p></Link>
        <Link href={"/projects"}><p className={router.pathname == "/projects" || router.pathname.indexOf("/projects") != -1 || router.pathname.indexOf("/currentProjects") != -1 ? active : inactive} onClick={() => { setOpen(false) }}>Projects</p></Link>
        <Link href={"/clients"}><p className={router.pathname == "/clients" ? active : inactive} onClick={() => { setOpen(false) }}>Clients</p></Link>
        <Link href={"/contact"}><p className={router.pathname == "/contact" ? active : inactive} onClick={() => { setOpen(false) }}>Contact</p></Link>
        <Link href={"/about"}><p className={router.pathname == "/about" ? active : inactive} onClick={() => { setOpen(false) }}>About</p></Link>
      </div>
    </Drawer>
  );
};
export default DrawerComponent;