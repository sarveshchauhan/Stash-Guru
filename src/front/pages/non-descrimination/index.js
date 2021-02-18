import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useTranslation, Trans } from "react-i18next";

function NonDiscriminationPolicyCtrl() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window]);

  return (
    <>
      <section>
        <Container>
          <h1>{t("nonDiscriminationTitle")}</h1>
          <p>
            Utilizatorii noștri provin din mai multe medii și ne așteptăm să se
            trateze reciproc în conformitate cu legea, cu respect și fără
            discriminare.
          </p>
          <p>Dumneavoastră nu puteti:</p>
          <ul>
            <li>
              refuza de a incheia un contract cu un utilizator pe baza rasei,
              culorii, etniei, originii naționale, religiei, orientării sexuale,
              identității de gen, vârstei sau stării civile.
            </li>
            <li>
              impune termeni sau condiții diferite bazate pe rasă, culoare,
              etnie, origine națională, religie, orientare sexuală, identitate
              de gen, vârstă sau stare civilă.
            </li>
            <li>
              Publica un anunț sau face orice declarație care descurajează sau
              indică o preferință pentru sau împotriva oricărui oaspete din
              cauza rasei, culorii, etniei, originii naționale, religiei,
              orientării sexuale, identității de gen, vârstei sau stării civile.
            </li>
          </ul>
          <p>
            <strong>Identitatea sexuala</strong>
          </p>
          <p>
            Considerăm că genul unei persoane este ceea ce indica în profilul
            său de utilizator. O gazdă poate pune la dispoziția oaspeților un
            spațiu de stocare bazat pe sexul gazdei și nu pentru altul, în cazul
            în care acesta se bazează pe siguranță și / sau securitate.
          </p>
          <p>
            <strong>Dizabilitate</strong>
          </p>
          <p>Gazdele nu pot:</p>
          <ul>
            <li>
              Refuza un chirias pe baza oricărui handicap real sau perceput.
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}

export default NonDiscriminationPolicyCtrl;
