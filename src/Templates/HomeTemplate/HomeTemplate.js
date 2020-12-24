import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from '../../Layout/Footer'

const HomeLayout = ({ ...props }) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

const HomeTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
};
export default HomeTemplate;
