import React, { useEffect, useState } from "react";
import Banner from "src/components/Banner";
import Bonuses from "src/components/Bonuses";
import ChangeLife from "src/components/ChangeLife";
import Experts from "src/components/Experts";
import ForYou from "src/components/ForYou";
import How from "src/components/How";
import Peculiarities from "src/components/Peculiarities";
import Teach from "src/components/Teach";

type Props = {};

const Crypto = (props: Props) => {
  const [teachItems, setTeachItems] = useState([]);

  useEffect(() => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then((json) => setTeachItems(json["teachItems"]));
  }, []);

  return (
    <>
      <Banner />
      <Peculiarities />
      <ForYou />
      <Teach teachItems={teachItems} />
      <Bonuses />
      <How />
      <Experts />
      <ChangeLife />
    </>
  );
};

export default Crypto;
