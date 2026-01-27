import NavbarLogo from './NavbarLogo';
import LinkItem from '../ui/LinkItem';
import Button from '../ui/Button';

export default function Navbar() {
    return (
        <>
            <div className="w-full flex items-center py-7.5 px-35 bg-[#FFFFFF33]  fixed">
                <NavbarLogo />
                <div className="nav-links flex items-center gap-10 mr-auto">
                    <LinkItem to={"/"}>home</LinkItem>
                    <LinkItem to={"books"}>books</LinkItem>
                    <LinkItem to={"about"}>about us</LinkItem>
                </div>
                <div className="nav-btns flex items-center gap-3">
                    <Button width={"fit"} isMainBtn={true}>login</Button>
                    <Button width={"fit"} isMainBtn={false}>sign up</Button>
                </div>
            </div>
        </>
    )
}