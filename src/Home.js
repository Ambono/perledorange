import React, { Component } from "react";
import Vanessa from "./vanessa/vanessa";
import { withNamespaces } from "react-i18next";

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="home">
        <Vanessa />
        <h2>
          {t("pages.home.text.header1")}
          <br />
        </h2>

        <p>{t("pages.home.text.paragraph1")}</p>

        <p>{t("pages.home.text.paragraph2")}</p>

        <p>{t("pages.home.text.paragraph3")}</p>

        <p>{t("pages.home.text.paragraph4")}</p>
        <p>{t("pages.home.text.footer")}</p>
      </div>
    );
  }
}

export default withNamespaces()(Home);
