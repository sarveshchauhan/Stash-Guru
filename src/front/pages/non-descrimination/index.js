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
    
    <section className="section_padding bg-success">
      <Container fluid className="text-center">
        <h1>{t("nonDiscriminationTitle")}</h1>
      </Container>
    </section>

      <section className="section_padding">
        <Container>
          <p>
            Utilizatorii noștri provin din mai multe medii și ne așteptăm să se
            trateze reciproc în conformitate cu legea, cu respect și fără
            discriminare.
          </p>
          <p>Dumneavoastră nu puteti:</p>
          <ul className="pl-3">
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
          <h4>Identitatea sexuala</h4>
          <p>
            Considerăm că genul unei persoane este ceea ce indica în profilul
            său de utilizator. O gazdă poate pune la dispoziția oaspeților un
            spațiu de stocare bazat pe sexul gazdei și nu pentru altul, în cazul
            în care acesta se bazează pe siguranță și / sau securitate.
          </p>
          <h4>Dizabilitate</h4>
          <p>Gazdele nu pot:</p>
          <ul className="pl-3">
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
