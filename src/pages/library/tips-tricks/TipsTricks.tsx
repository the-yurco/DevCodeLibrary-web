import { Container, CardGroup } from "react-bootstrap";
import TipsTricks_card from "../../../components/Card/card-tips-tricks/TipsTricks_card";

const TipsTricks = () => {
  return (
    <>
      <section className="library-academies mt-5">
        <Container fluid className="grid ">
          <CardGroup className="py-3 gap-3 g-row-3">
            <TipsTricks_card
              card_header="Tip {React}"
              card_description="Components often share functionality with each other, such as logging or network requests. These can become difficult to maintain as the number using this logic increases. Developers are encouraged to abstract shared code and include it where necessary. "
              card_title="Higher-order components"
              card_footer="2 days ago"
              link="/tips-tricks/link"
            />
            <TipsTricks_card
              card_header="Tip {React}"
              card_description="No matter how well a project is put together, errors will still find a way in. These can happen in very specific circumstances, be hard to diagnose and leave the application in an unstable state – an absolute nightmare for both users and developers."
              card_title="Error boundaries"
              card_footer="2 days ago"
              link="/tips-tricks/link"
            />
          </CardGroup>
          <CardGroup className="py-3 gap-3 g-row-3">
            <TipsTricks_card
              card_header="Tip {React}"
              card_description="It is always important to keep a separation of concerns when developing different parts of an application. Where possible, keep the methods of fetching data away from how it is displayed. In React, a similar concept is employed when it comes to container and presentational components."
              card_title="Container and presentational components"
              card_footer="2 days ago"
              link="/tips-tricks/link"
            />
            <TipsTricks_card
              card_header="Tip {React}"
              card_description="There are times where a component needs to break out of its parent to be elsewhere in the DOM. Modal windows, for example, belong in the top level of the page in order to avoid issues with z-index and positioning."
              card_title="Portals"
              card_footer="2 days ago"
              link="/tips-tricks/link"
            />
          </CardGroup>
          <CardGroup className="py-3 gap-3 g-row-3">
            <TipsTricks_card
              card_header="Tip {React}"
              card_description="Styling an application with reusable components can lead to issues with clashing class names. Conventions such as BEM help mitigate the issue, but they aim to treat the symptoms rather than the problem."
              card_title="CSS with styled-components"
              card_footer="2 days ago"
              link="/tips-tricks/link"
            />
            <TipsTricks_card
              card_header="Tip {React}"
              card_description="One of the best ways to keep code clean is to use a linter tool. They define a set of rules the code should follow and will highlight anywhere it fails. By ensuring all code passes these rules before merging into the codebase, projects stay maintainable and code quality increases.
              "
              card_title="Using React-specific linting"
              card_footer="2 days ago"
              link="/tips-tricks/link"
            />
          </CardGroup>
        </Container>
      </section>
    </>
  );
};

export default TipsTricks;
