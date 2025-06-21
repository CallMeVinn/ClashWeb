import { Button } from "@nextui-org/react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-row w-full justify-center p-6 gap-2">
        <Link href="/search">
            <Button
              id="search"
              auto
              bordered
              css={{borderWidth:"0.5px",borderColor:"#6b728050"}}
              color="neutral" >
                Search
            </Button>
          </Link>
          <Link href="/compare">  
            <Button
              id="compare"
              auto
              bordered
              css={{borderWidth:"0.5px",borderColor:"#6b728050"}}
              color="neutral" >
                Compare
            </Button>
            </Link>
      </div>
  );
}

export default Footer;