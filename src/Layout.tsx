import Content from "./layouts/content/Content";
import Main from "./layouts/main/Main";
import Navigation from "./layouts/navigation/Navigation";
import Section from "./layouts/section/Section";

function Body() {
  return (
    <ul className="nav-list">
      <li className="nav-item">Item 1</li>
      <li className="nav-item">Item 2</li>
      <li className="nav-item">Item 3</li>
      <li className="nav-item">Item 4</li>
      <li className="nav-item">Item 5</li>
      <li className="nav-item">Item 6</li>
    </ul>
  );
}

function sideBar() {
  return (
    <>
      <h1>SideBar</h1>
    </>
  );
}

function Contents() {
  return (
    <>
      <h1>Content</h1>
      <h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        rerum libero dignissimos provident quaerat commodi ad soluta, facere
        voluptas, tempora eveniet placeat ipsam? Facilis atque iusto, quod
        ratione error assumenda dolorum, totam culpa repudiandae vero ipsum
        obcaecati illo! Odio impedit assumenda soluta illum blanditiis alias
        accusamus, ab aspernatur sit amet cupiditate rem quas veritatis quam
        consequatur nemo, veniam accusantium, doloremque eos ipsa debitis
        laborum! Ratione facere ullam sapiente error sint voluptatem quae
        mollitia? Nesciunt quidem necessitatibus, quos iusto doloribus
        molestias? Eius quia ex quaerat adipisci soluta voluptatibus praesentium
        atque aut accusantium labore. Placeat excepturi aut illo, iste incidunt
        asperiores odio.
      </h2>
    </>
  );
}

function Layout() {
  return (
    <div>
      <Navigation
        headerNav={<h1>NAV</h1>}
        bodyNav={<Body />}
        footerNav={<h1>FT</h1>}
        content={
          <Content
            header={<h1>Title</h1>}
            main={
              <Main
                menu={
                  <>
                    <h1>Menu</h1>
                    <h2>Menu</h2>
                  </>
                }
                section={<Section sidebar={sideBar()} content={Contents()} />}
              />
            }
          />
        }
      />
    </div>
  );
}

export default Layout;
