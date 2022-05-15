import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
        <div class="navbar_logo">
            <img src="/netflix.png" href="/"/>
        </div>
        <ul class="navbar_menu">
            <li>
                <a href="">Home</a></li>
            <li>
                <a href="">Photo</a>
            </li>
            <li>
                <a href="">Schedule</a>
            </li>
            <li>
                <a href="">FAQ</a>
            </li>
            <li>
                <a href="">Booking</a>
            </li>
        </ul>
        <ul class="navbar_icons">
            <li>
              <i class="fa-brands fa-facebook-square"></i>
            </li>
            <li>
               <i class="fa-brands fa-twitter"></i>
            </li>
        </ul>
        <a href="#" class="navbar_togleBtn">
            <i class="fa-solid fa-bars"></i>
        </a>


      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <Link href="/signIn">
          <a className={router.pathname === "/signIn" ? "active" : ""}>
            SignIn
          </a>
        </Link>
        <Link href="/signUp">
          <a className={router.pathname === "/signUp" ? "active" : ""}>
            SignUp
          </a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
