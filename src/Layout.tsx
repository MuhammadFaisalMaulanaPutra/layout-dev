import {
  NavigationLayout,
  ContentLayout,
  MainLayout,
  SectionLayout,
} from "./layouts";

function Body() {
  const myStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "70px",
    width: "70px",
    justifyContent: "center",
    color: "#fff",
  };
  return (
    <ul
      style={{
        display: "flex",
        textAlign: "center",
        padding: 0,
        margin: 0,
        flexDirection: "column",
        listStyleType: "none",
      }}
    >
      <li style={myStyle}>Item 1</li>
      <li style={myStyle}>Item 2</li>
      <li style={myStyle}>Item 3</li>
      <li style={myStyle}>Item 4</li>
      <li style={myStyle}>Item 5</li>
      <li style={myStyle}>Item 6</li>
    </ul>
  );
}

function sideBar() {
  return (
    <div
      style={{
        backgroundColor: "darkorange",
        padding: "20px",
      }}
    >
      <h1>SideBar</h1>
    </div>
  );
}

function Contents() {
  return (
    <div
      style={{
        backgroundColor: "orange",
        padding: "20px",
      }}
    >
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
    </div>
  );
}

function Layout() {
  return (
    <div>
      <NavigationLayout
        headerNav={<h1>NAV</h1>}
        bodyNav={<Body />}
        footerNav={<h1>FT</h1>}
        content={
          <ContentLayout
            header={<h1 style={{ padding: "16px" }}>Title</h1>}
            main={
              <MainLayout
                menu={
                  <div
                    style={{
                      backgroundColor: "green",
                      padding: "20px",
                      color: "#fff",
                    }}
                  >
                    <h1>Menu</h1>
                    <h2>Menu</h2>
                  </div>
                }
                section={
                  <SectionLayout sidebar={sideBar()} content={Contents()} />
                }
              />
            }
          />
        }
      />
    </div>
  );
}

export default Layout;
