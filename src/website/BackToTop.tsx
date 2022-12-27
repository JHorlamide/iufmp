import React from "react";

const BackToTop = () => {
  const [bottomPage, setBottomPage] = React.useState(false);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setBottomPage(true);
      return;
    } else {
      setBottomPage(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {bottomPage ? (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="fixed px-8 py-4 font-[20px] bottom-[40px] right-[40px] 
          bg-blue-600 text-white text-center z-50 rounded-full"
        >
          Back to top
        </button>
      ) : null}
    </React.Fragment>
  );
};

export default BackToTop;
