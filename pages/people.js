import Link from "next/link";
import React from "react";

const people = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>People</h1>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default people;
