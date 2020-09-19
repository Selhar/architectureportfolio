type Title = {
  text: string;
};

export const Title = ({ text }: Title) => (
  <h1
    className={
      "text-2 text-3xl border-b tracking-widest uppercase text-yellow leading-none mb-4"
    }
  >
    {text}
  </h1>
);
