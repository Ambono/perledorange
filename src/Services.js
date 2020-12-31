import React, { Component } from "react";
import img1 from "./img/Rotaryclubprizegarch.PNG";
import img2 from "./img/tartardavocat.PNG";
import { withNamespaces } from "react-i18next";
import "./index.css";
class Services extends Component {
  render() {
    const { t } = this.props;
    return (
      <div >
        {/* <h1>{t("pages.services.text.header1")}</h1> */}
        <h2>{t("pages.services.text.header2")}</h2>
        <p>{t("pages.services.text.paragraph1")}</p>
        <p>{t("pages.services.text.paragraph2")}</p>
        <p>{t("pages.services.text.paragraph3")}</p>
        <div
          class="center-image"
          style={{ padding: "10px 20px", textAlign: "center", color: "white" }}
        >
          <img src={img1} alt="prizerotaryclub"  />
        </div>
        <div
          class="center-image"
          style={{ padding: "10px 20px", textAlign: "center", color: "white" }}
        >
          <img src={img2} alt="tartar" />
        </div>

        {t("pages.services.text.paragraph4")}

        <h2>{t("pages.services.text.header3")}</h2>
        {t("pages.services.text.paragraph5")}
        <p>{t("pages.services.text.paragraph6")}</p>
        <ol>
          <li>{t("pages.services.text.listitem1")}</li>
          <li>{t("pages.services.text.listitem2")}</li>
          <li>{t("pages.services.text.listitem3")}</li>
          <li>{t("pages.services.text.listitem4")}</li>
          <li>{t("pages.services.text.listitem5")}</li>
          <li>{t("pages.services.text.listitem6")}</li>
        </ol>
        <p>{t("pages.services.text.paragraph7")}</p>
      </div>
    );
  }
}

export default withNamespaces()(Services);
