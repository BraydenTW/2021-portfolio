import Nav from '@/components/Nav';

export default function Container({ children }) {
  return (
    <div className="bg-white font-sans">
      <Nav />
      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-black"
      >
        {children}
      </main>
    </div>
  );
}
