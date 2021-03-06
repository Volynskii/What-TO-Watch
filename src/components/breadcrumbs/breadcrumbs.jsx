import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Breadcrumbs({children}) {
  return (
   ''
  );
}

function Item({label, href}) {
  const Component = href ? Link : `a`;

  return (
    <li className="breadcrumbs__item">
      <Component
        className="breadcrumbs__link"
        to={href}>
        {label}
      </Component>
    </li>
  );
}

Breadcrumbs.propTypes = {
  /** Массив ссылок */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Подпись к ссылке */
      label: PropTypes.string,
      /** Ссылка */
      href: PropTypes.string,
    }),
  ),
};
export {Item};
export default Breadcrumbs;
