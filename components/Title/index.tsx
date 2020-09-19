type Title = {
  text: string;
  classes?: string;
};

export const Title = ({ text, classes }: Title) => (
  <h1
    className={`text-2 text-3xl border-b tracking-widest uppercase text-yellow leading-none mb-4 ${classes}`}
  >
    {text}
  </h1>
);
