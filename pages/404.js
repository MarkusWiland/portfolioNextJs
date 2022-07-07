import React from "react";

export default function FourOhFour() {
  return (
    <main className="fourohfour">
      <section>
        <h1>404 - page not found</h1>
        <p>Denna sidan finns inte...</p>
        <button onClick={() => history.back()}>Tillbaka</button>
      </section>
    </main>
  );
}
