"use client";

import { use, useEffect, useState } from "react";
import styles from "../page.module.css";
import { ExpirienceButton } from "./expirience-button";
import { Crossriver } from "./crossriver";
import { Rapaport } from "./rapaport";

export const Expirience = () => {
  return (
    <div>
      {/*  <div className={styles.expiriences}>
        <ExpirienceButton
          id={1}
          setId={setOpen}
          currentId={open}
          position="Frontend Architect"
          years="2022 - Present"
          company="Crossriver"
        />
        <ExpirienceButton
          id={2}
          setId={setOpen}
          currentId={open}
          position="Frontend Architect - Lead Frontend Developer"
          years="2016 - 2022"
          company="Rapaport"
        />
        <ExpirienceButton
          id={3}
          setId={setOpen}
          currentId={open}
          position="Frontend Architect"
          years="2022 - Present"
          company="Crossriver"
        />
        <ExpirienceButton
          id={4}
          setId={setOpen}
          currentId={open}
          position="Frontend Architect"
          years="2022 - Present"
          company="Crossriver"
        />
      </div> */}
      <div className={`${styles.expirienceContent} expirience`}>
        <Crossriver />
        <Rapaport />
        {/*   <Crossriver />
        <Crossriver /> */}
      </div>
    </div>
  );
};
