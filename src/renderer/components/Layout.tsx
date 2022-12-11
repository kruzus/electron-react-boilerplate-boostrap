import Menubar from 'renderer/components/Navbar';

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <>
      <Menubar />

      {props.children}
    </>
  );
}
