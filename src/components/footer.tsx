export default function Footer() {
  return (
    <>
      <div className="flex flex-col w-full h-[525px] px-4 py-4 sm:px-6 lg:px-12 mt-10">
        <div className="mt-10">
          <h1 className="font-extrabold text-[36px] ">open_source_protocol</h1>
          <p className="text-[16px] text-[#6B7280] mt-10">
            stark is a community-driven initiative. we prioritize stability,
            minimal bundle impact, and <br></br> semantic excellence.
            contributor guidelines are strictly enforced to maintain engineering{" "}
            <br></br> standards.
          </p>
          <div className=" flex flex-row mt-10 gap-8">
            <a className="font-mono font-normal border-b-2 border-black pb-1 w-fit">
              github_repositry
            </a>
            <a className="font-mono font-normal border-b-2 border-black pb-1 w-fit">
              technical_docs
            </a>
            <a className="font-mono font-normal border-b-2 border-black pb-1 w-fit">
              contribution_guide
            </a>
          </div>
          <p className="font-mono text-[20px] text-[#9CA3AF] mt-25">
            © 2026 STARK.MINIMILISTIC UI LIBRARY
          </p>
        </div>
      </div>
    </>
  );
}
