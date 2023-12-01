import {
  NavigationLayout,
  ContentLayout,
  // MainLayout,
  SectionLayout,
  MainLayout,
} from "./layouts";

import { IconOnly } from "./components/tabList";
import {
  Navigation20Regular,
  MoreHorizontal20Regular,
  GridDots20Regular,
} from "@fluentui/react-icons";
import { useState } from "react";
import { makeStyles } from "@fluentui/react-components";

// function Body() {
//   const myStyle: React.CSSProperties = {
//     display: "flex",
//     flexDirection: "column",
//     height: "70px",
//     width: "70px",
//     justifyContent: "center",
//     color: "#000",
//   };
//   return (
//     <ul
//       style={{
//         display: "flex",
//         textAlign: "center",
//         padding: 0,
//         margin: 0,
//         flexDirection: "column",
//         listStyleType: "none",
//       }}
//     >
//       <li style={myStyle}>Item 1</li>
//       <li style={myStyle}>Item 2</li>
//       <li style={myStyle}>Item 3</li>
//       <li style={myStyle}>Item 4</li>
//       <li style={myStyle}>Item 5</li>
//       <li style={myStyle}>Item 6</li>
//     </ul>
//   );
// }

function sideContent() {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h1>SidePanel</h1>
    </div>
  );
}

function Contents() {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: 5,
      }}
    >
      <h1>Content</h1>
      <span>
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
      </span>
    </div>
  );
}

const useStyles = makeStyles({
  nav: { width: "200px" },
  sideContent: { width: "300px" },
});

function Layout() {
  const [sideBar, setSideBar] = useState(false);

  const style = useStyles();

  return (
    <div>
      <ContentLayout
        header={
          <div>
            <div
              style={{
                display: "flex",
                width: "48px",
                justifyContent: "center",
              }}
            >
              <GridDots20Regular />
            </div>
          </div>
        }
        main={
          <NavigationLayout
            headerNav={
              <Navigation20Regular onClick={() => setSideBar(!sideBar)} />
            }
            bodyNav={<IconOnly isOpen={sideBar} />}
            footerNav={<MoreHorizontal20Regular />}
            navWidth={sideBar ? "240px" : ""}
            // style={sideBar ? style.nav : ""}
            content={
              <MainLayout
                menu={
                  <div style={{ padding: "20px" }}>
                    <h1>Main Content</h1>
                  </div>
                }
                section={
                  <SectionLayout
                    sidebar={sideContent()}
                    style={style.sideContent}
                    content={Contents()}
                  />
                }
              />
              // <SectionLayout
              //   sidebar={sideContent()}
              //   style={style.sideContent}
              //   content={Contents()}
              // />
            }
          />
        }
      />
    </div>
  );
}

export default Layout;
