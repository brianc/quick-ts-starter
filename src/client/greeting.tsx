import React from "react";

interface IProps {}

export const Greeting: React.FC<IProps> = (props) => {
  const [greeting, setGreeting] = React.useState("");

  React.useEffect(() => {
    fetch("/some-data").then(async (res) => {
      const json = await res.json();
      setGreeting(json.payload);
    });
  }, []);

  return <div>message: {greeting}</div>;
};
