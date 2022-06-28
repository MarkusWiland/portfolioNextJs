import s from "./Footer.module.scss";
export const Footer = () => {
  return (
    <>
      <footer className={`${s.footer} container`}>
        <main className="layout">
          <div className={s.footerFlex}>
            <div>
          <h3>Kontakt</h3>
              <p>heööp</p>
              <p>test</p>
              <p>lol</p>
            </div>
            <div>
            <h3>Kontakt</h3>
              <p>heööp</p>
              <p>test</p>
              <p>lol</p>
            </div>
            <div>
            <h3>Kontakt</h3>
              <p>heööp</p>
              <p>test</p>
              <p>lol</p>
            </div>
          </div>
        </main>
      </footer>
    </>
  );
};
