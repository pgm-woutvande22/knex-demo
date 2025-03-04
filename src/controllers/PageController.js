/**
 * PageController
 * Simple pages will be handled by this controller.
 * A simple page is a page that does not contain many business logic.
 */
import NavigationItem from "../models/NavigationItem.js";
import UserItem from "../models/User.js";
import Pages from "../models/Pages.js"

export const home = async (req, res) => {
  const navItems = await NavigationItem.query();
  const userData = await UserItem.query().findById(1);
  const page = await Pages.query().where('slug', 'home')
  console.log(page)

  const pageData = {
    title: page[0].title,
    content: page[0].content,
  };

  res.render("pages/home", {
    ...pageData,
    userData,
    menuItems: navItems,
  });
};

export const about = async (req, res) => {
  const navItems = await NavigationItem.query();

  const pageData = {
    title: "About Us",
    content: `
      <p>We are a small company that does great things!</p>
      <p>If you would like to drink the best coffee in the world, you are in the right place.</p>
      <p>Our coffee is made from the best beans in the world and is prepared by the best baristas.</p>
    `,
  };
  res.render("pages/default", {
    ...pageData,
    menuItems: navItems,
  });
};

export const contact = async (req, res) => {
  const navItems = await NavigationItem.query();

  const pageData = {
    title: "Contact",
    content: `
      <p>Feel free to contact us at:</p>
      <p>Phone: 123-456-7890</p>
      <p>Email:
        <a href="mailto:example@example.com">john@doe.be</a>
      </p>
      <p>And some advice: "Don't drink and code!"</p>
    `,
  };
  res.render("pages/default", {
    ...pageData,
    menuItems: navItems,
  });
};
