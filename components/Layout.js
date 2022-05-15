import Navbar from "./Navbar";

export default function Layout({ lowComponent }) {
  return (
    <>
      <Navbar />
      <div>{lowComponent}</div>
    </>
  );
}